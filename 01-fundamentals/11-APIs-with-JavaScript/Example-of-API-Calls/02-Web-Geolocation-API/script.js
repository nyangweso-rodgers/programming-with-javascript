// Using Geolocation API - Update DOM with geolocation details

const showCoordinatesBtn = document.getElementById("showCoordinatesBtn");
const displayCordinatesRow = document.getElementById("displayCordinatesRow");

const showPosition = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const acc = position.coords.accuracy;

  // check if there's already a div, and remove it
  const existingDiv = document.getElementById("coordinatesDiv");
  if (existingDiv) {
    existingDiv.remove();
  }

  const displayCoordinatesElement = document.createElement("div");
  displayCoordinatesElement.id = "coordinatesDiv";
  displayCoordinatesElement.className = "p-5";
  displayCoordinatesElement.innerHTML = `<p><strong>Latitude: </strong>${lat}</p><p><strong>Longitude: </strong>${long}</p><p><strong>Accuracy: </strong>${acc}</p>`;

  displayCordinatesRow.appendChild(displayCoordinatesElement);
  return displayCordinatesRow;
};

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation API is not available");
  }
};

showCoordinatesBtn.addEventListener("click", getLocation);