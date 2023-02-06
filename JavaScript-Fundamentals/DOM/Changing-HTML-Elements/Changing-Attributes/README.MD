# Changing Attributes

* once you have selected the element(s) you want to work with, you can change their attributes, we can change the text content of an element suing the innerHTML property. for example:
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