// APIs in js

const fetch = require("node-fetch");

// Random User API
const randomUserUrl = 'https://randomuser.me/api/';
const getRandomUserData = () => {
    fetch(randomUserUrl) // URL to fetch data from
    .then(response => response.json()) // turn the response into a js object
    .then(data => {
        // do something with the data
        console.log("Random User: ", data) // you can use the data to update the UI
    })
    .catch(error => console.error(error));
};

getRandomUserData(); //TODO: Uncomment to run

// OpenWheather API
const getOpenWheatherData = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY")
    .then(response => response.json())
    .then(openWeatherMapData => console.log(openWeatherMapData))
    .catch(error => console.log(error));
};

//getOpenWheatherData(); //TODO: Uncomment to run