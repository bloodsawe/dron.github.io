document.addEventListener("DOMContentLoaded",function() {
  if(document.querySelector(".aboutUs, .services, .careers-page, .sectors-oil, .sectors-grid, .sectors-generation, .sectors-construction, .services-collection")) {
    // Function for controll video button in other  device 
    function init() {
      _video = document.getElementById("video");

      var playPromise = _video.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          _video.pause();
        })
        .catch(error => {});
      }

      _video.addEventListener("pause", () => _playBtn.style.display = 'block')
      _video.addEventListener("play", () =>_playBtn.style.display = 'none')
      _video.addEventListener("seeking", () =>_playBtn.style.display = 'none')
      _playBtn = document.getElementById("playBtn");
      _video.addEventListener("loadeddata", () => { ScrollReveal().sync() })

    }

    document.addEventListener("DOMContentLoaded", init(), false);
  }
});
