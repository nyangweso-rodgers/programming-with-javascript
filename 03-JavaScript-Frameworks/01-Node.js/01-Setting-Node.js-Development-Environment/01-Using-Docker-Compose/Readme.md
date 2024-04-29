# Settig Up Node.js Development Environment with Docker Compose

## Table of Contents

# What is Docker Compose?

- **Docker Compose** is a very powerful tool that’s used to manage multiple containers, called services, with a single file.

# Requirements

## Requirement #1: Node.js

- Install `Node.js` from [nodejs.org](https://nodejs.org/en/)

- use CLI if the installation is successful
  ```sh
      # for node.js
      node -v
      # for npm
      npm -v
  ```

## Requirement #2: Docker

# Setup

## Step #1: Create Development Folder and Initialize It

- Create a project folder, e.g., `to-do-app` and cd into it.
  ```sh
      mkdir node.js-app
      cd node.js-app
  ```
- Initialize the Node.js application using `npm`
  ```sh
      npm init -y
  ```
- This will generate `package.json` file with default settings. When using `ES6`, edit `package.json` file to add the following:
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

## Step #2: Install dependencies

- Install necessary packages for the project, including `express`

  ```sh
    npm i express mongoose dotenv
  ```

  - `express` is for building the web server
  - `dotenv` is for loading environment variables from a `.env` file.
  - `mongoose`: An ODM (Object Data Modeling) library for MongoDB.

- Install optional `dev-dependencies` (used for development purposes) include:
  ```sh
    #install dev-dependencies
    npm i nodemon morgan --save-dev
  ```
  - `nodemon`: this is a utility that monitors for changes in your source code files and automatically restarts the `Node.js` application when changes are detected.
  - `morgan`: provides requests details made. , it logs each request in the CLI. You will be able to see some information about the request.

# Resources and Further Reading
