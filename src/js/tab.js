
// document.addEventListener("DOMContentLoaded", function() {
//   if(document.querySelector(".homepage,.services-collection,.services,.sectors-oil,.sectors-grid,.sectors-construction,.sectors-generation")) {
//         let blockDescription = Array.from(document.querySelectorAll(".collection-block__description"))
//     let blockTab = Array.from(document.querySelectorAll(".select-block__item"))
//     let descriptionText = Array.from(document.querySelectorAll(".collection-block__text-animation"))

//     blockDescription.forEach((elem, i) => elem.setAttribute("data-tab", i))
//     blockTab.forEach((elem, i) => elem.setAttribute("data-tab", i))
//     descriptionText.forEach((elem, i) => elem.setAttribute("data-tab", i))

//     var selectedBlockDescription = '0';
//     var prevElem = bufferElem = nextElem = '0';

//     blockDescription.forEach(elem => { 
//       ( elem.getAttribute("data-tab" ) == selectedBlockDescription) ? elem.style.display = "block" : elem.style.display = "none"
//     })

//     scroll = ((100 / blockTab.length) + 0.1).toFixed(1);
//     scrollHeight = ((100 / blockTab.length) + 0.1).toFixed(1);

//     document.querySelector('.collection-scroll__thumb').style.height = `${scrollHeight}%`;

//     blockTab.forEach(elem => {
//       elem.addEventListener("click", () => {
//         prevElem = bufferElem;
//         nextElem = elem.getAttribute("data-tab");
//         bufferElem = nextElem;

//         selectedBlockDescription = elem.getAttribute("data-tab")

//         document.querySelector(".collection-scroll__thumb").style.top = "".concat(nextElem * scroll, "%");

//         blockDescription.forEach(elem => { 
//           ( elem.getAttribute("data-tab" ) == selectedBlockDescription) ? elem.style.display = "block" : elem.style.display = "none" 
//         })
//         descriptionText.forEach(elem => { 
//           if ( elem.getAttribute("data-tab" ) == selectedBlockDescription) {
//             if (prevElem < nextElem) {
//               elem.style.animation = "down 1s linear 0s 1 normal";
//               setTimeout(() => { elem.style.animation = "" }, 1000);
//             } else if (prevElem > nextElem) {
//               elem.style.animation = "up 1s linear 0s 1 normal";
//               setTimeout(() => { elem.style.animation = "" }, 1000);
//             }  
//           }
//         })
//       })
//     })
//   }
// })


// ie


document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".homepage, .services-collection, .services, .sectors-oil, .sectors-grid, .sectors-construction, .sectors-generation")) {
    var blockDescription = Array.from(document.querySelectorAll(".collection-block__description"));
    var blockTab = Array.from(document.querySelectorAll(".select-block__item"));
    var descriptionText = Array.from(document.querySelectorAll(".collection-block__text-animation"));
    var readMoreBtn = Array.from(document.querySelectorAll(".read-more-button"));

    readMoreBtn.forEach(function (elem) {

      elem.addEventListener('click', function() {
        elem.style.display = "none";
        descriptionText.forEach((elem) => {
          if (elem.getAttribute("data-tab") == selectedBlockDescription) {
            elem.style.maxHeight = "2000px";
          }
        })
      })
    });
    
    blockDescription.forEach(function (elem, i) {
      return elem.setAttribute("data-tab", i);
    });
    blockTab.forEach(function (elem, i) {
      return elem.setAttribute("data-tab", i);
    });
    descriptionText.forEach(function (elem, i) {
      return elem.setAttribute("data-tab", i);
    });
    readMoreBtn.forEach(function (elem, i) {
      return elem.setAttribute("data-tab", i);
    });
    var selectedBlockDescription = '0';
    var prevElem = bufferElem = nextElem = '0';
    blockDescription.forEach(function (elem) {
      elem.getAttribute("data-tab") == selectedBlockDescription ? elem.style.display = "block" : elem.style.display = "none";
    });
    scroll = (100 / blockTab.length + 0.1).toFixed(1);
    scrollHeight = (100 / blockTab.length + 0.1).toFixed(1);
    document.querySelector('.collection-scroll__thumb').style.height = "".concat(scrollHeight, "%");
    blockTab.forEach(function (elem) {
      elem.addEventListener("click", function () {
        prevElem = bufferElem;
        nextElem = elem.getAttribute("data-tab");
        bufferElem = nextElem;
        selectedBlockDescription = elem.getAttribute("data-tab");
        document.querySelector(".collection-scroll__thumb").style.top = "".concat(nextElem * scroll, "%");
        blockDescription.forEach(function (elem) {
          elem.getAttribute("data-tab") == selectedBlockDescription ? elem.style.display = "block" : elem.style.display = "none";
        });
        descriptionText.forEach(function (elem) {
          if (elem.getAttribute("data-tab") == selectedBlockDescription) {
            if (prevElem < nextElem) {
              elem.style.animation = "down 1s linear 0s 1 normal";
              setTimeout(function () {
                elem.style.animation = "";
              }, 1000);
            } else if (prevElem > nextElem) {
              elem.style.animation = "up 1s linear 0s 1 normal";
              setTimeout(function () {
                elem.style.animation = "";
              }, 1000);
            }
          } else {
            elem.style.maxHeight = "135px";
            readMoreBtn.forEach(function (elem) {
              elem.style.display = "block";
            });
          }
        });
        readMoreBtn.forEach(function (elem) {
          
          if (elem.getAttribute("data-tab") == selectedBlockDescription) {
            if (prevElem < nextElem) {
              elem.style.animation = "down 1s linear 0s 1 normal";
              setTimeout(function () {
                elem.style.animation = "";
              }, 1000);
            } else if (prevElem > nextElem) {
              elem.style.animation = "up 1s linear 0s 1 normal";
              setTimeout(function () {
                elem.style.animation = "";
              }, 1000);
            }
          }
        });
      });
    });
  }
});