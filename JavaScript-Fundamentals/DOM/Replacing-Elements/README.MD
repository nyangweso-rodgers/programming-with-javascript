# Replacing Elements

# Introduction to Replacing Elements
* to replace an HTML element, the element __replaceChild(newNode, oldNode)__ method is used:
```js
    var p = document.createElement("p");
    var secondNode = document.createTextNode("This is a replaced text");
    p.appendChild(secondNode);

    var secondParent = document.getElementById("replace-demo");
    var secondChild = document.getElementById("p3");
    secondParent.replaceChild(p, secondChild);
```