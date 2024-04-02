# React `props`

## Table Of Contents

# Introduction to React `props`

- **React components** use `props` (short for **properties**) to communicate with each other. These properties are read-only. i.e., `props` allows passing of data from a **parent** to **children** components. i.e., `props` are like function parameters.
- `Props` might remind you of `HTML` **attributes**, but you can pass any `JavaScript` value through them, including `objects`, `arrays`, `functions`, and even `JSX`!
- E,g.,

  ```jsx
  function Hello(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function App() {
    return (
      <div>
        <Hello name="Rodgers" />
        <Hello name="Omondi" />
        <Hello name="Nyangweso" />
      </div>
    );
  }
  ```

- Example usage:

  - Parent Component:

    ```js
    // ParentComponent.js
    import React from "react";

    import ChildComponent from "./ChildComponent";

    const ParentComponent = () => {
      return <ChildComponent name="Rodgers" />;
    };

    export default ChildComponent;
    ```

  - Child Component:

    ```js
    // ChildComponent.js
    const ChildComponent = (props) => {
      return <p>Hello, {props.name}!</p>;
    };

    export default ChildComponent;
    ```

# Dynamic Rendering with `props`

- You can use `props` along with other variables, `functions`, or logic to render dynamic content.
- E.g.,
  ```js
      const Product = (props) => {
          return (
              <div>
              <h2>{props.name}<h2/>
              <p>Price: ${props.price}</p>
      {props.isOnSale && <p>On Sale!</p>}
              </div>
          )
      };
      export default Product;
  ```
- the `Product` component takes multiple `props` to render details about a product, including its `name`, `price`, and whether it's on sale.
- The expression `{props.isOnSale && <p>On Sale!</p>}` conditionally renders the "On Sale!" message if the isOnSale prop is true.

# Default `props` in React

```js
const ChildComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};

ChildComponent.defaultProps = {
  name: "Guest",
};
```

# Using `propTypes`

- `PropTypes` are used to make sure the values passed through `props` are valid. i.e., `PropTypes` includes `props` and their respective `PropTypes` for type checking.
- The main benefit of type checking is that it makes the code base more robust and bug free.
- you can specify the expected types for your `props` using `propTypes`.
- example:

  ```js
  import propTypes from "prop-types";

  ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
  };
  ```

# `State` vs. `Props`

- `Props` are passed to `components`, and from one `component` to another. `State` on the other hand is not passed from one `component` to the other, it is passed within the `component` only. The `state` is local data used and maintained by one `component` only. Two `components` cannot use or maintain one state.

- `Props` are _immutable_, which means that they cannot be modified. Once a `props` is passed to a `component`, that `component` cannot change the value of the `props`. `State` on the reverse is _mutable_. `States` can be changed at will in the `component`.

- So props are read-only while states are read-and-write. Props are used for communication uni-directional or bi-directional, while the state is used to render dynamic data in the component.

# Resources

1. [nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props](https://nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props)
