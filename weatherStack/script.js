$(document).ready(function(){
 $('#submit').click(function(e){
    // e.preventDefault();
    var ville= $('#ville').val();
    /*console.log(ville);*/
    /*alert(ville);*/
    $.ajax({
        url: 'http://api.weatherstack.com/current',
        data: {
          access_key: 'd423346006ecb9351f4b0a57937d3d72',
          query: $('#ville').val()
        },
        dataType: 'json',
        success: function(apiResponse) {

            
            var mymap = L.map('mapid').setView([apiResponse.location.lat, apiResponse.location.lon], 13);
            var marker=L.marker([apiResponse.location.lat, apiResponse.location.lon]).addTo(mymap);
            marker.bindPopup(apiResponse.location.name)
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoieW9zaDY2NiIsImEiOiJja2JsdjYxM2kxYm1uMnNteTZ2Z2xsdGdyIn0.n6zDd9XOBSQefWhSC2vZZA'
                }).addTo(mymap);
            

          $('#result').html('<p> <img src="'+apiResponse.current.weather_icons+'"></p>'+
                            '<p>la température à '+apiResponse.location.name+' est de '+apiResponse.current.temperature+ '℃</p>'+
                             '<p>la pression est de  '+apiResponse.current.pressure+' hectopascal</p>' );
        }
      });


 })


})

