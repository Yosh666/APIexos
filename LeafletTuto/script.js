var mymap = L.map('mapid').setView([22.648, 88.341],13)
var myIcon= L.icon({
    iconUrl:'./img/koala.png',
    iconSize: [95, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],

})
var marker = L.marker([22.63, 88.34],{icon: myIcon}).addTo(mymap);

var circle = L.circle([22.63, 88.34], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [22.64, 88.34],
    [22.59, 88.30],
    [22.67, 88.33]
]).addTo(mymap);

marker.bindPopup("<b>Envie de Vacances?</b><br>Viens <strong>ici</strong>").openPopup();
circle.bindPopup("Ou là");
polygon.bindPopup("allonge toi là");

/*var popup = L.popup()
    .setLatLng([22.64,88.33])
    .setContent("Je suis là")
    .openOn(mymap);
*/
var popclick= 


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieW9zaDY2NiIsImEiOiJja2JsdjYxM2kxYm1uMnNteTZ2Z2xsdGdyIn0.n6zDd9XOBSQefWhSC2vZZA'
}).addTo(mymap);