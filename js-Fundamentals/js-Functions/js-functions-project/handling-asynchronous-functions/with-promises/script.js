// Handle Asynchronous Requests using Promise

let myPromise = new Promise(function (myResolve, myReject) {
  myResolve("Rodgers Nyangweo");
  setTimeout(myResolve, 2000, "Rodgers Nyangweo");
});

myPromise.then(function (value) {
    console.log(value);
});
