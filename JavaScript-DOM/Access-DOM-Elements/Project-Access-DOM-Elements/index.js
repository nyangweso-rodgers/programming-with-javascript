// Access DOM Elements

// getElementById()
const headerElement = getElementById('headerSection');

// getElementByTagName()
const divElements = getElementByTagName('div');
// retrieve p elements from div
const pElementsFromDiv = divElements[0].getElementByTagName('p');

// getElementByClassName(); // all container classes
const container = getElementByClassName('container');

// getElementByName(); // get email element(s)
const emailElement = getElementByName('email');
