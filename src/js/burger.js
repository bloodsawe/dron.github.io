(function($){
    $(function() {
      $('.header-nav__burger').on('click', function() {
        $(this).closest('.header-nav').toggleClass('state_open');
      });
    });
})(jQuery);



document.addEventListener("DOMContentLoaded", ()=> {
    let burger = document.querySelector(".header-nav__burger");
    
    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle");
    });
});
