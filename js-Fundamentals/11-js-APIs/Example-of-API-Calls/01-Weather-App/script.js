// Weather App

const apiKey = ""; // TODO: replace with your own key
const apiUrlForNairobiCity = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}`;

const nairobiCityElement = document.getElementById("nairobiCityElement");

fetch(apiUrlForNairobiCity)
  .then((response) => response.json())
  .then((data) => {
    const location = data.name;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // update UI
    nairobiCityElement.innerHTML = `<p>Temperature in ${location}: ${temperature}</p> <p>Weather: ${description}</p>`;
  })
  .catch((err) => console.error(err));
