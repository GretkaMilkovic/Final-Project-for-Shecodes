
function formatDate(timestamp) {
  let date = new Date(timestamp);

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes
  }`;
}
  let days = [
    "Sundays",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
 
  return `${day},${hours}:${minutes}`;

}


function displayTemperature(response) {

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt*1000);

  windElement.innerHTML = Math.round(response.data.main.wind);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  cityElement.innerHTML = response.data.main.city;
  
  descriptionElement.innerHTML = response.data.weather[0].description;
}

function search(city) {
  let apiKey = "82b95efea5e472e6661eb0b2204689f3";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  

}
function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}




function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


let form = document.querySelector("#search-form");
form.addEventListener("enter", handleSubmit);


search("Munich");
