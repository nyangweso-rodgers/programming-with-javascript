# Node.js

## Table of Contents

# Introduction to `Node.js`

- `Node.js` is used to run backend applications written in `js`

# Project Requirements

- Install `Node.js` from [nodejs.org](https://nodejs.org/en/)
  - use CLI if the installation is successful
    ```sh
        # for node.js
        node -v
        # for npm
        npm -v
    ```

# Introduction to `npm` package manager

- `npm` is the standard package manager for `Node.js`.
- `yarn` and `pnpm` are alternatives to `npm`
- `npm` manages downloads of dependencies of your project.

## Installing dependencies

- if a project has a `package.json` file, by running
  ```
  #
  npm install
  ```
  it will install everything the project needs, in the `node_modules` folder, creating it if it's not existing already.
- to install a specific package, run

  ```sh
    # install a single package
    npm install <package-name>
  ```

  - since, `npm` 5, this command adds `<package-name>` to the `package.json` file dependencies. Before version 5, you needed to add the flag `--save`.
  - often, additional flags are added to this command:
    - `--save-dev`: installs and adds the entry to the `package.json` file devDependencies
    - `--no-save` installs but does not add the entry to the `package.json` file dependencies
    - `--save-optional` installs and adds the entry to the `package.json` file optionalDependencies
    - `--no-optional` will prevent optional dependencies from being installed
  - shorthands for the above flags are:
    - `-S` for `--save`
    - `-D` for `--save-dev`
    - `O` for `--save-optional`

- The difference between `devDependencies` and `dependencies` is that the former contains **development tools**, like a testing library, while the latter is bundled with the app in production.
- As for the `optionalDependencies` the difference is that build failure of the dependency will not cause installation to fail. But it is your program's responsibility to handle the lack of the dependency.
- you can also install multiple dependencies all at once

  ```sh
    # install multiple dependencie
    npm install uuid mongooose
  ```

- **NOTE**

  - the `install` command can be replaced with `i` for convenience. e.g.,

    ```sh
      # install  dependencie
      npm i <package-name>
    ```

## Updating Dependencies

- run the following command to update dependencies
  ```sh
    # update dependencies
    npm update
  ```
- `npm` will check all packages for a newer version that satisfies your versioning constraints.
- You can specify a single package to update as well:
  ```sh
    # update a single dependency
    npm update <package-name>
  ```

## Dependencies Versioning

- You can install a specific version of a package, by running
  ```sh
    # install a specific version of a package
    npm install <package-name>@<version>
  ```

# Running Tasks

- `package.json` file supports a format for specifying command line tasks that can be run by using
  ```sh
    npm run <task-name>
  ```
- Example:
  ```json
  {
    "scripts": {
      "start-dev": "node lib/server-development",
      "start": "node lib/server-production"
    }
  }
  ```
- it is very common to use this feature to run **webpack**
  ```json
  {
    "scripts": {
      "watch": "webpack --watch --progress --colors --config webpack.conf.js",
      "dev": "webpack --progress --colors --config webpack.conf.js",
      "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
    }
  }
  ```
- So instead of typing those long commands, which are easy to forget or mistype, you can run
  ```sh
    npm run watch
    npm run dev
    npm run prod
  ```

# How to setup a `Node.js` project

- from the command line, create a `node-project` folder and navigate to the project
  ```sh
      # create a project
      mkdir node-project
      # navigate to the project
      cd node-project
  ```
- initialize the project
  ```sh
      # initialize the project
      npm init
  ```
- a new file, `package.json` is added to the project. we use this file to add modules to the project.
- add the following line before the closing curly brace to enable `ES6` import:
  ```json
      "type": "module"
  ```

# Node.js Folder Structure

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
