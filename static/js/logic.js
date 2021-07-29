const streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
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
  Street: streets,
  Dark: dark
};


const map = L.map('mapid', {
  center: [30, 30],
  zoom: 4,
  layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

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