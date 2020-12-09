



function displayTemperature(response) {
  console.log(response.data.city);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  windElement.innerHTML = Math.round(response.data.main.wind);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  cityElement.innerHTML = response.data.name;
  
  descriptionElement.innerHTML = response.data.weather[0].description;
}

  let apiKey = "82b95efea5e472e6661eb0b2204689f3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);



