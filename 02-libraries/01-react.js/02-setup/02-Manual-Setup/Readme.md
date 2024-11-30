# Creating React Development Environment

## Table of Contents

# Objective

- Create a React Development Environment manually to understand how tools like `create-react-app` works and also learn how customize a development environment of choice.

# Role of the Development Environment

- The development environment will:
  - compile `JSX`,
  - transpile `js`,
  - Lint JavaScript to enforce js standards,
  - generate `index.html` file
  - reload on save
  - one command

# Tools for the Development Environment

1. Node
2. Webpack
3. Babel
4. ESLint
5. npm Scripts

# Setup

## Step #1: Download and install `Node.js` which we use to run the development environment.

- Download and install `Node.js` which we use to run the development environment.

## Step #2: Create a Directory, `react-app-from-manual-setup`, and Initialize It

- Create a directory, `react-app-from-manual-setup` and proceed to create the following files:
  ```sh
    mkdir react-app-from-manual-setup
    cd react-app-from-manual-setup
    npm init -y
  ```
- this creates a new empty `package.json` where all the dependencies will be listed

## Step #3: Install Dependencies

- Install `react@16.12.0` and `react-dom@16.12.0`
  ```sh
    npm install react@16.12.0 react-dom@16.12.0 --save
  ```
- `react@16.12.0` and `react-dom@16.12.0` are two foundational packages for working with React applications.
- `react@16.12.0` package provides the core functionality of **React**. It includes:

  - **Components**: The building blocks for creating user interfaces. You can define reusable components with `props` and `state` to manage UI elements.
  - **JSX Syntax**: A syntax extension for JavaScript that allows you to write HTML-like structures within your code. These structures are then transformed into regular JavaScript function calls.
  - **State Management**: React allows components to maintain internal state, which controls how the component behaves and renders.
  - **Lifecycle Methods**: Components have lifecycle methods that you can use to perform actions at different stages of their lifecycle (e.g., mounting, updating, unmounting).

- `react-dom@16.12.0` package serves as the bridge between **React** and the **DOM** (Document Object Model) of your web page. It offers functionalities like:

  - **DOM Manipulation**: It allows you to update the browser's DOM by rendering React components.
  - **Hydration**: This is a process of synchronizing the server-rendered HTML with the in-browser React components, leading to a smoother user experience.
  - **Legacy Browser Support**: While React itself doesn't directly handle browser compatibility, react-dom provides utilities for supporting older browsers (though using a polyfill library might still be necessary).

- In addition, install `html-webpack-plugin`:
  - This plugin simplifies the creation of `HTML` files to serve your **Webpack** bundles. This is especially useful for Webpack bundles that include a hash in the filename which changes every compilation.
  ```sh
    npm i html-webpack-plugin --save-dev
  ```

## Step #4: Create a `src/` Directory with `index.html` and `index.js` Files

- Create a `src/` Directory with `index.html` and `index.js` Files

  ```sh
      mkdir src
      touch index.html index.js
  ```

- `index.js` file Acts as the entry point for your React application while `index.html` Provides the initial `HTML` structure and serves as a container for your React application. Here's a breakdown of their roles:

