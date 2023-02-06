// Async/Await

async function sayHello() {
    console.log("Hello");
    console.log("Awaiting Here");

    let b = await new Promise(function(resolve) {
        resolve("Promise is resolved");
    });

    console.log("b");
}

sayHello();

console.log(" async function");