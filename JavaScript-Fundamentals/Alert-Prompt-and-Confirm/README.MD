# Alert, Prompt, and Confirm boxes
* an __alert__ box is used when you want to ensure that information gets through to the user when an alert box pops up, the user must click OK to proceed. the alert function takes a single parameter, which is the text displayed on the pop up boxes.
```js
    alert("Dou you really love me?");

    // to display line breaks within a popup box, use the backlash followed by the character n
    alert("do you really love him?\nmaybe")
```

* the __prompt__ often used to have a user input a value before entering a page. when a __prompt box__ pops up, the user will have to click Ok or Cancel to proceed after entering the input value. if the user clicks OK, the box returns the input value if the user clicks CANCEL, the box returns null.
```js
    // the prompt() method takes two parameters:
    // .the first is the label, which you want to display in the text box
    // .the second is a default string to display in the text box (optional)
    var user = prompt('kindly, enter your name to proceed');
    alert(user);
```

* __Confirm box__: is often used to have the user verify or accept something. when a confirm box pops up, the user must either click OK or Cancel to proceed.
```js
    // ..if the user clicks OK, the box returns true.
    // .if the user clicks Cancel. the box returns false
    var result = confirm("do yoy really want to leave this page?");
    if (result == true) {
    alert("Thank you for visiting this page");
    }
    else {
    alert("Thank for staying with us.ENJOY OUR SITE");
    };
```