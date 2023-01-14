// JS Evenet Listenerss

document.getElementById("btn1").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo1").innerHTML = Date();
}

document.getElementById("btn2").addEventListener("click", displayHelloWorld);

function displayHelloWorld() {
    alert("Hello World!");
};


// adding many event handlers to the same element
var x = document.getElementById("btn3");

x.addEventListener("click", myFunction);
x.addEventListener("mouseover", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo2").innerHTML += "Clicked!<br>";
};

function mySecondFunction() {
    document.getElementById("demo2").innerHTML += "Mouse Over!<br>";
};

function myThirdFunction() {
    document.getElementById("demo2").innerHTML += "Mouse Out!<br>";
};

// adding event listeners to the window object
window.addEventListener("resize", function() {
    this.document.getElementById("demo3").innerHTML = Math.random();
});

// Passing parameters
let p1 = 45;
let p2 = 30;

document.getElementById("btn4").addEventListener("click", function() {
    multiplyFunction(p1, p2);
});

function multiplyFunction(a, b) {
    document.getElementById("demo4").innerHTML = a * b;
}

// Event Propagation vs Bubbling
document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("div1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("div2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);

// Remove event
document.getElementById("div5").addEventListener("mousemove", myFunction);

function myFunction() {
document.getElementById("demo5").innerHTML = Math.random();
}

function removeHandler() {
document.getElementById("div5").removeEventListener("mousemove", myFunction);
}