// Using Promises with setTimeout() and Delays

const displayName = new Promise((myResolve, myReject) => {
  myResolve("Rodgers Nyangweso");
  setTimeout(myResolve, 2000, "Rodgers Nyangweso");
});

displayName.then((value) => {
  console.log(value);
});
