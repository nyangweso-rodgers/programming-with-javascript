// Functions

// Functions with Function Declaration

// Functions with Function Constructor

// Functions with Function Expression

// Functions with Arrow Functions

// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Async Data';
    callback(data);
  }, 1000);
}

// usage 
fetchData((result) => {
  console.log(result);
})
