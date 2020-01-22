(function($) {
  var selectors = [];

  var checkBinded = false;
  var checkLock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $priorAppeared = [];

  function isAppeared() {
    return $(this).is(":appeared");
  }

  function isNotTriggered() {
    return !$(this).data("_appear_triggered");
  }

  function process() {
    checkLock = false;

    for (
      var index = 0, selectorsLength = selectors.length;
      index < selectorsLength;
      index++
    ) {
      var $appeared = $(selectors[index]).filter(isAppeared);

      $appeared
        .filter(isNotTriggered)
        .data("_appear_triggered", true)
        .trigger("appear", [$appeared]);

      if ($priorAppeared[index]) {
        var $disappeared = $priorAppeared[index].not($appeared);
        $disappeared
          .data("_appear_triggered", false)
          .trigger("disappear", [$disappeared]);
      }
      $priorAppeared[index] = $appeared;
    }
  }

  function addSelector(selector) {
    selectors.push(selector);
    $priorAppeared.push();
  }

  // ":appeared" custom filter
  $.expr.pseudos.appeared = $.expr.createPseudo(function(_arg) {
    return function(element) {
      var $element = $(element);

      if (!$element.is(":visible")) {
        return false;
      }

      var windowLeft = $window.scrollLeft();
      var windowTop = $window.scrollTop();
      var offset = $element.offset();
      var left = offset.left;
      var top = offset.top;

      if (
        top + $element.height() >= windowTop &&
        top - ($element.data("appear-top-offset") || 0) <=
          windowTop + $window.height() &&
        left + $element.width() >= windowLeft &&
        left - ($element.data("appear-left-offset") || 0) <=
          windowLeft + $window.width()
      ) {
        return true;
      }
      return false;
    };
  });

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(selector, options) {
      $.appear(this, options);
      return this;
    }
  });

  $.extend({
    appear: function(selector, options) {
      var opts = $.extend({}, defaults, options || {});

      if (!checkBinded) {
        var onCheck = function() {
          if (checkLock) {
            return;
          }
          checkLock = true;

          setTimeout(process, opts.interval);
        };

        $(window)
          .scroll(onCheck)
          .resize(onCheck);
        checkBinded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }

      addSelector(selector);
    },
    // force elements's appearance check
    force_appear: function() {
      if (checkBinded) {
        process();
        return true;
      }
      return false;
    }
  });
})(
  (function() {
    if (typeof module !== "undefined") {
      // Node
      return require("jquery");
    }
    return jQuery;
  })()
);
function isAnyPartOfElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

let time = 600;
$("section").appear();
$("section").on("appear", function(event, $all_appeared_elements) {
  $($all_appeared_elements).fadeTo(time, 1, function() {});
});
$("section").on("disappear", function(event, $all_disappeared_elements) {
  $($all_disappeared_elements).fadeTo(time, 0, function() {});
});
document.addEventListener("DOMContentLoaded", function() {
  $.force_appear();
  if (document.querySelectorAll(".homepage").length > 0) {
    let main_color = window.getComputedStyle(document.querySelector("main"))
      .background;
    console.log(main_color);
    window.addEventListener("scroll", function() {
      if (isAnyPartOfElementInViewport(document.querySelector(".location"))) {
        document.querySelector("main").classList.add("show-before");
        $(".join h3,.join p").css("color", "white");
        document.querySelector(".join .main-button__text").style.color =
          "black";
      } else {
        $(".join h3,.join p").css("color", "");
        document.querySelector("main").classList.remove("show-before");
      }
    });
  }
});
$(".banner-slider").on("init", function(event, slick) {
  $.force_appear();
});
