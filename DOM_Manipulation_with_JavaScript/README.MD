# JavaScript HTML DOM
When a web page is loaded, the browser creates a __Document Object Model__ of the page. With the object model, __JavaScript__ gets all the power it needs to create dynamic HTML:
* JavaScript can change all the HTML elements in the page
* JavaScript can change all the HTML attributes in the page
* JavaScript can change all the CSS styles in the page
* JavaScript can remove existing HTML elements and attributes
* JavaScript can add new HTML elements and attributes
* JavaScript can react to all existing HTML events in the page
* JavaScript can create new HTML events in the page

# The document Object
there are predefined document object in JS, which can be used to access all elements on the DOM. i.e., the document object is the owner (or root) of all objects in your page. so if you want to access objects in an HTML page, you always start with accessing the document object, _for example_:
```js
    document.body.innerHTML = "One, Two, Testing";
```
_Remarks:_
* _as the body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property_
* _the innerHTML property can be used on almost all HTML elements to change its content_

# Selecting Elements
all __HTML elements__ are objects. and as we know, every object has __property__ and __methods__. the __document object__ has methods that allows you to select the desired HTML element. these _three methods_ are the most used for __selecting HTML elements__:
1. __finds element by id__:
    ```js
        document.getElementById('id')
    ```
2. __finds element by class name__
    ```js
        document.getElementByClassName('name')
    ```
3. __finds element by tag name__
    ```js
        document.getElementByTagName(name)
    ```
    _Remarks_:
    * _in the example below, getElementById method is used to select the element with id='demo' and change its content_
        ```js
            var elem = document.getElementById("demo");
            elem.innerHTML = "Rodgers Nyangweso";
        ```
    * _the __getElementByClassName()__ method returns a collection of all elements in the document with the specified name_. for example, if our HTML page contained three elements with class="demo2", the following  code would return all those elements as an array:
        ```js
            var arr = document.getElementByClassName("p");
            // accessing the second element
            arr[1].innerHTML = 'Hi';
        ```
    * _similarly, the __getElementByTagName__ method returns all of the elements of the specified tag name as an array_. the following example gets all paragraph elements of the page and changes their content.
        ```js
            var allParagraphs = document.getElementsByTagName("p");

            for (var x = 0; x < allParagraphs.length; x++) {
                allParagraphs[x].innerHTML = 'Hi there!'
            }
        ```
     # Working with DOM
EACH element in the DOM has a set of properties that provide information about their relationships in the DOM:
* element __childNodes__ returns an array of an element child nodes
* element __firstChild__ returns the first child node of the element
* element __lastChild__ returns the last child node  of the element
* element __hasChildNodes__ returns true if an element has any child nodes. otherwise, false
* element __nextSibling__ returns the next node at the same tree level
* element __previousSibling__ returns the previous node at the same tree level
* element __parentNode__ returns the parent node of an element

_Remarks_:
* _example_: we can select all child nodes of an element and change their content.
```js
    var a = document.getElementById('demo2');
    var arr = a.childNodes; // selecting all the child nodes
    for (var x = 0; x<arr.length; x++) {
        arr[x].innerHTML = "new text";
    };
```
# Changing Attributes
once you have selected the element(s) you want to work with, you can change their attributes, we can change the text content of an element suing the innerHTML property. for example:
* _we can change the src attribute of an image_
    ```js
        var img = document.getElementById("my_img");
        img.src = "‪rodgers_image2.jpg";
    ```
* _we can change the href attribute of a link_
    ```js
        var el2 = document.getElementsByTagName('a');
        el2[0].href = "specify the url";
    ```

* _practically, all attributes of an element can be changed using JS_
# Changing Style
all the styles can also be changed using JS. all style attributes can be accessed using the style object of the element. __for example__:
```js
    var x = document.getElementById("style-demo");
    x.style.color = "#649272";
    x.style.width = "100px";
```
_Remarks_:
* _the above code will change the text color and width of the div element_
* _all CSS properties can be modified using JS. just remember that you cannot use dashes (-) in the property names: these are replaced with camelCase versions where the compound word begins with a capital letter_. for example
    ```js
        x.style.backgroundColor = "#33EA73";
    ```
# Adding and Removing Elements

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

# Removing Element
to remove an __HTML element__, you must select the parent of the element and use the __removeChild(node)__ method.
```js
    var parent = document.getElementById("remove-demo");
    var child = document.getElementById("p1");
    parent.removeChild(child); 
```

_Remark_:
* _an alternatie way to achieving the same result would be the use of the __parentNode__ property to get the parent of the element we want to remove._
    ```js
        var child = document.getElementById("p1");
        child.parentNode.removeChild(child);
    ```
    # Replacing Elements
