// DOM Manipulation


let firstRowClass = document.querySelector('.row');
// read text content from the first .row class
console.log(firstRowClass.textContent); //TODO: uncomment to validate

let firstRowParagraph = firstRowClass.querySelector('p');
// console.log(firstRowParagraph); //TODO: uncomment to validate

// change the content of the first .row class paragraph
firstRowParagraph.textContent = "This is a new paragraph from DOM Manipulation using textContent property";

// add p to the first .row class using innerHTML
firstRowParagraph.innerHTML = "<p>Added paragraph using innerHTML property</p>";

// Working with Styles: 
// Task: change the background color of .about-section class to #02343F
let myAboutSection = document.querySelector(".about-section");
//console.log(myAboutSection.textContent); //TODO: 

myAboutSection.style.color = "#fff";
myAboutSection.style.backgroundColor = "#02343F";
