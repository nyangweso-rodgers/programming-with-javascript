// Random User Generator API

const apiKey = "";
const apiUrl = "https://randomuser.me/api/";

const getRandomUserData = () => {
  fetch(apiUrl)
    .then((results) => {
      return results.json(); // turn the response into a js object
    })
    .then((data) => {
      console.log("Sample User: ", data);
    });
};
getRandomUserData();