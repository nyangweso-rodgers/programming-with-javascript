# Node.js

## Table of Contents

# Introduction to Node.js

- **Node.js** is used to run backend applications written in `js`

# Node.js Tools

- There are many tools available for **Node.js** development, catering to various tasks like:
  1. debugging,
  2. testing,
  3. linting,
  4. bundling, and
  5. server management.
- Here are some commonly used tools, organized by category

# 1. Node.js Development Workflow Tools

## 1.1 Nodemon

- [Nodemon](https://nodemon.io/) is a **Node.js** tool developed by [Remy Sharp](https://github.com/remy) that watches for file changes and restarts your app automatically.
- Do you need for **Nodemon**? **Node.js** native watch mode
  - **Node.js** versions after **18.11 released in 2022** provide a `--watch` command line switch to watch for file changes and restart accordingly. There’s no need to install a third-party module, and you can run an application directly:
    ```sh
      node --watch myapp.js
    ```
  - You can set specific paths on Windows and MacOS using `--watch-path`:
    ```sh
      node --watch-path=./lib --watch-path=./config myapp.js
    ```
  - Similar options are available in **Deno**:
    ```sh
      deno run --watch myapp.js
    ```
  - And **Bun**:
    ```sh
      bun --watch myapp.js
    ```
- Native file `--watch` may be good enough for projects with simpler requirements, but it has **disadvantages**:

  - **Limited functionality**. `--watch` offers basic file monitoring and restarting, but it lacks advanced **Nodemon** features such as configuring output, handling crashes, running events, launching non-Node.js executables, and more.
  - **Scalability issues**. `--watch` will attempt to watch all files in a large project. This could become slow and it lacks **Nodemon’s** ability to limit file types and locations.
  - **Cross-platform limitations**. Unlike **Nodemon**, `--watch-path` does not support wildcards and is only available on **MacOS** and **Windows** at the time of writing.

- Installing **Nodemon**:

  - Installing **Nodemon** as a global module is the preferred method and ensures it’s available in all projects. You can run nodemon on the command line from any directory:
    ```sh
      npm install nodemon -g
    ```
  - You can also install **Nodemon** as a **development dependency** in a specific project. You won’t be able to run **nodemon** from the command line, but you can call it from a `package.json` script or using `npx nodemon`:
    ```sh
      npm install nodemon --save-dev
    ```

- **Nodemon** usage:

  - _`nodemon`_ replaces `node` on the command line. Rather than running a script with `node myapp.js`, you use `nodemon myapp.js`. It supports all the `node` command-line switches and arguments you want to use, such as loading .`env `files and running the debugger:
    ```sh
    nodemon --env-file=.env --inspect myapp.js
    ```
  - Your application starts as normal, but editing and saving a JavaScript file now stops and restarts it without further interaction. You can force a restart by typing `rs` with a carriage return in the active Nodemon terminal if necessary.

- **Note**:

  - **Nodemon** restarts your server-side application but won’t refresh a client-side web page. Tools such as [Browsersync](https://browsersync.io/) or [LiveReload](https://livereload.net/) can do that for you.

# Resources

1. [Node.js official website](https://nodejs.org/en)
2. [Node.js Documentation](https://nodejs.org/docs/)
3. [npm website](https://www.npmjs.com/)
4. [Node.js cheatsheet - javacodegeeks.com](https://www.javacodegeeks.com/node-js-cheatsheet.html?ref=dailydev)
5. [freecodecamp - How to Deploy Your Node.js App on Azure](https://www.freecodecamp.org/news/how-to-deploy-node-js-app-on-azure/?ref=dailydev)
6. [Use Nodemon to automatically restart Node.js apps](https://blog.openreplay.com/use-nodemon-to-automatically-restart-node-js-apps/?ref=dailydev)
