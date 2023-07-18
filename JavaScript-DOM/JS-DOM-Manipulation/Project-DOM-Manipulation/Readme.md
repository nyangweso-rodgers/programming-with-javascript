# Project: DOM Manipulation

## Table of Contents
- 

# Description
* Using DOM manipulation properties.

# Section 1: Working with Texts

# Task 1.1: Read the first `.row` class and return its textContent
```js
    let firstRowClass = document.querySelector('.row');
    console.log(firstRowClass.textContent);
```

# Task 1.2: Read the first `row` class and Change the text Paragraph content inside the element
```js
    // select the first row class
    let firstRowClass = document.querySelector('.row');
    // select the first paragraph of the .row class
    let firstRowParagraph = firstRowClass.querySelector('p');
    // change the paragraph content
    firstRowParagraph.textContent = "This is a new paragraph from DOM Manipulation.";
```

# Task 1.3: Add a new `p` element inside the first `.row` class using the `innerHTML` property
```js
    // select the first row class
    let firstRowClass = document.querySelector('.row');
    // select the first paragraph of the .row class
    let firstRowParagraph = firstRowClass.querySelector('p');
    // add p to the first .row class using innerHTML
    firstRowParagraph.innerHTML = "<p>Added paragraph using innerHTML property</p>";
``` 

# Section 2.: Working with Styles
# Task 2.1: Change the background color of `.about-section` to #02343F and text color to #fff
```js
    let myAboutSection = document.querySelector(".about-section");
    //console.log(myAboutSection.textContent); //TODO: 

    myAboutSection.style.color = "#fff";
    myAboutSection.style.backgroundColor = "#02343F";
```

# Section 3: Create New Elements
```js
    // create new paragraph
    let projectTwoParagraph = document.createElement('p');

    // create a text node
    let description = document.createTextNode('This is a test document description with createTextNode');

    // append to the p element
    projectTwoParagraph.appendChild(description);
    console.log(projectTwoParagraph);
```

# Section 4: Set Attributes - class name
```js
    // create new paragraph
    let projectTwoParagraph = document.createElement('p');

    // Task: set the class name to the projectTwoParagraph
    projectTwoParagraph.className = 'project-two-paragraph';

    // Task: set the title attribute to the projectTwoParagraph
    projectTwoParagraph.setAttribute('title', 'Project-Two-Title');
```

# Section : Insert an element to the DOM
# Task : `element.appendChild()`
```js
    let firstProjectClass = document.querySelector("#firstProjectDescription");
    let pElement = firstProjectDescription.querySelector("p");
    console.log(pElement); //TODO:

    let anotherPElement = document.createElement("p");
    let pDescription = document.createTextNode("Another paragraph description");
    anotherPElement.appendChild(pDescription);
    console.log(anotherPElement); //TODO:

    pElement.appendChild(anotherPElement);
```