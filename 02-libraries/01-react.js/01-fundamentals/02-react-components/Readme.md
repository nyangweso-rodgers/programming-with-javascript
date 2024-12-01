# React Components

## Table of Contents

# Introduction Of React Components

- **Components** are the foundation upon which you build UI.
- **React components** are **js functions** that return **markup** which can be as small as a `button`, or as large as an entire page.
- **Example**:

  - create a submit `button` component
    ```js
    // create a submit button component
    const SubmitButton = () => {
      return <button>Submit</button>;
    };
    ```
  - After `SubmitButton` as been declared, we can nest it into another `component`:
    ```js
    // nest the SubmitButton into another component
    export default function MyApp() {
      return (
        <div>
          <h1>Some header title!</h1>
          <SubmitButton />
        </div>
      );
    }
    ```

- **Note**:

  - `<SubmitButton />` starts with a capital letter. That’s how you know it’s a **React component**
  - **React component** names must always start with a capital letter, while `HTML` tags must be lowercase.
  - The `export default` keywords specify the main component in the file.

- To use **Component** with `JSX`, you must import them and then use them as an element in your `JSX` code. This allows you to reuse the component multiple times within your project.
  ```jsx
  // import Component
  import ExampleComponent from "./ExampleComponent";
  const element = <ExampleComponent />;
  ```

# 4 Ways to Create React Components

## 1. `createClass` Component

```js
var Home = React.createClass({
  render: function () {
    return <h1>createClass Component</h1>;
  },
});
```

## 2. `JS` Class Component

```js
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>createClass Component</h1>;
  }
}
```

## 3. Function Component

```js
function Home(props) {
  return <h1>createClass Component</h1>;
}
```

## 4. Arrow Function Component

```js
    const Home = (props) => <h1>createClass Component</h>
```

# Resources
