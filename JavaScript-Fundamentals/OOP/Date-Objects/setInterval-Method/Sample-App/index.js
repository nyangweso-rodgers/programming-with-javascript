

var helloWorld = document.getElementById("displayHelloWorld");
var x = setInterval(helloWorldFunction, 2000);

function helloWorldFunction() {
    helloWorld.innerHTML += "Hello World!";
};