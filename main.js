window.onload = init;

function init() {
  const mapElement = document.getElementById("mapid");

  const mymap = L.map(mapElement, {
    center: [48, 14],
    zoom: 5,
    minzoom: 2,
    layers: [
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ]
  });
  // Map state change events
  mymap.on("resize", function (e) {
    console.log("resize");
  });
}
