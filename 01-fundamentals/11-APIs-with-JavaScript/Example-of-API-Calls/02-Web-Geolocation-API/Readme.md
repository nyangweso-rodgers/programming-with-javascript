# Web Geolocation API

## Table of Contents

# Introduction - Web Geolocation API

- The HTML **Geolocation API** is used to get the geographical position of a user.

## Using the Geolocation API

- The **Geolocation API** is available through the `navigator.geolocation` object. To get the user’s current location, you call the `getCurrentPosition()` method of the `navigator.geolocation` object.

- The `getCurrentPosition()` method is used to return the user's position. The `getCurrentPosition()` method returns an object on success. The `latitude`, `longitude` and `accuracy` properties are always returned. The other properties are returned if available:

  - `coords.latitude`: latitude as a decimal number (always returned)
  - `coords.longitude`: longitude as a decimal number (always returned)
  - `coords.accuracy`: accuracy of the position (always returned)
  - `coords.altitude`: altitude in meters above the mean sea level (returned if available)
  - `coords.altitudeAccuracy`: altitude accuracy of position (returned if available)
  - `coords.heading`: heading as degrees clockwise from North (returned if available)
  - `coords.speed`: speed in meters per second (returned if available)
  - `timestamp`: date/time of the response (returned if available)

- **Remarks**:
  - The second parameter of the `getCurrentPosition()` method is used to handle errors. It specifies a function to run if it fails to get the user's location
  - The **Geolocation API** will only work on secure contexts such as `HTTPS`.
  - If your site is hosted on a non-secure origin (such as `HTTP`) the requests to get the users location will no longer function.

# Project Tasks

## Task 1: Show Properties From `getCurrentPosition()` Method

- Use the `getCurrentPosition()` method to get user's `latitude` and `longitude` properties:

  ```js
  // Using Geolocation API

  const showCoordinatesBtn = document.getElementById("showCoordinatesBtn");

  const getLocation = () => {
    if (navigator.geolocation) {
      //navigator.geolocation.getCurrentPosition();
      console.log(navigator.geolocation.getCurrentPosition(showPosition));
    } else {
      console.log("Geolocation API is not available");
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const acc = position.coords.accuracy;

    console.log(lat, lon, acc);
  };

  showCoordinatesBtn.addEventListener("click", getLocation());
  ```

## Task 2: Update DOM to Display `latitude`, `longitude` and `Accuracy` Details

- Update DOM with Geolocation details:
- **Step 1**:

  - Retrieve HTML elements:
    ```js
    const showCoordinatesBtn = document.getElementById("showCoordinatesBtn");
    const displayCordinatesRow = document.getElementById(
      "displayCordinatesRow"
    );
    ```
  - `showCoordinatesBtn` - The button that triggers geolocation retrieval.
  - `displayCordinatesRow`: The container where coordinates will be displayed.

- **Step 2**:

  - Handling Location retrieval:
    ```js
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation API is not available");
      }
    };
    ```
  - `getLocation` function checks for Geolocation API support. If available, it calls `navigator.geolocation.getCurrentPosition` to obtain the user's position and passes the result to the `showPosition` function. If not available, it logs a message to the console.

- **Step 3**:

  - Display Coordinates:

    ```js
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
      displayCoordinatesElement.className = "border border-dark p-5";
      displayCoordinatesElement.innerHTML = `<p><strong>Latitude: </strong>${lat}</p><p><strong>Longitude: </strong>${long}</p><p><strong>Accuracy: </strong>${acc}</p>`;

      displayCordinatesRow.appendChild(displayCoordinatesElement);
      return displayCordinatesRow;
    };
    ```

  - The `showPosition` function receives the position data as an argument.
  - It extracts the `latitude`, `longitude`, and `accuracy` values.
  - It checks for an existing `coordinatesDiv` element and removes it to avoid duplication.
  - It creates a new `div` element with the ID "`coordinatesDiv`"
  - Inserts formatted HTML content displaying the latitude, longitude, and accuracy.
  - It appends the newly created div to the displayCordinatesRow container.

- **Step 4**:

  - Button interaction:
    ```js
    showCoordinatesBtn.addEventListener("click", getLocation);
    ```
  - An event listener is attached to the `showCoordinatesBtn`. When clicked, it triggers the `getLocation` function to initiate the geolocation process

- **Step 5**:

  - Complete Code: Update DOM with Geolocation details:

  ```js
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
    displayCoordinatesElement.className = "border border-dark p-5";
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
  ```

# Resources

1. [w3schools - Web Geolocation API](https://www.w3schools.com/js/js_api_geolocation.asp)
