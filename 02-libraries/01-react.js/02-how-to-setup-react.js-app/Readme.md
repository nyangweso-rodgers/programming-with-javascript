# Setting Up React Application

## Table of Contents

# Requirements

## Requirements 1: VS Code Extensions

1. [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
3. [Debugger for Chrome](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)
4. [JavaScript Debigger (Nightly)](https://learn.microsoft.com/en-us/visualstudio/javascript/debug-nodejs?view=vs-2022)
5. [Prettier](https://prettier.io/)

## Requirements 2: Chrome Extension for `ReactJS` Development

1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

# Adding Styles to React Application

- In **React**, you specify a `CSS` class with `className`. It works the same way as the `HTML` class attribute:
  ```html
  <img className="someImage" />
  ```
- Then you write the `CSS` rules for it in a separate `CSS` file:
  ```css
  /* In Your CSS */
  .someImage {
    border-radius: 50%;
  }
  ```
- OR,`JSX` elements can also be styled using the `style` attribute.
- To style a `JSX` element, simply include a `style` attribute with a `js` object that includes the styles you want to apply. Example:

  ```jsx
  const myElement = (
    <div style={{ color: red, fontSize: "24px" }}>Some content</div>
  );
  ```

# Resources
