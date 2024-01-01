// using OpenWeatherMap API.

const apiKey = ""; // TODO: replace with your own key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data); //TODO: uncomment this to get the whole response
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    console.log(`Temperature: ${temperature}, Humidity: ${humidity}, Wind Speed: ${windSpeed}`); // Output: Temperature: 298.69, Humidity: 44, Wind Speed: 5.51
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
