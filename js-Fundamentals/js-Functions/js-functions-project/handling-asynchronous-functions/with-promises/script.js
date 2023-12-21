// Handle Asynchronous Requests using Promise

// Authenticate User using a Promise
const validateUser = ({ userId, userPassword }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId && userPassword) {
        resolve(`${userId} Successfully authenticated`);
      } else {
        reject({ message: "Authentication failed" });
      }
    }, 2000);
  });
};

const app = () => {
  inputData = {
    userId: "Rodgers Nyangweso",
    userPassword: "testPassword",
  };
  validateUser(inputData)
    .then((result) => {
      console.log("Initializing ...");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

app();
