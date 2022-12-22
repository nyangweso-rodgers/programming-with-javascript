# React

## Table Of Contents
1. [Introduction to React](#Introduction-to-React)
2. [How does React Work?](#How-does-React-Work?)
3. [Advantages of React](#advantages-of-React)
    - [Popular Apps using React](#Popular-Apps-using-React)
4. [Definition of Terms](#Definition-of-Terms)
    - Components
    - JSX (JavaScript XML)
    - Virtual DOM

- [References]()
    - [Learn React by Building an eCommerce Site](https://www.freecodecamp.org/news/learn-react-by-building-an-ecommerce-site/)
    - [W3 Schools - React Tutorial](https://www.w3schools.com/react/default.asp)
    - [React Tutorial](https://react-tutorial.app/app.html)
    - [Learn React](https://reactjs.org/)
    - [React Tutorial](https://react-tutorial.app/app.html)
    - [React JavaScript Framework for Beginners – Project-Based Course](https://www.youtube.com/watch?v=u6gSSpfsoOQ&t=35s)


# Introduction to React
__React__ is a __JavaScript library__ used to build _User Interfaces_. It is developed and maintained by __Facebook__. It is capable of building complex and highly interactive single-page web applications and can be integrated with any backend.

# How does React Work?
* __React__ creates a __VIRTUAL DOM__ in memory. Instead of manipulating the browser's DOM directly, __React__ creates a __virtual DOM__ in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
* __React__ only changes what needs to be changed! __React__ finds out what changes have been made, and changes only what needs to be changed.

# advantages of React
* Very fast, gives smooth experience to users
* Easy to develop and maintain due to its __Components__ based structure. A __component__ basically represent a piece of UI. Once a __component__ is created, it can be used as many times as you wish to.
* can be use on client-side and server-side devices
* reusable components rduce development time and help build complex functionalities
* data is updated by refreshing UI, making it efficient

# Popular Apps using React
* PayPal
* BBC
* Facebook
* Netflix
* Twitter
# Definition of Terms
1. __Components__: simple function that you can call with some input and they render some output. __Components__ are of two types:
    * Class based components: are defined using ES6 classes
    * functional based components: aee basic JavaScript functions. A _Typical Function Component in React_ is as below:
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
    There are two ways to create __components__:
    * Using ES6 classes
    * Using Functions
2. __JSX (JavaScript XML)__: an extension of JavaScript which allow us to write HTML code in JavaScript file. E.g., consider the below variable declaration. It's neither JS nor HTML. This is the mixture of JavaScript + XML = JSX. It is not necessary to work with JSX, but is recommended as it makes the code easier to understand.
```js
    cons element = <h1>Hello, World!</h1>
```
_Why use JSX?_
* As it basically helps us write HTML tags inside JS, which ultimately makes __React__ faster.
* JSX makes the code easier to understand and visually attractive.
```js
    class Hey extends React.Component {
        render(){
            return <div> Hello {this.props.iDontKnow}</div>;
        }
    }
    ReactDOM.render{
        <Hey iDontKnow="World"/>,
        document.getElementById('root')
    };
```

3. __Virtual DOM__: uses a strategy that updates the DOM without having to redraw all the webpage elements. Every time the DOM changes, browsers need to recalculate entire layout and then repaint the web page which makes the web app slow. To overcome this, we have __virtual DOM__. Evrey time the state of our application changes, the __virtual DOM__ gets updates instead of the real DOM.

    Whenever the new element is added to the UI, a new __virtual DOM__ associated with that element is created. If state of this element chnages, a second new __virtual DOM__ is created which will be compared with the previous __virtual DOM__. It then updates ONLY the object on the real DOM.
