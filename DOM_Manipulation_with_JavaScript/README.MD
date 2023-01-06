   



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