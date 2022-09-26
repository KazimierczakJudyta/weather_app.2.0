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

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "06a9329363b3c8a22d8390d3092184eb";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-name");

  let weatherInfo = document.querySelector("#weather-info");
  let fellsLike = document.querySelector("#feels");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = Math.round(response.data.main.temp);
  celsius.style.color = "#101510";
  temperatureElement.innerHTML = celsiusTemperature;
  cityElement.innerHTML = response.data.name;
  weatherInfo.innerHTML = response.data.weather[0].description;
  fellsLike.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;

  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
  );
  getForecast(response.data.coord);
}

function search(city) {
  let apiKey = "06a9329363b3c8a22d8390d3092184eb";
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
  let fahrenheitTemperature = Math.round(celsiusTemperature * 1.8 + 32);
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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}
function displayForecast(response) {
  let dailyForecast = response.data.daily;
  let forecastElement = document.querySelector("#weather-days");
  let forecastHTML = "";

  dailyForecast.forEach(function (forecastDay, index) {
    if (index < 6)
      forecastHTML =
        forecastHTML +
        `<div class="col-sm-9">
      <div class="row text-left gy-5">
        <div class="col-8 col-sm-8">${formatDay(forecastDay.dt)}</div>
        <div class="col-4 col-sm">
          <span id="tuesday">${Math.round(forecastDay.temp.day)}</span>
          <sup>°</sup>
        </div>
      </div>
    </div>
  `;
  });

  forecastElement.innerHTML = forecastHTML;
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", showCelsius);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleData);

let celsiusTemperature = null;

search("New York");
