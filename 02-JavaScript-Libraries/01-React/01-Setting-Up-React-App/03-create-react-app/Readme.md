# `create-react-app` (CRA) React Toolchain

## Table Of Contents

# What is `create-react-app`?

- It is a tool that generates a new **React** site for us along with all of the **configuration** and **dependencies** it needs to run. This means it does all the heavy lifting for us when creating a new **React App**.

# Features of `create-react-app`

- It automatically generates `express`, `babel` and `webpack` configurations.
- It includes command line utilities for updating and maintaining project.

# How CRA Works

- `create-react-app` uses two popular **packages**:
  1. `webpack` which is a web bundler that optimizes all of the assets in your project, such as `JavaScript`, `CSS`, and `images`.,
  2. `Babel`: which is a tool that allows you to use newer `JavaScript` features, even if some browsers don’t support them.

# Advantages of `create-react-app`

- Little to no understanding of full stack web development to use `create-react-app`
- `create-react-app` is an industry standard tool
- `create-react-app` automatically created directory structure based on best practices.

# Disadvantages of `create-react-app`

- Very large stack makes troubleshooting problems complicated.
- Difficult to implement features not already supported.

# Steps to Running React Application with `create-react-app`

## Step #1: Install latest version of `node.js`

- Have [Node >= 14](https://nodejs.org/en/download) installed. This is because while using CRA, we use the node package manager (`npm`), to run and build our app.

## Step #2: Run `create-react-app` in the Terminal

- Quick start

  ```sh
      # run to use npm package manager
      npx create-react-app my-app-name
  ```

- Remarks:
  - `npx` is an `npm` package runner with [added advantages over using `npm`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
  - It is a part of the `node` package system, which temporarily downloads a `node` package for us and then runs it without explicitly installing it.
  - `create-react-app` is the command that generates our first **React App**.
  - `my-app-name` is the name of your **React App** or **project** (You can use any other different name).

## Step #3: Start the Development Server

- Head to `my-app-name` directory and type `npm start` which will start the development server (the starting script can be found in the `package.json` file.)

  ```sh
      # head to `my-app-name directory
      cd my-app-name
      # start the development server
      npm start
  ```

- Open http://localhost:3000/ to see your app.

# Understand `create-react-app` Folder Structure

- `node_modules/`:
  - stores all of our project `dependencies` and `node packages`.
  - The **React library** itself is a `node package`, and it's kept inside this directory which includes any other packages that one will install in the future will also be stored in this `node_modules` directory.
- `public/`:
  - everything in `public` will not be processed by `webpack` as it contains static assets or files and will be made public to the browser, such as the `HTML` file(s), `icon`(s), `images`, and `fonts`.
  - Example Files:
    - `favicon.co` the icon shown in the browser tab
    - `robot.txt `file which is for communicating with search engine crawlers and web scrapers.
    - `manifest.json` file which contains a bunch of information about our project and is primarily used when a user wants to install a [progressive web app]().
    - `index.html`: is the single file served to the browser when the app is loaded; where our React application will be injected into the page.
  - **Note**: You can delete or rename the other files but `index.js` and `index.html` has to remain the way they are.
- `src/`
  - This is the directory where we build `components` and contains the source code for the **React application**.
  - When our app is **compiled**, it's all the files in the `src` directory that get **compiled** into a [JavaScript bundle](https://stackoverflow.com/questions/42727269/what-is-an-asset-and-what-is-a-bundle).
  - Has the following files:
    - `index.js` is the file that kinda kickstarts the **React application**. It is the entry point of any `React` application as it imports `App.js` and renders it to the root element in `index.html`. In the `index.js` file, we import `React` for the `React` Engine, and `ReactDOM` for browser support.
    - `App.css` file used to style the components in the app.
    - `App.js` is the main component that is rendered to the `DOM` when your app is loaded. It contains the logic and structure of your app.
    - `index.css` - This is the global stylesheet where styling is done globally in the entire app.
    - `logo.svg` - This is an image in the form of an SVG being used in the App component.
    - `App.test.js` - Used for writing tests for the App component.
    - `setupTests.js` - Needed for the test files to work by importing a testing library.
    - `reportWebVitals.js` file - This allows us to measure the performance of the React application by analyzing certain metrics.
  - **REMARKS**:
  - For the start or as a beginner, one does not work with the `App.test.js`, `setupTests.js` and `reportWebVitals.js` files, which are used at a more advanced level, hence one can delete the files and also delete their import statements in the `App.js` and `index.js` files.
  - You may create subdirectories inside `src`
  - For faster rebuilds, only files inside `src` are processed by `webpack`. You need to put any `JS` and `CSS` files inside `src`, otherwise `webpack` won’t see them
- `.gitignore`
  - file for version control which tells `Git` which files or directories to ignore and not track eg the node_module directory.
- `package-lock.json`
- `package.json`
  - used for tracking `dependencies` or `packages` and their `versions` for each specific project created with `CRA`
  - It contains information about the project, including its dependencies that are stored in the `node_modules` directory, `scripts` like building, testing, or deploying your app, and other metadata.
- `Readme.md`
  - used to describe what the app does, how to install it, how to use it, and any other relevant information.

# Additional Modules to `create-react-app` Application.

## Bootstrap 5

- To import `Bootstrap 5` run the following command in the terminal.

  ```sh
    npm install bootstrap@5
  ```

- `Bootstrap 5` helps with positioning elements while using some of its built-in `css` classes.
- After installig `Bootsrap 5`, head to `src/index.js` and import it:

  ```js
  import "bootstrap/dist/css/bootstrap.min.css";
  ```

# Remarks

- We can create a folder, i.e., `src/main-page/` inside a `src/` folder then move `src/App.js`, `src/App.css` and `src/logo.svg` inside the `src/main-page/`
- You can then rename `App.js` to `index.js` and `App.css` to `main-page.css` for clarity.

# Alternatives to `create-react-app`

- `CRA` is a good tool for setting up a new `React` project. But there are newer tools that can do the job better:
  1. [Vite]()
  2. [Speedy Web Compiler (SWC)]()
- These new and improved alternatives are faster and easier to configure than `webpack` and `Babel`. This makes it easier to adjust the configuration which is difficult to do in `create-react-app` without ejecting.

# Resources

1. [Create React App - Official Documentation](https://create-react-app.dev/)
2. [react.dev/learn](https://react.dev/learn)
