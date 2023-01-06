# Changing Elements

# Changing HTML Elements
Property | Description 
|:-------------:|:------------:|
element.innerHTML =  new html content | Change the inner HTML of an element
element.attribute = new value | Change the attribute value of an HTML element
element.style.property = new style | Change the style of an HTML element

Method | Description 
|:-------------:|:------------:|
element.setAttribute(attribute, value) | Change the attribute value of an HTML element

# Examples
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