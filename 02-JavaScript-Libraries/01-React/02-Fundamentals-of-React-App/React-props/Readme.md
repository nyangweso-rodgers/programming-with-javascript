# React `props`

- `props` (**properties**) allows passing of data from a **parent** to **children** components. i.e., `props` are like function parameters.
- Examples:

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

# Default `props`

```js
const ChildComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};

ChildComponent.defaultProps = {
  name: "Guest",
};
```

# Using `propTypes`

- you can specify the expected types for your `props` using `propTypes`.
- example:

  ```js
  import propTypes from "prop-types";

  ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
  };
  ```
