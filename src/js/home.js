document.addEventListener("DOMContentLoaded",function() {
    if(document.querySelector(".homepage")) {
        let banner = document.querySelector(".banner-slider__item");
        banner.style.paddingTop = "120px";

        let img =Array.from(banner.querySelectorAll("img.down"));
        img.map((e)=> {
            e.classList.remove("down")
        })

    }
});

// anchor
$(document).ready(function(){
    $("[href='#anchor']").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

