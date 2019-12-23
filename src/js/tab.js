 
let tabSelect =Array.from(document.querySelectorAll(".select-block__item"));
let getThumb = document.querySelector(".collection-scroll__thumb");


tabSelect.forEach((elem) => {
    elem.classList.add("active");
    elem.addEventListener("click", () => {
        let attr = elem.getAttribute("data-tab");
           
        let animationTextStart =document.querySelector("[data-tab = 'start']");
        let animationAttrStart = animationTextStart.getAttribute("data-tab");
    
        let animationTexMiddle =document.querySelector("[data-tab = 'middle']");
        let animationAttrMiddle = animationTexMiddle.getAttribute("data-tab");
    
        let animationTextEnd =document.querySelector("[data-tab = 'end']");
        let animationAttrEnd = animationTextEnd.getAttribute("data-tab");
        switch (attr) {
            case "start":
                getThumb.style.top = "0";
                break;
            case "middle":
                getThumb.style.top = "34%";
                break;
            case "end":
                getThumb.style.top = "67%";
                break;
        };

        if(elem.classList.contains("active")) {
            switch (attr) {
                case animationAttrStart:
                    animationTextStart.style.animation = "show 1s linear 0s 1 normal";
                    setTimeout(() => {
                        animationTextStart.style.animation = ""
                    }, 1000);                   
                    break;
                case animationAttrMiddle:
                    animationTexMiddle.style.animation = "show 1s linear 0s 1 normal";
                    setTimeout(() => {
                        animationTexMiddle.style.animation = "";
                    }, 1000);                  
                    break;
                case animationAttrEnd:
                    animationTextEnd.style.animation = "show 1s linear 0s 1 normal";
                    setTimeout(() => {
                        animationTextEnd.style.animation = "";
                    }, 1000);                  
                    break;
            };
            elem.classList.remove("active");
            elem.previousElementSibling.classList.add("active");
            elem.nextElementSibling.classList.add("active");
        };
    });
});










