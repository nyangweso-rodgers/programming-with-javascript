# Create React App (CRA)

## Table Of Contents

# Overview of CRA

- **CRA** is a popular tool built upon [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/) to help developers quickly set up a React project. The React team has officially announced its support for the tool, making it a popular and reliable choice.
- This React tool comes with a preconfigured environment that takes care of most of the configuration, which would otherwise be burdened on the developers’ shoulders. This helps React developers focus on writing code rather than worrying about the configuration files. In addition, CRA can create scripts and dependencies.
- Some prominent features that distinguish it from other tools include:
  1. production building,
  2. hot module replacement,
  3. and a local development server.
- However, as the app grows, **CRA** performance and speed deteriorate.

# Benefits of CRA

1. **Official Support** - The React team is maintaining this tool. Getting support from the official team is a huge advantage for all those developers employing React in their projects. This also means that the official React team will bear the responsibility of fixing bugs and adding new advanced features to CRA tool. They are also expected to release regular updates.
2. **Mature Ecosystem** - CRA is not a new tool in the community. It’s a mature tool with the support of a large and vibrant community. Numerous third-party plugins are available for it. This allows you to use this tool with various development frameworks, IDEs, and libraries. You can refer to online tutorials and detailed documentation for guidance or when you come across any problem. In short, the tool boasts an extensive ecosystem.
3. **Automatic Configuration** - When writing React code with a CRA, you no longer have to worry about building configurations. The tool does all the heavy lifting by handling configurations and helping developers reduce development time. Not getting involved in mundane and repetitive tasks significantly benefits developers, especially beginners.
4. **Opinionated Defaults** - With CRA, you follow best practices and utilize sensible defaults, helping you lay a solid foundation for your React project. Opinionated defaults also give a headstart in the development process, saving valuable time and increasing productivity along the way.

# Disadvantages of CRA

1. Very large stack makes troubleshooting problems complicated.
2. Difficult to implement features not already supported.

# How CRA Works?

1. **Webpack** forms a tree of dependencies from your project’s modules, leveraging the `index.js` file and the application’s entry point.
2. Next, the **Babel** transpiles your code.
3. After that, **CRA** bundles the code and serves it through the Express web server.
4. In the end, CRA sets up sockets to manage hot module replacement.

- Remark:
  - This is a quick approach to software development with an intense focus on coding. But despite all its benefits, it has a noteworthy flaw. Whenever you implement changes in the React code, the **Webpack** repeats the bundling process every single time, no matter if it’s a single or tiny change.
  - This will slow down your React application as its source code grows more extensive, increasing the time it takes to run a dev server and create a new project.

# Features of CRA

- It automatically generates `express`, `babel` and `webpack` configurations.
- It includes command line utilities for updating and maintaining project.

# Steps to Running React Application with CRA

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

# Resources

1. [Create React App - Official Documentation](https://create-react-app.dev/)
2. [react.dev/learn](https://react.dev/learn)
