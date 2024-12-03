# Node.js Development Environment

## Table Of Contents

# Setup Node.js Development Environment

## Step 1. Requirements

- Install `Node.js` from [nodejs.org](https://nodejs.org/en/)

- use CLI if the installation is successful
  ```sh
      # for node.js
      node -v
      # for npm
      npm -v
  ```

## Step 2. Create Development Folder and Initialize It

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

## Step 3. Install dependencies

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

## Step 3. Dockerize The Application

# Node.js Project Structure

## 1. The Old Way of a Node.js Project Structure - Model-View-Controller (MVC)

- As the name says, you structure your application into 3 main folders - `models`, `controllers`, and `views`.
- Here you structure and separate your folders by their **technical responsibility**.
- /src

  - models
    - user.js
    - paymentProfile.js
    - ...
  - controllers
    - user.js
    - paymentProfile.js
    - ...
  - views
    - user.js
  - ...

- Where:

  - **Models’s** `user.js` is responsible for fetching data from the Database and/or some other ORM/DB stuff.
  - **Controller’s** `user.js` is responsible for handling HTTP requests, responses, or business logic.
  - **Views’s** `user.js` is responsible for visualizing responses and data.

- The Downsides of **MVC** and Technical Responsibility Separation
  - After some time, it’s getting **hard to navigate through the codebase** and find a particular functionality.
  - Looking into the different models doesn’t tell you anything about their relation and structure.
  - Controllers invite developers to dump all the logic into controllers is a recipe for a disaster.
  - With this approach is hard to achieve a good elasticity and maintainability of the system.

## 2. Domain Responsibility Separation

- Another way to look at your application’s structure is by the **domain perspective**. Each folder represents a domain that’s part of the business. For example, **user management**, **product management**, etc.
- This way, the structure of the applications resembles the way the business operates and its different domains/areas.
- It’s more intuitive because it’s closer to the real-world problems we solve as software developers.
- Start with the **Modular Monolith Architecture**
  - In recent years, developers have favored the **Microservices Architecture** and while it provides benefits like better **scalability**, **independence**, etc., it comes with a cost - **complexity**.
  - The other way of designing your application is the **Modular Monolith Approach**.
  - You can easily migrate from a **Modular Monolith Architecture** to a **Microservices Architecture** later because each module/domain is separated and isolated.
  - For example, each module folder could go into a separate Microservice very easily.
    - /src
      - account
        - userQueries.js
        - userMutations.js
        - userServices.js
        - ...
        - index.js
      - billing
        - paymentProfileQueries.js
        - paymentProfileMutations.js
        - paymentProfileServices.js
        - ...
        - index.js
      - ...

# Resources

1. [How to better structure your next Node.js project? The Modular Monolith Approach.](https://thetshaped.dev/p/how-to-better-structure-your-nodejs-project-modular-monolith?ref=dailydev)
