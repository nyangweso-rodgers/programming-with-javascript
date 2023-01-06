# Removing Elements

* to remove an __HTML element__, you must select the parent of the element and use the __removeChild(node)__ method.
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