function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".searchbar").value;
  let apiKey = "ae83a60794fa4d45d88e6b19756a1473";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  console.log(response);
  document.querySelector(".city-name").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchLocation(position) {
  let apiKey = "41a403ccc59aadadddaa7b20c5464553";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  console.log(apiUrl);
}
function currentWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function changeToCelsius(event) {
  event.preventDefault();
  let dayTemperature = document.querySelector(".temperature");
  dayTemperature.innerHTML = "20 C°";
}
function changeToFahrenheit(event) {
  event.preventDefault();
  let dayTemperature = document.querySelector(".temperature");
  dayTemperature.innerHTML = "20 °F";
}

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

let lookUp = document.querySelector(".searchbar");

lookUp.addEventListener("submit", search);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToCelsius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToFahrenheit);

/*let current = document.querySelector(".searchbar");
current.addEventListener("click", currentWeather);*/
