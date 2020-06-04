const markers = document.getElementById("markers");

var mymap = L.map("mapid").setView([38.955066, -122.634888], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

L.marker([38.974206, -122.766181])
  .addTo(mymap)
  .bindPopup("<b>Hello!</b><br />Transmission Node.")
  .openPopup();

L.circle([38.955066, -122.634888], 500, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
})
  .addTo(mymap)
  .bindPopup("I am a circle.");

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
  L.marker(e.latlng).addTo(mymap);
  createBox(e.latlng);
}

mymap.on("click", onMapClick);

var marker = L.marker([38.955066, -122.634888]).addTo(mymap);
var marker = L.marker([36.97587, -122.117699]).addTo(mymap); //36.978275, -122.0224

//Add List of markers -------------
function createBox(item) {
  const box = document.createElement("div");

  box.classList.add("box");

  box.innerHTML = `
    The marker is ${item}
  `;

  markers.appendChild(box);
}
