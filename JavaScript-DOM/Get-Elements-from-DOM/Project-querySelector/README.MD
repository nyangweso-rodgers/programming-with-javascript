# Project: `querySelector`


# Overview Of `querySelector()`
* `querySelector()`  retrieves the first element that matches the specified `CSS` selector. 

    ```js
        // syntax:
        const elm = document.querySelector(selector);
    ```
* The `selector` parameter represents the `CSS` selector that you want to use to find the desired element. It can be any valid `CSS` selector, such as a class name (`.class-name`), an ID (`#element-id`), an element type (`div`, `p`, etc.), or a combination of selectors.

* When `document.querySelector() `is called, it traverses the document starting from the root element (`html`) and returns the first element that matches the specified selector. If no element is found, it returns `null`.
# Replacing Element
* To replace an `HTML` element, the element `replaceChild(newNode, oldNode)` method is used.

# Project Description
* Get the `textContent` of the `id='firstStudent'` and change the name to `Nyangweso` using `querySelector()` method.

