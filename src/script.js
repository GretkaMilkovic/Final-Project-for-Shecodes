
function formatDate(timestamp) {
  let date = new Date(timestamp);

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes
  }`;
}
  let days = [
    "Sunday",
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


function displayTemperature(response)


{

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  
  celsiusTemperature=response.data.main.temp
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  windElement.innerHTML = Math.round(response.data.wind.speed);

  humidityElement.innerHTML = Math.round(response.data.main.humidity);


  cityElement.innerHTML = response.data.name;
  
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
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


let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);
  
  let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Munich");
