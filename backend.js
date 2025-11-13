const apiKey = "5e7963a91c98ade39bd229945d029d5d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById('CityInput');



async function fetchWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".class-city").innerHTML = data.name;
    document.querySelector(".class-temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".class-humidity-details").innerHTML = data.main.humidity + "%";
    document.querySelector(".class-wind-details").innerHTML = data.wind.speed + " km/h";

}



