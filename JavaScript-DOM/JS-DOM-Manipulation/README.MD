# JavaScript Methods for DOM manipulation

## Table Of Contents

# Working with Texts
* Three properties for text manipulation:
    1. textContent
    2. innerText
    3. innerHTML

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

# 7 javascript methods to carryout DOM manipulation

# Method 1: `document.createElement()`
* creates a new `HTML` element specified by the tagname.

# Method 2: `Node.appendChild()`
* creates a new element and adds it to the parent node.

# Method 3: `Node.insertBefore()`
* inserts a node before the reference node as a child of a specified parent node. i.e., it adds a specific child element before another child element.

# Method 4: `Node.removeChild()`
* removes a child node from the DOM and returns the removed node.

# Method 5: `Node.replaceChild()`
* `replaceChild()` method replaces a child node within the given parent node. This method accepts two parameters: the node to be inserted and the node to be replaced.

# Method 6: `Element.setAttribute()`
* This method either adds a new attribute to the DOM element, or updates the values of an attribute that already exists.

# Method 7: `Element.getAttribute()`
* The `getAttribute()` method of the element interface returns the value of a specified attribute on a DOM element. If the specific value does not exist, the value returned will either be `null` or an empty string `""`.