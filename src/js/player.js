document.addEventListener("DOMContentLoaded",function() {
  if(document.querySelector(".aboutUs, .services, .careers-page, .sectors-oil, .sectors-grid, .sectors-generation, .sectors-construction, .services-collection")) {
    function init() {
      _video = document.getElementById("video");
      _video.play(); 
      _video.pause();
      _video.addEventListener("pause", () => _playBtn.style.display = 'block')
      _video.addEventListener("play", () =>_playBtn.style.display = 'none')
      _video.addEventListener("seeking", () =>_playBtn.style.display = 'none')
      // _video.addEventListener("loadeddata", () => { _video.play(); _video.pause(); })
      _playBtn = document.getElementById("playBtn");
      _pauseBtn = document.getElementById("pauseBtn");
    }
    document.addEventListener("DOMContentLoaded", init(), false);
  }
});