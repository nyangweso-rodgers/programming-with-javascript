# Geolocation API

## Table Of Contents
1. [What Is the Geolocation API?](#What-Is-the-Geolocation-API?)

2. [How to Use the Geolocation API](#How-to-Use-the-Geolocation-API)

3. [References]()
    - [JavaScript Geolocation API Tutorial – How to Get a User's Location in JS](https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/)
    - [Geolocation API](https://www.w3schools.com/js/js_api_intro.asp)

# What Is the Geolocation API?
* The JS __Geolocation API__ provides access to geographical location data associated with a user's device. This can be determined using GPS, WIFI, IP Geolocation and so on.

* To protect the user's privacy, it requests permission to locate the device. If the user grants permission, you will gain access to location data such as _latitude_, _longitude_, _altitude_, and _speed_. You'll also get the accuracy of the acquired location data and the approximate time when the position was acquired.

# How to Use the Geolocation API
* You can access the __Geolocation API__ by calling the __navigator.geolocation__ object. It grants the app access to the device's location. This object provides the methods listed below for working with the device's position:
    - __getCurrentPosition__: Returns the current location of the device.
    - __watchPosition__: A handler function that is automatically invoked when the device's location changes.

* There are three possible arguments with these methods:
    - A success callback (required)
    - An error callback (optional)
    - An options object (optional)

# Syntax
```js
    const successCallback = (position) => {
    console.log(position);
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
```

* Successful call returns two things:
    - __GeolocationPosition.coords__ object: represents the position, altitude and the accuracy at which the device calculates these properties.
    - __timestamp__: represents the time at which the location was gotten.

# Output
```js
    /*
        GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1662499816712}
        coords: GeolocationCoordinates
        accuracy: 7173.528443511279
        altitude: null
        altitudeAccuracy: null
        heading: null
        latitude: 6.5568768
        longitude: 3.3488896
        speed: null
        [[Prototype]]: GeolocationCoordinates
timestamp: 1662499816712
    */
```