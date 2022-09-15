let now = new Date();
now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let days = weekDays[now.getDay()];
let nameDay = now.getDate();

let day = document.querySelector(".day");
day.innerHTML = `${days}`;
let date = document.querySelector(".today-date");
date.innerHTML = `${nameDay} ${month} ${year}`;
let time = document.querySelector(".time");
time.innerHTML = `${hours}:${minutes}`;

function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");
  let cloudElement = document.querySelector("#cloudy");
  let weatherInfo = document.querySelector("#weather-info");
  let fellsLike = document.querySelector("#feels");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let pressureElement = document.querySelector("#pressure");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = Math.round(response.data.main.temp);
  celsius.style.color = "#101510";
  temperatureElement.innerHTML = celsiusTemperature;
  cityElement.innerHTML = response.data.name;
  cloudElement.innerHTML = response.data.clouds.all;
  weatherInfo.innerHTML = response.data.weather[0].description;
  fellsLike.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  pressureElement.innerHTML = response.data.main.pressure;
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
  );
}
function search(city) {
  let apiKey = "ae83a60794fa4d45d88e6b19756a1473";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
function handleData(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#searchbar");
  search(cityInputElement.value);
}

function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = celsiusTemperature * 1.8 + 32;
  let temperature = document.querySelector("#temperature");
  let fahrenheit = document.querySelector("#fahrenheit");
  temperature.innerHTML = fahrenheitTemperature;
  fahrenheit.style.color = "#101510";
  celsius.style.color = "#2c3a2b";
}
function showCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = celsiusTemperature;
  celsius.style.color = "#101510";
  fahrenheit.style.color = "#2c3a2b";
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showCelsius);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleData);

let celsiusTemperature = null;

search("New York");
