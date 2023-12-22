// Example: Promises in action
let targetAchieved = false;

const unlockBonus = new Promise((myResolve, myReject) => {
  if (targetAchieved) {
    const success = "Congratulations, you have unlocked Monthly Bonus!";
    myResolve(success);
  } else {
    const failure = "Unable to unlock Monthly Bonus!";
    myReject(failure);
  }
});

// To use the promise, you need to handle the resolution and rejection using `.then` and `.catch`
unlockBonus
  .then((message) => {
    console.log(message); // Handle success
  })
  .catch((errorMessage) => {
    console.log(errorMessage); // Handle error
  }); 
