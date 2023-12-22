// Async/Await Functiona

// Validate User using async/Await Functiona
const validateUser = ({ userId, userPassword }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId && userPassword) {
        resolve(`${userId} successfully authenticated`);
      } else {
        reject({ message: "Authentication failed" });
      }
    }, 2000);
  });
};

const app = async () => {
  const data = {
    userId: "Rodgers",
    userPassword: "Rodgers",
  };
  try {
    console.log("Initializing ...................");
    const result = await validateUser(data);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};

// invoke the function
app()