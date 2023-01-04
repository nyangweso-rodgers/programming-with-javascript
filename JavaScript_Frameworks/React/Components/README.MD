# React Components

# Introduction to React Components
* __Components__: simple function that you can call with some input and they render some output. __Components__ are of two types:
    * __Class Based Components__: are defined using ES6 classes
    * __Functional Based Components__: are basic JavaScript functions. A _Typical Function Component in React_ is as below:
    ```js
    import React from "react" // way of telling Babel that we are working with JSX filed so that it will not throw error while transforming code into the React.createElement calls
    
    '''
    Below id a React function component:
    This is quite similar to typical JavaScript functions. The only difference is, here we are returning HTML code because this is JSX(JavaScript XML)
    '''
    function componentName() {
        return {
            <h1>I am a function component</h1>
        }
    }

    export default componentName; // Exporting the function (component) so that we can use it outside
    ```
# Creating Components
There are two ways to create __components__:
* Using ES6 classes
* Using Functions