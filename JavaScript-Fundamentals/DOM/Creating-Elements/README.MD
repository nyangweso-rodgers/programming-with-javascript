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

# Adding and Deleting Elements
Method | Description 
|:-------------:|:------------:|
document.createElement(element) | 	Create an HTML element
document.removeChild(element) | Remove an HTML element
document.appendChild(element) | Add an HTML element
document.replaceChild(new, old) | Replace an HTML element
document.write(text) | Write into the HTML output stream

# Creating Animations - Project
lets create a simple HTML page with a box element that will be animated using JS. to create an animation, we need to change the properties of an element at small intervals of the time. we can achieve this by using the __setInterval()__ method which allows us to create a btimer and call a function to change properties repeatedly at defined intervals (in milliseconds). _For Example_:
```js
    // this code creates a timer that calls a move() function every 500 miilliseconds
    var t = setInterval(move, 500);

    // now we need to define the move() function that changes the position of the box
    // starting position
    var pos = 0;

    // our box element
    var box = document.getElementById('box');

    function move() {
	pos += 1;
	box.style.left = pos+"px"; // px = pixels
    } // the move() function increments the left property of the box element by one each time its called

    // the following code defines a timer that calls the move() function every 10 milliseconds
    var t = setInterval(move, 10);

     /**
     however this makes our box moves to the right forever. 
     to stop the animation when the box reaches the end of the container, we add a simpl cheeck to the 
     move() function and use the clearInterval() method to stop the timer
    **/

    function move(){
        if (pos >=150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+"px";
        }
    } 
        //  when the left attribute of the box reaches the value of 150, the box reaches the end of the container based on a container width of 200 and a box width of 50
```