to replace an HTML element, the element __replaceChild(newNode, oldNode)__ method is used:
```js
    var p = document.createElement("p");
    var secondNode = document.createTextNode("This is a replaced text");
    p.appendChild(secondNode);

    var secondParent = document.getElementById("replace-demo");
    var secondChild = document.getElementById("p3");
    secondParent.replaceChild(p, secondChild);
```
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
# Handling Events
you can write JS code that executes when an event occurs, such as when a user clicks an HTML element, move the mouse, or submits a form. when an event occurs on an a target element, a handler function is executed: Common HTML events include:
* __onclick__ - occurs when the user clicks on an element
* __onload__ - occurs when an object has loaded
* __onunload__ - occurs once a page has unloaded (for $<$ body $>$)
* __onchange__ - occurs when the content of a form element, the selection, or the checked state have changed. (for $<$ input $>$, $<$ keygen $>$, $<$ select $>$, and $ <
$ textarea $>$)
* __onmouseover__ - occurs when the pointer is moved onto an element, or out of one of its children
* __onmouseout__ - occurs when a user moves the mouse pointer out of an element, or out of one of its children
* __onmousedown__ - occurs when the user presses a mouse button over an element
* __onmouseup__ - occurs when a user releaees a mouse button over an element
* __onblur__ - occurs when an element loses focus
* __onfocus__ - occurs when an element gets focus

_Remarks_:
* _corresponding events can be added to HTML elements as attributes_. for example:
    ```html
        <p onclick="someFunc()">some text</p>
    ```
* _let's display an alert popup when a user clicks a specified button_
    ```js
        function show(){
            alert("Hi there");
        } 
    ```
* _the onload and onunload events are triggered when the user enters or leaves the page. these can be useful when performing actions after the page is loaded_
* _similarly, the window.onload event can be used to run code after the whole page is loaded_
    ```js
        window.onload = function() {
            // some code
        }
    ```
* _the __onchange__ event is mostly used on textboxes. the event handler gets called when the text inside the the text box changes and focus is lost from the element_. for example
    ```js
        function change(){
            var x = document.getElementById("name");
            x.value = x.value.toUpperCase();
        }
    ```
* _the __addEventListener()__ method attaches an event handler to an element without overwriting existing event handlers. you can add many event handlers to one element. you can also add many event handlers of the same type to one element, i.e., two "click" events_
    ```js
        element.addEventListener(event, function, useCapture);
    ```
* _the first parameter is the event's type (like 'click', or, 'mousedown'); the second parameter is the function we want to call when the event occurs; the third parameter is a Boolean value specifying whether to use event bubbling or event capturing. this parameter is optional_.
* _you don't use the 'on' prefix for this event; use 'click' instead of 'onclick'_. for example:
    ```js
        element.addEventListener("click", myFunction);
        element.addEventListener("mouseover", myFunction);
        function myFunction(){
            alert("hello world");
        } // this adds two event listeners to the element
    ```
* _we can remove one of the listeners_
    ```js
        element.removeEventListener("mouseover", myFunction);
    ```
* _let's create an event handler that removes itself after being executed:_
    ```js
        var btn = document.getElementById("event");
        btn.addEventListener("click", myFunction);
        function myFunction(){
            alert(Math.random());

            btn.removeEventListener("click", myFunction);
        }
        // after clicking the button, an alert with a random number displays and the event listener is removed
    ```
# Event Propagation
there are two ways of __event propagation__ in the HTML DOM: 
    * bubbling and 
    * capturing
_Remarks_
* _event propagation allows for the definition of the element order when an event occurs. if you have a $<$ p $>$ element inside a $<$ div $>$ element, and the user clicks on the $<$ p $>$ element, which element's 'click' event should be handled first?_
* _in __bubbling__, the innermost element's event is handled first and then the outer element's event is handled. the $<$ p $>$ element's click event is handled first, followed by the $<$ div $>$ element's click event._
* _in capturing, the outermost element's event is handled first and then the inner. the $<$ div $>$ element's click event is handled first, followed by the  $<$ p $>$ element's click event_
* _capturing goes down the DOM. bubbling goes up the DOM._

# Form Validation
HTML5 adds some attributes that allow form validation. for example, the required attribute can be added to an input field to make it mandatory to fill in. More complex form validation can be done using JS: _the form element has an onsubmit event that can be handled to perform validation._. for example:
```js
    // let's create a form with two inputs and one button 
    function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById("num2");

    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
        return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
    } // we return true when the values are not blank and are equal
    // the form will not get submitted if its onsub,it event returns false.
```


















# HTML DOM Document Object
The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. 

# Finding HTML Elements (Methods)
Method | Description 
|:-------------:|:------------:|
document.getElementById(id) | Find an element by element id
document.getElementsByTagName(name) | Find elements by tag name
document.getElementsByClassName(name) | Find elements by class name

# Changing HTML Elements
Property | Description 
|:-------------:|:------------:|
element.innerHTML =  new html content | Change the inner HTML of an element
element.attribute = new value | Change the attribute value of an HTML element
element.style.property = new style | Change the style of an HTML element

Method | Description 
|:-------------:|:------------:|
element.setAttribute(attribute, value) | Change the attribute value of an HTML element

# Adding and Deleting Elements
Method | Description 
|:-------------:|:------------:|
document.createElement(element) | 	Create an HTML element
document.removeChild(element) | Remove an HTML element
document.appendChild(element) | Add an HTML element
document.replaceChild(new, old) | Replace an HTML element
document.write(text) | Write into the HTML output stream

# Adding Event Handlers
Method | Description 
|:-------------:|:------------:|
document.getElementById(id).onclick = function(){code} | Adding event handler code to an onclick event