- Inside the `src/` directory, create an `index.html` file with the following boilerplate

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create React Development Environment</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>
  ```

  - This file provides the initial `HTML` structure for your web page.
  - It includes elements like `<head>` and `<body>` tags, along with meta information and styling.
  - Crucially, it contains a `div` element with a specific `ID` (usually `id="app"`). This `div` acts as a placeholder where your React application will be rendered.
  - When your application starts, the `index.js` code renders your React components and injects them into the DOM within this `div` element.

- Inside the `src/` create an entry-point to the app, i.e., `index.js` and add the following code:

  ```js
  // index.js
  import React from "react";
  import { render } from "react-dom";

  const Home = () => {
    return <p>This is a test paragraph!</p>;
  };

  render(<Home />, document.getElementById("app"));
  ```

- This file is the starting point where your React application's execution begins.
- It typically imports the main React component of your application and renders it using the render function from `react-dom`.
- This establishes the initial state of your React application.

## Step #5: Configure [Webpack](https://webpack.js.org/)

- [Webpack](https://webpack.js.org/) takes the individual building blocks (`JavaScript` files, `HTML`, `CSS`, `images` etc.) and combines them into a single, well-structured building (bundled file) that can be easily understood by a browser.
- **Webpack** achieves this by:

  - Identifying dependencies: It analyzes your code to understand how different files depend on each other (imports and exports).
  - Bundling: It takes all these files and combines them into a single output file (often named `bundle.js`). This simplifies browser loading and reduces the number of HTTP requests needed.
  - Loaders: **Webpack** can't understand everything on its own. It uses loaders like **Babel** to transform specific file types (like `JSX`) before bundling them.

- Install **webpack** dependencies by:
  ```sh
    # you can specify the specific version of the dependencies
    npm install save-dev webpack webpack-cli webpack-dev-server
  ```
- Create a file named `webpack.config.js` at the root of your project. This file will contain the **Webpack** configuration.
- Add the following configuration to `webpack.config.js`:

  ```js
  import path from "path";
  import HtmlWebpackPlugin from "html-webpack-plugin";
  import { fileURLToPath } from "url";
  import { dirname } from "path";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  export default {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9000,
    },
  };
  ```

- The code in this configuration file:
  - sets up a **Webpack** configuration for a React application.
  - It handles JavaScript and JSX files, generates an HTML file, and starts a development server.
  - The `path` module is used to construct file and directory paths.
  - The `HtmlWebpackPlugin` creates the `HTML` file that renders the React app.
  - The `devServer` section configures the local development server.
- Let's understand this configuration file:
- **Necessary Imports**:
  - `import path from "path";`: Imports `Node.js` path module to work with file paths.
  - `import HtmlWebpackPlugin from "html-webpack-plugin";`: Imports the `HtmlWebpackPlugin`, a plugin that simplifies the creation of `HTML` files to serve your webpack bundles.
  - `import { fileURLToPath } from "url";`: Imports `fileURLToPath` method from the `url` module, which converts a file `URL` to a path.
  - `import { dirname } from "path";`: Imports `dirname` method from the path module, which gets the directory name of a path.
- **Determining File Paths**:
  - `__filename`: Gets the absolute file path of the current module.
  - `__dirname`: Gets the directory path of the current module.
- **Webpack Configuration**:
  - `entry`: Specifies the starting point of your application (`./src/index.js`).
  - `output`: Defines where the bundled file should be output (`path`) and its name (`filename: "bundle.js"`).
  - `module.rules`: Tells **Webpack** how to handle different file types.
    - Rule for `.js` and `.jsx` files:
      - Uses `babel-loader` to transpile them.
  - `plugins`: Specifies `plugins` to be used during the build process
    - `HtmlWebpackPlugin`: Creates an `HTML` file that references the bundled JavaScript (`template: "./src/index.html"`).
    - `devServer`: Configures the development server
      - Serves static files from the `dist` directory.
      - Compresses responses for faster loading
      - Runs on port 9000.

## Step #6: Configure [Babel](https://babeljs.io/)

- We can think of **Babel** as a **translator**. **Webpack** might not understand the latest JavaScript features (`JSX`, classes etc.) you might be using in your React code. **Babel** acts as a **translator**, converting your modern `JavaScript` code into a version that older browsers can understand (usually `ES5`). This ensures wider compatibility for your application.
- We need [Babel](https://babeljs.io/) to:
  - Transpile modern `js`, and
  - Compile `JSX` to `JS`
- Install **Babel** packages needed to transform `JS` to `JSX` via the following command:
  ```sh
    # save to devDependencies
    npm install --save-dev @babel/core@7.7.7 @babel/node@7.7.7 babel-loader@8.0.6 @babel/preset-env @babel/preset-react
  ```
- Create a file named `.babelrc` or `babel.config.json` at the root of your project. This file will contain the Babel configuration. Then add the following:
  ```json
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```
- Remarks:
  - This is how Webpack and Babel work together:
    - In the setup, **Webpack** uses the `babel-loader` to identify and process your `JSX` files.
    - The `babel-loader` then uses Babel's presets (`@babel/preset-env` and `@babel/preset-react`) to convert your code to a compatible format.
    - Finally, **Webpack** bundles the transformed code with your other files into a single bundle.

## Step #7: Update `package.json` Scripts

- In your `package.json`, add a start script to run your application using **Webpack Dev Server**
  ```json
    "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
    }
  ```

## Step #8: Run Your Application

- Start the application by running:
  ```sh
      npm start
  ```
- Open your web browser and navigate to http://localhost:9000. You should see your React application running.

# Resources

1. [babeljs.io/](https://babeljs.io/)
2. [webpack.js.org/](https://webpack.js.org/)
3. [react.dev/](https://react.dev/)
