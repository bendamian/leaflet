window.onload = init;

function init() {
  // html element
  const mapElement = document.getElementById("mapid");
  //basemaps
  const mapA = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  const mapB = L.tileLayer("https://tile.openstreetmap.de/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  // lefelet map object
  const mymap = L.map(mapElement, {
    center: [48, 14],
    zoom: 5,
    minzoom: 2,
    layers: [mapA]
  });
  //base map object
  const basemapsLayers = {
    "<b>openstreetmap</b>": mapA,
    stadiaMap: mapB
  };
  //overlays
  const kayts_img = " ./imag/kayts.png";
  const kayts_bound = [
    [9.28104347246053, 79.64813232421876],
    [10.090557928582758, 80.32928466796876]
  ];
  const kayts_img_overlay = L.imageOverlay(kayts_img, kayts_bound).addTo(mymap);

  //Layer control
  const layerControllers = L.control
    .layers(basemapsLayers, {}, {})
    .addTo(mymap);

  // get a location point you need
  mymap.on("click", function (event) {
    console.log(event.latlng);
  });
}
