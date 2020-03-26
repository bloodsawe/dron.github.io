document.addEventListener("DOMContentLoaded",function() {
  if(document.querySelector(".aboutUs, .services, .careers-page, .sectors-oil, .sectors-grid, .sectors-generation, .sectors-construction, .services-collection")) {
    function init() {
      _video = document.getElementById("video");
      _video.play(); 
      _video.pause();



      // var playPromise = _video.play();
      // if (playPromise !== undefined) {
      //   playPromise.then(_ => {
      //     _video.pause();
      //   })
      //   .catch(error => {});
      // }



      _video.addEventListener("pause", () => _playBtn.style.display = 'block')
      _video.addEventListener("play", () =>_playBtn.style.display = 'none')
      _video.addEventListener("seeking", () =>_playBtn.style.display = 'none')
      _playBtn = document.getElementById("playBtn");
      // _pauseBtn = document.getElementById("pauseBtn");
      _video.addEventListener("loadeddata", () => { ScrollReveal().sync() })

      if (navigator.userAgent.search(/Safari/) && navigator.userAgent.search(/Mobile/) && window.outerWidth <= 375) {
        // alert('Safari Mobile');
        _playBtn.style.display = 'none';
      }

    }
    document.addEventListener("DOMContentLoaded", init(), false);
  }
});





// _video.addEventListener("loadeddata", () => { _video.play(); _video.pause(); })

// var playPromise = _video.play();
// if (playPromise !== undefined) {
//   playPromise.then(_ => {
//     _video.pause();
//   })
//   .catch(error => {});
// }

// setTimeout(() => {
//   _video.play(); 
//   _video.pause();
// }, 1000)
