const light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v10',
  accessToken: apiKey
});

const dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: apiKey
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};


const map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light]
});

L.control.layers(baseMaps).addTo(map);

const airportData = "https://raw.githubusercontent.com/NeuroBio/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/static/js/majorAirports.json";
const torontoData = "https://raw.githubusercontent.com/NeuroBio/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/static/js/torontoRoutes.json";

console.log(torontoData)
// Grabbing our GeoJSON data.

let myStyle = {
  color: "#ffffa1",
  weight: 2
}

d3.json(torontoData).then((data) => {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: (feature, layer) => {
      layer.bindPopup(`<h3> Airline: ${feature.properties.airline} </h3><hr>Destination: ${feature.properties.dst}`)
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