var mymap = L.map('mapid').setView([48.26, 7.45], 8);

var myIcon= L.icon({
    iconUrl:'./img/elan.png',
    iconSize: [70, 70],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],

})
 var centres={
    'Selestat':{
         "coord":[48.2597,7.4553],
         "adresse":"46 rue des chevaliers <br> 67600 Selestat"
    },
     'Molsheim':{
         "coord" :[48.53679,7.4986],
         "adresse":"1 rue de la Fonderie <br> 67120 Molsheim"
    },
    'Strasbourg':{
         "coord":[48.5548,7.7455],
         "adresse":"202 avenue de Colmar <br> 67100 Strasbourg"
     },
    'Colmar':{
        "coord" :[48.07572,7.3432035],
        "adresse":"3 place du Capitaine Dreyfus <br> 68000 Colmar"
    }
 }
 console.log(centres)

for(centre in centres){
    m=L.marker(centres [centre].coord,{icon: myIcon}).addTo(mymap);
    m.bindPopup('<strong>'+centre+'</strong><br>'+centres[centre].adresse);
    
}

    




L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieW9zaDY2NiIsImEiOiJja2JsdjYxM2kxYm1uMnNteTZ2Z2xsdGdyIn0.n6zDd9XOBSQefWhSC2vZZA'
}).addTo(mymap);