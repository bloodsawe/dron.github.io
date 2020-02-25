// close popup

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll(".careers-position-page").length > 0) {
      let buttonApply = Array.from(document.querySelectorAll(".modal-button"));
      let closePopUp = document.querySelector(".popup__close");
      let popUpWrap = document.querySelector(".popup-wrap");
      let popUp = document.querySelector(".popup");
      let popUpContent = document.querySelector(".popup__content");
      
      
      buttonApply.forEach((e) => {
          e.addEventListener("click", function() {
              popUpWrap.style.display = "block";
              popUpWrap.style.opacity = "1";
              popUp.style.display = "block";
              popUp.style.opacity = "1";
            })
        })
        
        closePopUp.addEventListener("click", function() {
            setTimeout(function(){
                popUpWrap.style.display = "none";
            },1000)
            popUpWrap.style.opacity = "0";
            popUp.style.opacity = "0";
        });
        
        
        popUpWrap.addEventListener("click", function(e) {
          if (e.target != popUp && e.target != popUp.childNodes) {
            setTimeout(function(){
                popUpWrap.style.display = "none";
              popUp.style.display = "";
            },1000)
            popUp.style.opacity = "0";
            popUpWrap.style.opacity = "0";
          }       
        });
        popUp.addEventListener("click", function(e) {
            e.stopPropagation();
        });
  }
});


