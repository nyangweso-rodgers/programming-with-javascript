# Node.js Development Environment

## Table Of Contents

# Setting Up Development Environment for a Node.js Application

## Step #1: Requirements

1. Node.js

   - Install `Node.js` from [nodejs.org](https://nodejs.org/en/)

   - use CLI if the installation is successful
     ```sh
         # for node.js
         node -v
         # for npm
         npm -v
     ```

2. Express.js
3. `Nodemon`
   - this is a utility that monitors for changes in your source code files and automatically restarts the `Node.js` application when changes are detected
   - Example:
     ```json
      "scripts": {
        "dev": "nodemon index.js"
     ```
   - In this case, it's configured to run `index.js` with `nodemon`, allowing you to have an automatic restart of your server whenever you make changes to your code. This is beneficial because you don't have to manually stop and restart your server after every code modification during development.
4. JavaScript
5. Docker (optional)

## Step #2: Setup

- Step #2.1:
  - Create a project folder, e.g., `to-do-app` and cd into it.
    ```sh
        mkdir to-do-app
        cd to-do-app
    ```
- Step #2.2:
  - Initialize the Node.js application using `npm`
    ```sh
        npm init -y
    ```
- Step #2.3:
  - Install Express.js dependency:
    ```sh
        npm i express
    ```
- Step #2.4:
  - Install development dependencies
    ```sh
        npm i -D nodemon
    ```
  - add the following line before the closing curly brace to enable `ES6` import:
    ```json
        "type": "module"
    ```
  - In the `package.json` add the `script` part and the `main/type`
    ```json
        ...
        "main": "dist/index.js",
        "types": "dist/index.d.ts",
        "scripts": {
            "start": "ts-node src/index.ts",
            "build": "tsc",
            "dev": "nodemon --legacy-watch"
        },
        ...
    ```

# Sample Folder Structure

- my-app/

  - public/
    - index.html
    - styles.css
    - scripts.js
  - node_modules/
  - src/
    - components/
    - services/
    - utils/
    - app.js
    - index.js
  - tests/
  - package.json
  - Readme.md

- `public/`: acts like a storage for files everyone can see, like images, styles and scripts.
- `app.js`: acts like a control center of web applications. It's where you set up and manage everything.
- `utils/`: These are like handy tools you use to make your website better, like checking if someone's email is valid or formatting dates nicely.

# Resources
