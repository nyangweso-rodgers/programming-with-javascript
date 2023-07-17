// Access DOM Elements

// getElementById()
const headerElement = document.getElementById('headerSection');

// getElementByTagName()
const divElements = document.getElementsByTagName('div');
// retrieve p elements from div
//const pElementsFromDiv = divElements[0].getElementByTagName('p');

// getElementByClassName(); // all container classes
const container = document.getElementsByClassName('container');

// getElementByName(); // get email element(s)
const emailElement = document.getElementsByName('email');

// document.querySelector('input');
// get the first project using querySelector
const firstProject = document.querySelector('#firstProject');
console.log(firstProject);
console.log(firstProject.textContent);
