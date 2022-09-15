const APIKey = "37bc77bf6931bb85bef928e619baf386";
var forecast = document.getElementById("forecast");







function getWeather(){
    var requestWeather = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=37bc77bf6931bb85bef928e619baf386";

    fetch(requestWeather)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        forecast.textContent = data.data.fact;
        return;
    })
    }



    https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=37bc77bf6931bb85bef928e619baf386