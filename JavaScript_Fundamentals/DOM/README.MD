# JavaScript DOM ()

# Introduction to DOM
* __DOM__ is a method of representing the website in a hierarchically structured form. 

# Methods to Target DOM
1. __Target By Id__: 
    ```js
        document.getElementById("name");
    ```

2. __Target By Class__:
    ```js
        document.getElementByClassName("name");
    ```

3. __Target By Tag__:
    ```js
        document.getElementByTagName("name");
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

# DOM Get Properties
1. 
    ```js
        document.getElementById("name").innerText;
    ```
2.
    ```js
        document.getElementById("name").innerHTML;
    ```
3.
    ```js
        document.getElementById("name").getAttribute('AttributeName');
    ```
4.
    ```js
        document.getElementById("name").getAttributeNode('AttributeName');
    ```
5. 
    ```js
        document.getElementById("name").attributes[index no.]
    ```

# DOM Set Properties
1. 
    ```js
        .getElementById("name").innerText = "Text"
    ```
2.
    ```js
        .getElementById("name").innerHTML = "HTML"
    ```
3.
    ```js
        .getElementById("name").setAttribute("AttName", "value")
    ```
4.
    ```js
        .getElementById("name").Attribute[index].value = "value"
    ```
5.
    ```js
        .getElementById("name").removeAttributes("AttName")
    ```
