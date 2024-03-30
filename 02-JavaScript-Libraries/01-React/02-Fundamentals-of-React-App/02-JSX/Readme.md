# JSX

# `JSX` Features

## `JSX` Feature #1: Type checking with `propTypes`

- `PropTypes` is a tool in the `React` library that helps you make sure your components are getting the right data. You can use it by adding it to your code and telling it what kind of data your component's `props` should be. This can help you find and fix problems in your code.
- To use `PropTypes`, you need to import it and then specify the data types for your `props` in an object called `propTypes` in your component.

  ```jsx
  import PropTypes from "prop-types";

  MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };
  ```

## `JSX` Feature #2: `JSX` spread attributes

- `JSX` spread attributes allow you to pass all the properties of an object as `props` to a `JSX` element. This can save you time and make your code more flexible.
- To use `JSX` spread attributes, you can use the `...` syntax and include the object that you want to spread as `props`.

  ```jsx
  const props = {
    name: "Rodgers",
    height: 6.1,
  };

  const element = <MyComponent {...props} />;
  ```

# Resources
