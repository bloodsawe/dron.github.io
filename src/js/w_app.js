document.addEventListener("DOMContentLoaded", function() {
  if (screen.availWidth >= 300) {
    var cn = new CanvasNest(document.querySelector("section.animation"), {
      color: "105,105,105",
      count: 90,
      zIndex: 5
    });
  }
  if (screen.availWidth >= 786) {
    var cn = new CanvasNest(document.querySelector("section.animation"), {
      color: "105,105,105",
      count: 200,
      zIndex: 5
    });
  }
  if (screen.availWidth >= 1366) {
    var cn = new CanvasNest(document.querySelector("section.animation"), {
      color: "105,105,105",
      count: 300,
      zIndex: 5
    });
  }
});
