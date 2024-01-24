// Weather App

import config from './config.js';

const selectCity = document.getElementById("selectCity");
//const iconImg = document.getElementById("weather-icon");
const displayCity = document.getElementById("displayCity");
const displayDescription = document.getElementById("displayDescription");
const displayTemperature = document.getElementById("displayTemprature");
const displayMain = document.getElementById("displayMain");

const selectAndDisplayCity = () => {
  let selectedCity = selectCity.options[selectCity.selectedIndex].text;

  // log the selected city to the console if needed
  console.log("Selected City: " + selectedCity);

  //const apiKey = ""; //TODO: 

  // or, using API key from config.js file
  const apiKey = config.apiKey;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      //const icon = data.weather[0].icon;
      //const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      //iconImg.src = iconUrl;
      displayCity.textContent = data.name;
      displayDescription.textContent = data.weather[0].description;
      displayTemperature.textContent =
        (data.main.temp - 273.15).toFixed(2) + " °C"; // Adjust units if needed
      displayMain.textContent = data.weather[0].main;
    })
    .catch((error) => {
      console.error("Error while fethcing weather data!", error);
    });
};

selectCity.addEventListener("change", selectAndDisplayCity);
