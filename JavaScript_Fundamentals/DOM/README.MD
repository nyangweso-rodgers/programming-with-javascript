# JavaScript HTML DOM

## Table Of Contents
- [JavaScript HTML DOM](#JavaScript-HTML-DOM)
- [Working with DOM]()
    - [Selecting Elements]()
    - [Creating Elements]()
    - [Changing HTML Elements]()
    - [Replacing Elements]()
    - [Removing Elements]()

# JavaScript HTML DOM
* When a web page is loaded, the browser creates a __Document Object Model__ of the page. With the object model, __JavaScript__ gets all the power it needs to create dynamic HTML:
    * JavaScript can change all the HTML elements in the page
    * JavaScript can change all the HTML attributes in the page
    * JavaScript can change all the CSS styles in the page
    * JavaScript can remove existing HTML elements and attributes
    * JavaScript can add new HTML elements and attributes
    * JavaScript can react to all existing HTML events in the page
    * JavaScript can create new HTML events in the page

# The Document Object
* there are predefined document object in JS, which can be used to access all elements on the DOM. i.e., the document object is the owner (or root) of all objects in your page. so if you want to access objects in an HTML page, you always start with accessing the document object, _for example_:

    ```js
        document.body.innerHTML = "One, Two, Testing";
    ```
# Working with DOM
* EACH element in the DOM has a set of properties that provide information about their relationships in the DOM:
    * element __childNodes__ returns an array of an element child nodes
    * element __firstChild__ returns the first child node of the element
    * element __lastChild__ returns the last child node  of the element
    * element __hasChildNodes__ returns true if an element has any child nodes. otherwise, false
    * element __nextSibling__ returns the next node at the same tree level
    * element __previousSibling__ returns the previous node at the same tree level
    * element __parentNode__ returns the parent node of an element

* _Remarks_:
    * _example_: we can select all child nodes of an element and change their content.
    ```js
        var a = document.getElementById('demo2');
        var arr = a.childNodes; // selecting all the child nodes
        for (var x = 0; x<arr.length; x++) {
            arr[x].innerHTML = "new text";
        };
    ```
# New DOM Target Methods
* Use the JS __querySelector()__ and __querySelectorAll()__ to find elements based on CSS Selectors.

    1. The following example uses the __querySelector()__ selects the first element in the document.
        ```js
            document.querySelector('*');
        ```
    2. And this selects all elements in the document
        ```js
            document.querySelectorAll('*');
        ``

# Some Other DOM Targeting Methods
1. document
2. document.all
3. document.documentElement
4. document.head
5. document.title
6. document.body
7. document.images
8. document.anchors
9. document.links
10. document.forms
11. document.doctype
12. document.URL
13. document.baseURL
14. document.domain

# What Can We Get & Set with DOM?
* Text
* HTML
* Attribute
