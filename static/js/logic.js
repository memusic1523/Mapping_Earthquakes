// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([35.4357, 119.0575], 5);
// We create the tile layer that will be the background of our map.
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [35.4357, -119.0575],
    [40.6413, -73.7781],
    [30.1975, -97.664]
  ];
// Loop through the cities array and create one marker for each city.
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: '10,5',
    weight: 4,
    opacity: 0.5
  }).addTo(map);
  streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);