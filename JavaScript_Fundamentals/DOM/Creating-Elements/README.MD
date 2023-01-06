# Creating Elements

# Creating Elements
using the following methods to create new nodes:
* __element.cloneNode()__ -  clones an element and returns the resulting node
* __document.createElement(element)__ - creates a new element node 
* __document.createTextNode(text)__ - creates a new text node

_Remarks_:
* for example:
    ```js
        var node = document.createTextNode("a new text node has been created successfully");
    ```
* _this will create a new text node, but it will not appear in the document until you apped it to an existing element with one of the following methods:_
    * __element.appendChild(newNode)__ - adds a new child node to an element as the last child node
    * __element.insertBefore(node1, node2)__ - inserts bode1 as a child before node2

# creating a new paragraph
```js
    var p = document.createElement("p"); 
    var node = document.createTextNode("Creating a text node");

    // adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("adding-nodes");
    // adding the paragraph to the div
    div.appendChild(p);
    // this creates a new paragraph and adds it to the existing div element on the page
```