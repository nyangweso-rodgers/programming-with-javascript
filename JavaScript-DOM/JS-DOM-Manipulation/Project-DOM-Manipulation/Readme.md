# Project: DOM Manipulation

# Description
* Using DOM manipulation properties.

# Section 1: Working with Texts

# Step 1: Read the first `.row` class and return its textContent
```js
    let firstRowClass = document.querySelector('.row');
    console.log(firstRowClass.textContent);
```

# Step 2: Read the first `row` class and Change the text Paragraph content inside the element
```js
    // select the first row class
    let firstRowClass = document.querySelector('.row');
    // select the first paragraph of the .row class
    let firstRowParagraph = firstRowClass.querySelector('p');
    // change the paragraph content
    firstRowParagraph.textContent = "This is a new paragraph from DOM Manipulation.";
```

# Step 3: Add a new `p` element inside the first `.row` class using the `innerHTML` property
```js
    // select the first row class
    let firstRowClass = document.querySelector('.row');
    // select the first paragraph of the .row class
    let firstRowParagraph = firstRowClass.querySelector('p');
    // add p to the first .row class using innerHTML
    firstRowParagraph.innerHTML = "<p>Added paragraph using innerHTML property</p>";
``` 

# Section 2.: Working with Styles
# Step 4: Change the background color of `.about-section` to #02343F and text color to #fff
```js
    let myAboutSection = document.querySelector(".about-section");
    //console.log(myAboutSection.textContent); //TODO: 

    myAboutSection.style.color = "#fff";
    myAboutSection.style.backgroundColor = "#02343F";
```