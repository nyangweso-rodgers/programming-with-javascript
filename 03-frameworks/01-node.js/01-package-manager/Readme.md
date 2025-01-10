# Node.js Package Manager

## Table Of Contents

# Node.js Dependency Management Tools

# What Are npm Packages?

- **npm** is the standard package manager for **Node.js** and js. It is the default package manager that comes bundled with **Node.js**. **yarn** and **pnpm** are alternatives to **npm**
- **npm packages** are modules or libraries shared by the Node.js community to solve common problems or add functionality to your applications.
- These packages are stored in the npm registry and can be installed via the npm CLI (Command Line Interface). From UI frameworks to utility libraries, npm hosts millions of packages.
- Main **components** of **npm** include:

  1. **Packages**:
     - **Packages** are reusable js modules or libraries.
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

# Working with `npm`

## Step 1. Add Dependencies To Node.js Project

- To add a new dependency to your **Node.js project**, you can use the `npm install` command followed by the name of the package you want to install. E.g.,
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

## Step 2. Updating Dependencies

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

## Step 3. Running Tasks

- `NPM` also allows you to define and execute scripts in your **Node.js** project.

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

# npm Commands

1. List all local packages

   ```sh
    npm list
   ```

2. List top-level local packages (no nested dependencies)

   ```sh
    npm list --depth=0
   ```

3. List all globally installed packages

   ```sh
    npm list -g
   ```

4. List top-level global packages (no nested dependencies)

   ```sh
    npm list -g --depth=0
   ```

5. Check a specific package's version and dependency details

   ```sh
    npm list <package-name>
   ```

6. List only devDependencies

   ```sh
    npm list --dev
   ```

7. Output the list in JSON format

   ```sh
    npm list --json
   ```

8. List outdated packages and their newer versions

   ```sh
    npm outdated
    # or
    npm outdated --global # List outdated global packages
   ```

9. Clear npm cache to resolve cache-related issues

   ```sh
    npm cache clean --force
   ```

10. Install a package

    ```sh
     npm install <package-name> # Install a package locally
     # or
      npm install -g <package-name> # Install a package globally
    ```

11. Uninstall a package

    ```sh
        npm uninstall <package-name> # Uninstall a local package
        # or
        npm uninstall -g <package-name> # Uninstall a global package
    ```

12. Update packages

    ```sh
        npm update <package-name> # Update a specific package
        # or
        npm update -g <package-name> # Update a global package
    ```

13. Audit Packages

    ```sh
        npm audit # Run security audits on installed packages
    ```

14. Automatically fix vulnerabilities in installed packages
    ```sh
        npm audit fix
    ```

# Resources and Further Reading
