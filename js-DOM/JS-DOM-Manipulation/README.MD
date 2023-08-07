# DOM manipulation

## Table Of Contents

# Working with Texts
* Three properties for text manipulation:
    1. `textContent`
    2. `innerText`
    3. `innerHTML`

# Working with Text 1: `textContent`
* `textContent` property gets the inner text of a HTML element.

# Working with Text 2: `innerText`
* `innerText` property works similarly to `textContent` with minor differences.

# Working with Text 3: `innerHTML`
* While you could only alter texts with `textContent` and `innerText`, you can pass in an entire element into a target element inside the DOM with the `innerHTML` property.


# Working with Styles
* all `css` properties can be modified using `JS`. just remember that you cannot use dashes (-) in the property names: these are replaced with camelCase versions where the compound word begins with a capital letter.
  
    ```js
        var x = document.getElementById("style-demo");
        // change the text color and width of the div elements
        x.style.color = "#649272";
        x.style.width = "100px";
        x.style.backgroundColor = "#33EA73";
    ```
# Creating New Elements
* Methods include:
    1. `document.createElement()`
    2. `appendChild()`
    3. `insertBefore()`
    4. `document.createTextNode()`

# Creating New Elements 1: `document.createElement()`
* creates a new `HTML` element specified by the tagname.

    ```js
        // create a new p element
        let newParagraph = document.createElement("p");
    ```

# Creating New Elements 2: `Node.appendChild()`
* creates a new element and adds it to the parent node.

    ```js
        // create new p element
        let projectTwoParagraph = document.createElement('p');
        // create an inner text for the p element
        let description = document.createTextNode('This is a test document description with createTextNode');
        // append the new p element 
        projectTwoParagraph.appendChild(description);
        console.log(projectTwoParagraph);
    ```

# Creating New Elements 3: `Node.insertBefore()`
* inserts a node before the reference node as a child of a specified parent node. i.e., it adds a specific child element before another child element.

# Creating New Elements 4: `document.createTextNode()`
```js
    // create a text node
    let description = document.createTextNode('This is a test document description with createTextNode');
```

# Setting Attributes
* Methods include:
    1. `setAttribute()`
    2. `getAttribute()`
    3. `className()`

# Setting Attributes 1: `element.getAttribute()`
* The `getAttribute()` method of the element interface returns the value of a specified attribute on a DOM element. 
* If the specific value does not exist, the value returned will either be `null` or an empty string `""`.

# Setting Attributes 2: `element.setAttribute()`
* This method either adds a new attribute to the DOM element, or updates the values of an attribute that already exists.

    ```js
        // create new p element
        let projectTwoParagraph = document.createElement('p');

        // set a class to it
        projectTwoParagraph.className = 'test-class';

        // setting attribute
        projectTwoParagraph.setAttribute('title', 'test-title');
        console.log(projectTwoParagraph);
    ```

# Setting Attribute 3: `element.className()`
```js
    // get a p element
    let p = document.querySelector('p');

    // set a class to it
    p.className = 'test-class';
```




# 7 javascript methods to carryout DOM manipulation

# Method 4: `Node.removeChild()`
* removes a child node from the DOM and returns the removed node.

# Method 5: `Node.replaceChild()`
* `replaceChild()` method replaces a child node within the given parent node. This method accepts two parameters: the node to be inserted and the node to be replaced.