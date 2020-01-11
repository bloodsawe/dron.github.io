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
});
