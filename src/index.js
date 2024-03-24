function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(temperature);
  temperatureElement.innerHTML = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function searchCity(city) {
  let apiKey = "bb54ef58483ffo06a270b069935bd6t4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;

searchCity("Lisbon");
