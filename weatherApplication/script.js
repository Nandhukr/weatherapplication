function getWeather(){
    let cityName=id_city.value;
    console.log(cityName);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`).
    then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(data){
    let temparature=data.main.temp;
    let minTemp=data.main.temp_min;
    let maxTemp=data.main.temp_max;

   


    

    let htmlData=`
    <div class="card text-center">
    <div class="card-header">
    ${temparature}
  </div>
  <div class="card-body">
    <h5 class="card-title">Temparature is ${temparature}</h5>
    <p class="card-text">Min Temp ${minTemp}</p>
    <p class="card-text">Max Temp ${maxTemp}</p>
  </div>
  <div class="card-footer text-muted">
    Today
  </div>
</div>


    `
    let humidity=data.main.humidity;
    let windDegree=data.wind.deg;
    let feelslike=data.main.feels_like;

   


    

    let humidityData=`
    <div class="card text-center">
    <div class="card-header">
      Humidity Info
  </div>
  <div class="card-body">
    <h5 class="card-title">Temparature is ${humidity}</h5>
    <p class="card-text">wind Degree ${windDegree}</p>
    <p class="card-text">Feels Like ${feelslike}</p>
    <p class="card-text">Max Temp ${humidity}</p>
  </div>
  <div class="card-footer text-muted">
    Today
  </div>
</div>

`
let windspeed=data.wind.speed;
let sunrise=data.sys.sunrise;
let sunset=data.sys.sunset;

let windData=`
<div class="card text-center">
<div class="card-header">
  Wind Info
</div>
<div class="card-body">
<h5 class="card-title">Windspeed is ${windspeed}</h5>
<p class="card-text">Sunrise time ${sunrise}</p>
<p class="card-text">sunset Time ${sunset}</p>

</div>
<div class="card-footer text-muted">
Today
</div>
</div>

`
   

    id_temp.innerHTML=htmlData
    id_location.innerHTML=`<h1 class="text-center">weather in ${data.name}</h1>`
    id_humidity.innerHTML=humidityData
    id_wind.innerHTML=windData
    
 }
    
function getWeatherByLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
      let lat=pos.coords.latitude;
      let long=pos.coords.longitude;
      console.log(lat,long);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c3360e9a254e3bee57d6628dc64be58d`).
      then(res=>res.json()).then(data=>displayWeather(data))
    })
    
  }

}