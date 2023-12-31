# Working with APIs JavaScript

## Table Of Contents
- [Different ways to call API in JavaScript](#Different-ways-to-call-API-in-JavaScript)
    


# `js` Web APIs
## `js` Web APIs: Web Geolocation API
* The `getCurrentPosition()` method is used to return the user's position.
* __NOTE__:
  * The Geolocation API will only work on secure contexts such as HTTPS.
  * If your site is hosted on a non-secure origin (such as HTTP) the requests to get the users location will no longer function.

### The geolocation Object
* The Geolocation API is available through the `navigator.geolocation` object.
* To get the user’s current location, you call the `getCurrentPosition()` method of the `navigator.geolocation` object.
* Example:
  * Get the _latitude_ and _longitude_ of a user

    ```js
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
    ```
