 
// let tabSelect =Array.from(document.querySelectorAll(".select-block__item"));
// let getThumb = document.querySelector(".collection-scroll__thumb");


// tabSelect.forEach((elem) => {
//     elem.classList.add("active");
//     elem.addEventListener("click", () => {
//         let attr = elem.getAttribute("data-tab");
           
//         let animationTextStart =document.querySelector("[data-tab = 'start']");
//         let animationAttrStart = animationTextStart.getAttribute("data-tab");
    
//         let animationTexMiddle =document.querySelector("[data-tab = 'middle']");
//         let animationAttrMiddle = animationTexMiddle.getAttribute("data-tab");
    
//         let animationTextEnd =document.querySelector("[data-tab = 'end']");
//         let animationAttrEnd = animationTextEnd.getAttribute("data-tab");
//         switch (attr) {
//             case "start":
//                 getThumb.style.top = "0";
//                 break;
//             case "middle":
//                 getThumb.style.top = "34%";
//                 break;
//             case "end":
//                 getThumb.style.top = "67%";
//                 break;
//         };

//         if(elem.classList.contains("active")) {
//             switch (attr) {
//                 case animationAttrStart:
//                     animationTextStart.style.animation = "show 1s linear 0s 1 normal";
//                     setTimeout(() => {
//                         animationTextStart.style.animation = ""
//                     }, 1000);                   
//                     break;
//                 case animationAttrMiddle:
//                     animationTexMiddle.style.animation = "show 1s linear 0s 1 normal";
//                     setTimeout(() => {
//                         animationTexMiddle.style.animation = "";
//                     }, 1000);                  
//                     break;
//                 case animationAttrEnd:
//                     animationTextEnd.style.animation = "show 1s linear 0s 1 normal";
//                     setTimeout(() => {
//                         animationTextEnd.style.animation = "";
//                     }, 1000);                  
//                     break;
//             };
//             elem.classList.remove("active");
//             elem.previousElementSibling.classList.add("active");
//             elem.nextElementSibling.classList.add("active");
//         };
//     });
// });


let tabSelect = Array.from(document.querySelectorAll(".select-block__item"));
let prevElem = bufferElem = nextElem = 0;
let animationText = document.querySelector(`[data-tab = '${nextElem}']`);

tabSelect.forEach((elem) => {
    elem.addEventListener("click", () => {
        prevElem = bufferElem;
        nextElem = elem.getAttribute("data-slick-index");
        bufferElem = nextElem;

        document.querySelector(".collection-scroll__thumb").style.top = `${nextElem*33.5}%`;

        let animationText = document.querySelector(`[data-tab = '${nextElem}']`);
        if (prevElem < nextElem) {
            animationText.style.animation = "down 1s linear 0s 1 normal";
            setTimeout(() => {
                animationText.style.animation = ""
            }, 1000);                   
        } else if (prevElem > nextElem) {
            animationText.style.animation = "up 1s linear 0s 1 normal";
            setTimeout(() => {
                animationText.style.animation = ""
            }, 1000); 
        }
    });
});







