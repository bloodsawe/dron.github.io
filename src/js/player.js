document.addEventListener("DOMContentLoaded",function() {
  if(document.querySelector(".sectors-oil,.services,.services-collection")) {
    function init() {
      _video = document.getElementById("video");
      _video.addEventListener("pause", () => {
        _playBtn.style.display = 'block';
        
      })
      _video.addEventListener("play", () => {
        _playBtn.style.display = 'none';
        
      })
      _playBtn = document.getElementById("playBtn");
      _pauseBtn = document.getElementById("pauseBtn");
    }
    document.addEventListener("DOMContentLoaded", init(), false);
  }
});
