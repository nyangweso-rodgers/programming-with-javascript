# CSS3

# Introduction to CSS3
__CSS3__  is the latest standard of __CSS__. Significant Features are:
* Border radius - create rounded corners for elements
* Border Images - allows us to specify an image as the border around an element
* Multiple background - applies multiple background to elements
* Animations and effects e.t.c.,

# CSS3 New Features
to make web development easier and faster, __CSS3__ introduces additional new features, including:
1. __Box shadow__ - you can attach one or more shadows to an element by specifying values for:
    * color, 
    * size, 
    * blur, and 
    * offset
2. __Gradients__ - allow us to set the background color of the element to a gradient.two types of gradients are available: 
    * Linear and 
    * Radial
3. __Transforms___ - allow you to rotate, scale, and move and skew elements
4. __Transition__ - allows you to animate from one CSS property value to another. you can combine it with transfirms and animate the elements position, rotation, or scale
5. __Animations__ - have their own specifications and they allow you to create keyframes, set duration, easing, e.t.c

# CSS Vendor Prefixes
__CSS Vendor prefixes__ or __CSS browser prefixes__ are away for browser makers to add support for new CSS FEATURES during periods of testing and add experimentation. Browser prefixes are used to add new features that may not be  part of the final or formal CSS specification. E.g., the prefix for Safari and Chrome is ___-webkit__. the __border-radius__ property is currently supported in Chrome, Safari and Mozilla, as long as it's accompanied by browser prefix.to specify the border-radius in Chrome and Safari, the following Synatx is used:
```css
    /* the prefix is added to the property to make it work in the unsupported browsers.*/
    -webkit-border-radius:24px;
```
# Browser Prefixes
* Firefox : moz-
* Safari : -webkit-
* Chrome : -webkt-
* Opera: : o-
* Internet Explorer : -ms