# React Context API

## Table of Contents

# Problem with Passing `props`

- to pass data down to a particular component, we need to pass it down through all the intermediate components, even if those components don't actually use the data themselves. This is what is referred to as "**prop drilling**."
- it can be annoying to pass `props` when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.

# Overview of `contect Api`

- **Prop drilling** can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on. Fortunately, **React** provides a built-in feature known as the **context API** that helps “teleport” data to the components that need it without passing `props`.

# How the Context API Works

- Basically, `Context API` consists of two main components: the **context provider** and the **context consumer**.
- The **provider** is responsible for _creating and managing the context_, which holds the data to be shared between components.
- On the other hand, the **consumer** is used to access the context and its data from within a component.

# Use Cases of Context API

1. **Theming**: You can use Context API to store the current theme of your application and make it available to all components. This way, whenever the user switches the theme (such as enabling dark mode), all components will be updated with the new theme.

2. **User Authentication**: You can also use Context API to store a user's authentication status and pass it down to all the components that need it. This way, you can easily restrict access to certain parts of your application based on the user's authentication status.

3. **Multilingual Support**: You can store the current language of your application in the context and pass it down to all the components that need it. This way, you can easily switch between different languages without having to pass the language down as props to all the components.

4. **Accessing data from external sources**: Finally, you can use the Context API to store data retrieved from external sources such as APIs or databases and make it available to all components. This can simplify your code and make it easier to manage data across your application.

# Steps to using `Context API`

- **Step 1**:

  - Create a Context Object using `createContext` function from `react` library.
  - This object will hold the data that you want to share across your application
  - Create a new file named `MyContext.js` in the `src` folder with the following code:

    ```js
    // create MyContext.js inside the src directory
    import { createContext } from "react";

    export const MyContext = createContext("");
    ```

    - we are importing `createContext` from `React` and using it to create a new context object named "`MyContext`".
    - Then, we are exporting the context object so that we can use it in other parts of our application.

- **Step 2**:

  - Wrap Components with a **Provider**.
  - wrap the components that need access to the shared data with a **Provider** component.
  - The **Provider** component accepts a "value" `prop` that holds the shared data, and any component that is a child of the **Provider** component can access that shared data.
  - It's important to note that the **Provider** component should be wrapped around the top-level component in an application to ensure that all child components have access to the shared data.

    ```js
    // Create a parent component that wraps child components with a Provider
    import { useState, React } from "react";
    import { MyContext } from "./MyContext";
    import MyComponent from "./MyComponent";

    const App = () => {
      const [text, setText] = useState("");

      return (
        <div>
          <MyContext.Provider value={{ text, setText }}>
            <MyComponent />
          </MyContext.Provider>
        </div>
      );
    };

    export default App;
    ```

    - here, we have a parent component called, `App` which has a state variable called "`text`"t, which is initially set to an empty string.
    - We've also defined a function called `setText` that can be used to update the value of `text`.
    - Inside the return statement of the `App` component, we've wrapped the children of this component with the provider component ("MyContext.Provider"). Then we've passed an object to the value prop of the provider component that contains "text" and "setText" values.

- **Step 3**:

  - consume the Context
  - Now that we've created the **provider** component, we need to consume the **context** in other components. To do this, we use the "`useContext`" hook from React.

    ```js
        import { useContext } from 'react';
        import { MyContext } from './MyContext';

        const MyComponent() {
            const { text, setText } = useContext(MyContext);

            return (
                <div>
                    <h1>{text}</h1>
                    <button onClick={() => setText('Hello world!')}>Click the Button!</button>
                </div>
            );
        }

        export default MyComponent;
    ```

# Resources

1. [freeCodeCamp - How to Use the React Context API in Your Projects](https://www.freecodecamp.org/news/context-api-in-react/)
