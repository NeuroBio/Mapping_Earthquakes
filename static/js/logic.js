
const map = L.map('mapid').setView([30, 30], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

const airportData = "https://raw.githubusercontent.com/NeuroBio/Mapping_Earthquakes/Mapping_GeoJSON_Points/static/js/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then((data) => {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    pointToLayer: (feature, latlng) => {
      return L.marker(latlng)
        .bindPopup(`<h3>Airport Code: ${feature.properties.faa}</h3><hr> Airport Name: ${feature.properties.name}`)
    }
  }).addTo(map);
})

// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: (feature, latlng) => {
//       console.log(feature);
//       return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     }
//   }).addTo(map);

// L.geoJson(sanFranAirport, {
//     onEachFeature: (feature, layer) => {
//         console.log(layer);
//       layer.bindPopup();
//      }
// });