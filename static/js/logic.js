// Get data from cities.js
let cityData = cities;

var map = L.map('mapid').setView([37.6213, -122.3790], 5);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
})

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// cityData.forEach(city => {
//     L.marker(city.location)
//         .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//         .addTo(map);
// });

// cityData.forEach(city => {
//     L.circleMarker(city.location, {
//         radius: city.population / 100000
//         }).bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + '</h3>')
//         .addTo(map);
// });

// cityData.forEach(city => {
//     L.circleMarker(city.location, {
//         radius: city.population / 100000,
//         color: 'orange',
//         weight: 4
//         }).bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + '</h3>')
//         .addTo(map);
// });


let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: 'yellow'
  }).addTo(map);