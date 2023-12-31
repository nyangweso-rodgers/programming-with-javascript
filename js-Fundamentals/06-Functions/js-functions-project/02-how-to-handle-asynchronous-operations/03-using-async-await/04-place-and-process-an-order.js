// Place and Process an Order using Async/Await operation

let food = "fruit salad";

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
    resolve(`${food} is being processed`);
  });
};

// Async/Await
const serveOrder = async () => {
  try {
    const orderReceived = await placeOrder(food);
    console.log(orderReceived);

    const processedOrder = await processOrder(orderReceived);
    console.log(processedOrder);
  } catch (err) {
    console.error(err);
  }
};

serveOrder()
