# State

- **Components** often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking `“next”` on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. **Components** need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called **state**.
- **State** lets a **component** “remember” information like user input. E.g., _a form component can use state to store the input value, while an image gallery component can use state to store the selected image index._
- To add **state** to a **component**, use one of these **Hooks**:
  - `useState()` - declares a **state** variable that you can update directly.
  - `useReducer()` - declares a state variable with the update logic inside a [reducer function](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## `useState()` Hook

- For **class components** state is generally defined by writing a `class` and using `this.state` to initialize a `class`.
  ```js
      class MyComponent extends React.Component {
          constructor(props)
          super(props);
          this.state = {
              name: Rodgers Nyangweso // Some property with the default state value
          }
      };
  ```
- **React hooks** allow us to scrap all that `class` stuff and put the `useState()` hook to use instead. Something like this:

  ```js
  import { useState } from "react";

  function MyComponent() {
    const [name, setName] = useState("Rodgers Nyangweso"); // Defines state variable (name) and call (setName) -- both of which can be named anything
  }
  ```

- Hooks don’t work inside of a `class` because they’re used in place of them. We’re using the hook directly in the component:

  ```js
  import { useState } from "react";

  function MyComponent() {
    const [name, setName] = useState("Rodgers Nyangweso"); // Defines state variable (name) and call (setName) -- both of which can be named anything

    return (
      <div>
        <p>Hello, {name}</p>
      </div>
    );
  }
  ```

## `useEffect()` Hook

- **Effects** let a **component** connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
- `useEffect()`: connects a component to an external system.

## `useContext()` Hook

- **Context** lets a **component** receive information from distant parents without passing it as `props`. E.g.,, _your app’s top-level component can pass the current UI theme to all components below, no matter how deep._
- `useContext()`: reads and subscribes to a context.

## `useRef` Hook

- **Refs** let a **component** hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with **state**, updating a **ref** does not re-render your component. **Refs** are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.
- `useRef`: declares a **ref**. You can hold any value in it, but most often it’s used to hold a DOM node.
