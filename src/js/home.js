document.addEventListener("DOMContentLoaded",function() {
    if(document.querySelector(".homepage")) {
        let banner = document.querySelector(".banner-slider__item");
        banner.style.paddingTop = "120px";

        let img = document.querySelector("img.down");
        img.classList.remove("down");
    }
})