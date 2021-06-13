function displayTemperature(response) {
  console.log(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description; //It's a array
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "56723cac732ebbf7ba15a7ae4506313e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
