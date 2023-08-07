

const displayMyCoordinatesBtn = document.getElementById('displayMyCoordinatesBtn');
const displayMyCoordinatesP = document.getElementById('displayMyCoordinatesP');

// add event handlers to the button
displayMyCoordinatesBtn.addEventListener('click', getLocation);
// check if the geolocation is supported
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        displayMyCoordinatesP.innerHTML = "Geolocation is not supported on this browser!";
    }
}

function showPosition(position) {
    displayMyCoordinatesP.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude +
    "<br>Accuracy: " + position.coords.accuracy;
}