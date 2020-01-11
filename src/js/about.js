document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelectorAll(".aboutUs").length > 0) {
      let blockLeft = document.querySelector(
        ".our-awards .video-description__text"
      ).offsetLeft;
      let h1Left = document.querySelector(
        ".our-awards .video-description__text h1"
      ).offsetLeft;
      // console.log(blockLeft, h1Left);
      document.querySelector(
        ".our-awards .video-description__text"
      ).style.left = `${blockLeft + h1Left + 10}px`;
    }

    if (document.querySelectorAll(".aboutUs").length > 0) {
        let dropDown = Array.from(document.querySelectorAll(".awards__arrow"));
        
        dropDown.forEach((elem) => {
            elem.addEventListener("click", (e) => {
                let list = e.currentTarget.nextSibling;
                list.classList.toggle("active");
            })
        })    
    }
});