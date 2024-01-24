// Place and Place an Order Using Promise
let food = "Fruit salad";

const placeOrder = (food) => {
  return new Promise((resolve, reject) => {
    if (food) {
      const success = "Order placed successfully!";
      resolve(success);
    } else {
      const failure = "Sorry, something went wrong while placing an order!";
      reject(failure);
    }
  });
};

const processOrder = (order) => {
  //once accepted, your order can't be rejected.So only resolve will work here
  return new Promise((resolve) => {
    console.log("Order is being processed");
    resolve(`${order} is being processed`);
  });
};

// with Promise
placeOrder(food)
  .then((message) => {
    console.log("Order request has been received ....");
    console.log(message);
    return processOrder(food);
  })
  .then((processedMessage) => {
    console.log(processedMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
