# Node.js

## Table of Contents

- [Further Reading]()
  1. [Node.js official website](https://nodejs.org/en)
  2. [Node.js Documentation](https://nodejs.org/docs/)
  3. [npm website](https://www.npmjs.com/)
  4. [Node.js cheatsheet - javacodegeeks.com](https://www.javacodegeeks.com/node-js-cheatsheet.html?ref=dailydev)

# Introduction to `Node.js`

- `Node.js` is used to run backend applications written in `js`

# Project Requirements

# Introduction to `npm` package manager

- `npm` is the standard package manager for `Node.js` and `js`. It is the default package manager that comes bundled with `Node.js`.
- `yarn` and `pnpm` are alternatives to `npm`
- `npm` manages downloads of dependencies of your project.
- Main components of `npm` include:
  1. **Packages**:
     - **Packages** are reusable `js` modules or libraries.
     - A package typically includes JavaScript files, documentation, and metadata.
     - These packages can be installed in `Node.js` applications, allowing developers to leverage existing code to build applications more efficiently.
  2. **Registry**:
     - The NPM registry is a massive online collection of public JavaScript packages. It is the central repository where package authors publish their code for others to use. The registry hosts a wide variety of items, ranging from small utility libraries to entire web frameworks.
  3. **CLI**:
     - The NPM CLI is a command-line tool that you can use to interact with the registry and manage packages. It provides commands for installing, updating, publishing, and managing dependencies.
  4. `package.json` **File**:
     - Every `Node.js` project typically includes a `package.json` file, which serves as a manifest for the project.
     - This file contains metadata about the project, including its name, version, dependencies, and scripts.
     - The `package.json` file helps NPM understand the project’s requirements and facilitates version management.
  5. **Dependencies**
     - **Dependencies** are packages that a `Node.js` project relies on to function correctly. These dependencies are listed in the project’s `package.json` file.
     - When you run `npm install`, NPM reads the `package.json` and downloads the specified dependencies from the registry.
     - Managing dependencies ensures that your application can be easily replicated on different systems.

## Working with `npm`

1. Create a new `npm` Package

   - to create a new `NPM` package based on existing files in your project directory, just navigate inside that directory and type the following command:
     ```sh
       npm init
     ```
   - Running this command will prompt you to answer a series of questions to create a `package.json` file for your project. You can press `Enter` to accept the default values or provide your own answers.
   - After completing the initialization, NPM will generate a `package.json` file in your project directory e.g.,
     ```json
     // package.json
     {
       "name": "<package-name>",
       "version": "1.0.0",
       "description": "<description>",
       "main": "index.js",
       "scripts": {
         "test": ""
       },
       "keywords": [],
       "authors": "<author>",
       "license": "MIT"
     }
     ```
   - An alternatives to running `npm init` is to run `npm init -y`:
     - the `-y` flag stands for `"yes` and is a shortcut for automatically accepting all default values for the `npm init` questions.
     - This means that when you run `npm init -y`, `npm` will generate a `package.json` file for your project using default values for all the configuration options without asking you to confirm each one.

2. Add a new dependency:

   - To add a new dependency to your `Node.js` project, you can use the `npm install` command followed by the name of the package you want to install. E.g.,
     ```sh
       npm install lodash
     ```
   - Under the hood, the `npm install` command downloads the designated package from the registry and installs it, along with all of its dependencies, to the `node_modules/ `directory inside your project folder; it then updates your project’s `package.json` file to include the newly added dependency.
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
     - Dependencies Versioning: You can install a specific version of a package, by running
       ```sh
           # install a specific version of a package
          npm install <package-name>@<version>
       ```

3. Updating Dependencies:

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

4. Running Tasks

   - `NPM` also allows you to define and execute scripts in your `Node.js` project.
   - These scripts are defined as key-value pairs in the `scripts` section of your `package.json` file. The key is the script name, and the value is the command to execute when the script is run.
   - Example:

     - let's create a new custom script called `"start"` that will run our `Node.js` application by executing the command `node app.js` (assuming our application is contained in `app.js`):
       ```json
        // package.json
        "scripts": {
          "start": "node app.js"
        }
       ```
     - To run the script, use the `npm run `command followed by the script name like this: `npm run start`

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

# `Node.js` Frameworks and Libraries

- Here is a list of frameworks/libraries built on `Node.js`

  1. `Express.js`

     - framework for building APIs and adding backend features for web and mobile applications.
     - It is minimalistic, efficient and saves a lot of coding time. Features include:
       - routing URLs,
       - templating HTML pages and
       - debugging server sides.

  2. `Next.js`
     - Next can be used to create full-stack web applications by extending React features with server-side functionalities.
     - It uses a structural approach to build complex backend consistently and supports modules to integrate other technologies.