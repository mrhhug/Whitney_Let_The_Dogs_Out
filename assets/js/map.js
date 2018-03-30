//Michael Hug  3 February 2018
// This creates a polygon representing Whitney's service area.
function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: {lat: 33.986, lng: -84.344},
  mapTypeId: 'roadmap'
});

// Define the LatLng coordinates for the polygon's path.
var polygonCoords = [
  {lat: 33.810096, lng: -84.420150},
  {lat: 33.820685, lng: -84.429011},
  {lat: 33.830597, lng: -84.436493},
  {lat: 33.893243, lng: -84.444450},
  //points are drawn clockwise
  //and this is a list
  {lat: 33.984751, lng: -84.47}, //East Cobb
  {lat: 34.086524, lng: -84.532839},
  {lat: 34.169510, lng: -84.510866},
  {lat: 34.166570, lng: -84.333153},
  {lat: 34.136644, lng: -84.205543},
  {lat: 34.115756, lng: -84.176085},
  {lat: 34.004211, lng: -84.171745},
  {lat: 33.913299, lng: -84.286730},
  {lat: 33.859208, lng: -84.340417},
  {lat: 33.816454, lng: -84.363819},
  {lat: 33.810096, lng: -84.420150}          
];

// Construct the polygon.
var serviceArea = new google.maps.Polygon({
  paths: polygonCoords,
  strokeColor: '#f6755e',
  strokeOpacity: 1,
  strokeWeight: 1,
  fillColor: '#f6755e',
  fillOpacity: 0.35
 });
 serviceArea.setMap(map);
}
