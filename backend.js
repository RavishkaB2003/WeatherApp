const apiKey = "5e7963a91c98ade39bd229945d029d5d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById('CityInput');
const searchbtn = document.getElementById('SearchBtn');
const weatherIcon = document.querySelector('.class-weather-icon');
const weatherCard = document.querySelector('.weathercard');




async function fetchWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    

    if(response.status == 404){
        document.getElementById('errorMsg').style.display = "block";
        weatherCard.style.display = "none";
        return;
    } else {
        document.querySelector(".class-city").innerHTML = data.name;
    document.querySelector(".class-temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".class-humidity-details").innerHTML = data.main.humidity + "%";
    document.querySelector(".class-wind-details").innerHTML = data.wind.speed + " km/h";
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/mist.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "assets/snow.png";
    } else if ( data.weather[0].main == "Smoke"){
        weatherIcon.src = "assets/smoke.png";

    } else {
        weatherIcon.src = "assets/weather.png";
    }
    weatherCard.style.display = "block";
    document.getElementById('errorMsg').style.display = "none";
        
    
    }

    





}

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchWeather(cityInput.value);
})



