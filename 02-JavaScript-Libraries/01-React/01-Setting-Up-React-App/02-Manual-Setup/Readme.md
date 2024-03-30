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

## Step #: Create a Directory, `react-app-from-manual-setup`, and Initialize It

- Create a directory, `react-app-from-manual-setup` and proceed to create the following files:
  ```sh
    mkdir react-app-from-manual-setup
    cd react-app-from-manual-setup
    npm init -y
  ```
- this creates a new empty `package.json` where all the dependencies will be listed

## Step #: Install Dependencies

- install the following dependencies:
  ```sh
    # install the dependencies
    npm install react@16.12.0 --save
    npm install react-dom@16.12.0 --save
  ```

## Step #: Create a `src/` Directory with `index.html` and `index.js` Files

- Create a `src/` Directory with `index.html` and `index.js` Files

  ```sh
      mkdir src
      touch index.html index.js
  ```

- inside the `src/` directory, create an `index.html` file with the following boilerplate
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
- inside the `src/` create an entry-point to the app, i.e., `index.js` and add the following code:

  ```js
  // index.js
  import React from "react";
  import { render } from "react-dom";

  const Home = () => {
    return <p>This is a test paragraph!</p>;
  };

  render(<Home />, document.getElementById("app"));
  ```

## Step #: Configure [Webpack]()

- With the above necessary source files, we can use [Webpack]() to run the application locally.
  - Webpack is an extreme powerful and extensible bundler
  - Webpack also includes a development web server
- install **webpack** dependencies
  ```sh
    # save to devDependencies
    # you can specify the specific version of the dependencies
    npm install save-dev webpack webpack-cli webpack-dev-server
  ```
- Create a file named `webpack.config.js` at the root of your project. This file will contain the Webpack configuration.
- Add the following configuration to `webpack.config.js`:

## Step #: Configure [Babel]()

- We need [Babel]() to:
  - Transpile modern `js`, and
  - Compile `JSX` to `JS`
- install **Babel** packages needed to transform `JS` to `JSX` via the following command:
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

## Step #: Install `html-webpack-plugin`

- This plugin simplifies the creation of `HTML` files to serve your Webpack bundles. This is especially useful for Webpack bundles that include a hash in the filename which changes every compilation.
  ```sh
    npm install --save-dev html-webpack-plugin
  ```

## Step #: Update `package.json` Scripts

- In your `package.json`, add a start script to run your application using Webpack Dev Server
  ```json
    "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
    }
  ```

## Step #: Run Your Application

- Start the application by running:
  ```sh
      npm start
  ```
- Open your web browser and navigate to http://localhost:9000. You should see your React application running.

# Resources
