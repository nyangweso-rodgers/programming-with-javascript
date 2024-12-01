# Setting Up React Application

## Table of Contents

# Requirements

- Requirements 1: VS Code Extensions

  1. [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  2. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
  3. [Debugger for Chrome](https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code)
  4. [JavaScript Debigger (Nightly)](https://learn.microsoft.com/en-us/visualstudio/javascript/debug-nodejs?view=vs-2022)
  5. [Prettier](https://prettier.io/)

- Requirements 2: Chrome Extension for `ReactJS` Development
  1. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

# Ways to Organize React Applications

## 1. Group components by Domain Responsibilities

- Prefer grouping components by domain responsibilities by pages(routes) or modules(domains).
- Example:
  - /src
    - pages --> Actual Pages representing different parts of the app
      - billing/
        - invoices/
          - index.js
      - login/
        - index.js

## 2. Put components into folders

- For complex components, it’s better to organize them into separate folders where you can list their subcomponents.
- Prefer having a single folder for each component.
- Example:
  - /src
    - components
      - accordion
        - index.js
      - alert
        - index.js
        - types.js

## 3. Favor Absolute Paths

- Using the right type of paths in your project can simplify navigation and maintenance, especially as your project grows. Refactoring will be much easier.
- **Avoid** using relative paths which can become hard to manage and error-prone in large projects.
  ```js
  import { formatDate } from "../../../utils";
  ```
- **Prefer** using absolute paths which improve readability and make refactoring easier.
  ```js
  import { formatDate } from "@common/utils";
  ```

# 4. Use a common module

- **Common** modules play a vital role in avoiding redundancy and promoting reusability across your application.
- You can store utility methods, constants, components, calculations, etc. in this common module.
- This centralization helps for better management and reuse.
- **Avoid** spreading common utilities and components across various locations in your project.
- **Prefer** having a dedicated common module for all generic components and utilities used across different pages or modules.
- Example:
  - /src
    - common
      - components
        - forms
          - index.js
        - dialog
          - index.js
      - hooks
      - utils
    - pages
      - billing
        - invoices
          - index.js

# Styling React Applications

- 3 ways of styling react components include:
  1. CSS Modules
  2. Styled Components
  3. Tailwind CSS

## 1. Styling React Components - CSS Modules

- **CSS Modules** are defined by naming the CSS files **.modules.css**, which allows you to access the CSS classes and animations defined in the stylesheet as JavaScript objects. You can assign them to the React elements.
- Examples

  - `app.module.css`
    ```css
    .yellow {
      color: yellow;
    }
    ```
  - usage

    ```js
    import Styles from "./app.module.css";

    const App = () => {
      return (
        <>
          <h1 className={Styles.yellow}>Hello World!</h1>
        </>
      );
    };

    export default App;
    ```

- The classes and animations are scoped locally to the component, and **React** provides support for the **CSS Modules** under the hood, so you don’t have to make any configuration changes. You can import the CSS Modules file in your component and then use the `import` alias to access the CSS classes as objects.
- The only problem with this is that you cannot merge to a class like you do while defining the normal CSS class in the string.
  ```html
  <h1 className="yellow large">Hello World!</h1>
  ```
- This is because the CSS is now converted to [ICSS](https://github.com/css-modules/icss), a low-level compilation of CSS that can be accessed as JavaScript objects.
- To use multiple CSS classes together, we will need to use packages, such as [classnames](https://www.npmjs.com/package/classnames), that allow us to merge CSS styles accessed as objects.
- Example:

  ```css
  /*app.module.css*/
  .yellow {
    color: red;
  }

  .large {
    font-size: 3em;
  }
  ```

  ```javascript
  import Styles from "./app.module.css";

  import cx from "classnames";
  const App = () => {
    return (
      <>
        <h1 className={cx(Styles.yellow, Styles.large)}> Hello World!</h1>
      </>
    );
  };

  export default App;
  ```

- **Advantages** of using CSS modules
  - **Scoped styles** - The styles are locally scoped to the component, which avoids the conflict of the class names. Classes with the same name can have different styles that will be updated to unique random values during the build creation.
  - **Isolated dependencies** - All the dependencies defined in the CSS Module are scoped to that file only and load when the component loads. This keeps the dependencies clear and scoped to that component.
  - **Boosts modularity** As the styles defined are locally scoped, it is easier to define the modular and reusable styles.

## 2. Styling React Components - Styled Components

- **CSS Modules** promote modularity, but we still have to maintain a separate style file to define the styles. Some developers find this better, as it provides a separation of concerns, as the business logic and styles are separate, while many prefer to have everything in a single file.
- **Styled Components** allow us to write CSS in JavaScript, completely eliminating the need to maintain separate styling files. This keeps all three layers of a webpage in a single file: HTML, CSS, and JavaScript.
- With Styled Components, we keep the styles isolated from the components in the true sense. It is a powerful way of styling the component that allows us to use React’s capabilities in the complete sense that the Styled Components can be used as a React component.
- Installation

  ```sh
    # npm
    npm install styled-components

    # yarn
    yarn add styled-components
  ```

- **ES6** has introduced [tagged template literals](https://learnersbucket.com/tutorials/es6/template-literals/), in which you can tag a string literal to the function accessed inside it. **Styled Components** use them to define their styles.
- Example

  ```javascript
  import Styled from "styled-components";

  const Button = Styled.button`
        background: transparent;
        border-radius: 3px;
        color: black;
        border: 1px solid;
        display: inline-block;
        margin: 0.5em 1rem;
        padding: 0.5em 0;
        transition: color .25s ease;
        cursor: pointer;
    `;
  ```

- With **Styled Components**, you can define the **React component** itself rather than applying the CSS style to the HTML element explicitly.
- The variable `Button` can be used as the **React component**, whereas the object accessed from the `Styled.button` defines the HTML element that will be created, which in this case is the button.
  ```javascript
  const Test = () => {
    return (
      <>
        <Button>Click me</Button>
      </>
    );
  };
  export default Test;
  ```
- The style is directly applied to the HTML element, and we can apply all sorts of styles as we do in the CSS, even on pseudo-states.
  ```javascript
  const Button = Styled.button`
    ...
    &:hover{
        color: red;
    }
  `;
  ```
- As **styled components** create React elements, we can pass props to them and access them. They can be used to apply dynamic styles.

  ```javascript
  import Styled from "styled-components";

  const Button = Styled.button`
      background: ${(props) => (props.filled ? "gray" : "transparent")};
      border-radius: 3px;
      color: ${(props) => (props.filled ? "white" : "black")};
      border: 1px solid;
      display: inline-block;
      margin: 0.5em 1em;
      padding: 0.5em 0;
      transition: color .25s ease;
      cursor: pointer;
      &:hover{
          color: ${(props) => (props.filled ? "blue" : "red")};
      }
    `;

  const Test = () => {
    return (
      <>
        <Button filled>Click me</Button>
      </>
    );
  };

  export default Test;
  ```

- This promotes the **container/presentational** pattern of the development in React, where the component does not maintain its state, but changes based on the props it receives.
- This helps to create a design system with the Styled Components, where the designers can create basic sets of common components that React developers can use to create other components.
- This is also possible because it is easier to extend the style of the HTML elements or elements created using Styled Components.

  ```javascript
  import Styled from "styled-components";

  const Button = Styled.button`
      background: ${(props) => (props.filled ? "gray" : "transparent")};
      border-radius: 3px;
      color: ${(props) => (props.filled ? "white" : "black")};
      border: 1px solid;
      display: inline-block;
      margin: 0.5em 1em;
      padding: 0.5em 0;
      transition: color .25s ease;
      width: 10em;
      cursor: pointer;
      &:hover{
          color: ${(props) => (props.filled ? "blue" : "red")};
      }
    `;

  const GreenButton = Styled(OutlinedButton)`
      background: green;
      border-color: yellow;
    `;

  const Test = () => {
    return (
      <>
        <Button filled>Click me</Button>
        <GreenButton filled>I am Green</GreenButton>
      </>
    );
  };

  export default Test;
  ```

- When we extend the styles, it overwrites the existing ones and applies the new ones.
- The props are passed down in the hierarchy automatically and can be accessed in both the extended component and the base component. We can also compose the Styled Components as normal React components.

  ```javascript
  import Styled from "styled-components";
  const Wrapper = Styled.main`
      padding: 10px;
      max-width: 1100px;
      margin: 0 auto;
    `;

  const HeroArea = Styled.section`
      background: green;
      height: 65vh;
    `;

  const Test = () => {
    return (
      <Wrapper>
        <HeroArea>Hello World!</HeroArea>
      </Wrapper>
    );
  };

  export default Test;
  ```

- **Advantages** of using **Styled Components**
  - **Better developer experience** - With Styled Components, developers feel closer to writing React code than HTML and CSS separately.
  - **Better modularity and abstraction** - As the styles are isolated to the components themselves, they are better scoped to the component, providing style abstraction, which could avoid CSS conflicts.
  - **Better performances** - As there are no separate files, the **Styled Components** are tightly bound to the React component. This way, they support code-splitting, and the Styled Components keep track of the component rendered to the page and inject the styles that belong to that component.
  - **Backward compatibility** - With **Styled Components**, you write modern CSS, and it handles everything else under the hood.

## 3. Styling React Components - Tailwind CSS

- Initializing Tailwind CSS
  - To start using Tailwind CSS in your React project, you need to initialize it. This involves installing Tailwind CSS and its dependencies and setting up the necessary configuration files.
- Install Tailwind CSS and dependencies:
  - In your project directory, run the following command to install Tailwind CSS along with `PostCSS` and `Autoprefixer`.
    ```sh
      npm install tailwindcss postcss autoprefixer
    ```
- Initialize Tailwind CSS:

  - Use the following command to generate the Tailwind CSS configuration file (`tailwind.config.js`) and the **PostCSS** configuration file (`postcss.config.js`).
    ```sh
      npx tailwindcss init -p
    ```
  - Adding the `-p` flag ensures that the files `tailwind.config.js` and `postcss.config.js` are created.

- Setting up Tailwind CSS configuration file

  - The `tailwind.config.js` file allows you to customize your **Tailwind CSS** setup. You can extend the default configuration, add custom themes, and configure other settings.

- **Configure purge option**

  - To optimize your CSS file size for production, configure the **purge** option. This option removes any unused CSS classes from your final build. Open `tailwind.config.js` and update the content property.
    ```javascript
    module.exports = {
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    };
    ```
  - This configuration ensures that **Tailwind CSS** scans all JavaScript, TypeScript, and HTML files for class names in the src and public directories.

- **Customize theme**
  - You can extend the default theme by adding custom colors, fonts, spacing, and more. For example, to add a custom color, modify the **theme** property.
    ```javascript
    module.exports = {
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {
          colors: {
            primary: "#1DA1F2",
            secondary: "#14171A",
          },
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
    };
    ```
- The above example adds two custom colors: **primary** and **secondary**.

- **Add plugins**

  - **Tailwind CSS** can be extended with plugins to add additional functionality. For instance, you can add forms or typography plugins. Install the plugin and add it to the plugin array.
    ```javascript
    const forms = require("@tailwindcss/forms");
    module.exports = {
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [forms],
    };
    ```
  - In this example, the `@tailwindcss/forms` plugin is added to enhance the styling of form elements.

- **Integrating Tailwind CSS with Create React App project**
  - Now that you have **Tailwind CSS** installed and configured, the next step is to integrate it with your Create React App project.
- Add Tailwind directives to your CSS
  - Create a CSS file if it doesn’t already exist (e.g., `src/index.css` ) and add the following Tailwind CSS directives.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
- These directives import Tailwind’s base styles, components, and utility classes into your CSS.

- **Import the CSS file into your React project**

  - Open `src/index.js` (or `src/index.tsx` if you’re using TypeScript) and import the CSS file at the top.
    ```javascript
    import "./index.css";
    ```

- **Verify Tailwind CSS integration**

  - Start your development server to ensure everything is configured correctly.
    ```sh
      npm start
    ```

- You can now start using Tailwind CSS classes in your React components. For example, open `src/App.js` and modify it to include some **Tailwind CSS** classes.

  ```javascript
  function App() {
    return (
      <div className="App">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-3xl">Welcome to My Tailwind CSS React App</h1>
        </header>
        <main className="p-4">
          <p className="text-gray-700">
            This is a simple example of using Tailwind CSS with React.{" "}
          </p>
        </main>
      </div>
    );
  }

  export default App;
  ```

# Resources

1. [React Styling: Essential Tips and Tricks for Designers](https://www.syncfusion.com/blogs/post/react-styling-tips-tricks?ref=dailydev)
