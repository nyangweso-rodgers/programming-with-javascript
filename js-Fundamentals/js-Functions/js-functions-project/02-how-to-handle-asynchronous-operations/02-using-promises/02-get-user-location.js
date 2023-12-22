// Get User

let getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error("Geolocation not supported"));
    }
  });
};

getUserLocation()
  .then((position) => {
    console.log("User location", position.coords);
  })
  .catch((error) => {
    console.error("Error while getting geolocation data: ", error);
  });
