function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");
  let cloudElement = document.querySelector("#cloudy");
  let weatherInfo = document.querySelector("#weather-info");
  let fellsLike = document.querySelector("#feels");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let pressureElement = document.querySelector("pressure");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  cloudElement.innerHTML = response.data.clouds.all;
  weatherInfo.innerHTML = response.data.weather[0].description;
  fellsLike.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  pressureElement.innerHTML = response.data.main.pressure;
}
let apiKey = "ae83a60794fa4d45d88e6b19756a1473";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
