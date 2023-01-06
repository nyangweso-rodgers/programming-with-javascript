# Changing Style
* all the styles can also be changed using JS. all style attributes can be accessed using the style object of the element. __for example__:
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