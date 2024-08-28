# Setting Up Express.js Development Environment

## Table Of Contents

# Description

- Learn how to setup an Express application with MongoDB Atlas, or MongoDB docker container, or with PostgreSQL Docker container.

# Dockerize Express.js App

- Create a `Dockerfile` with the following:

  ```Dockerfile
    FROM node:alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    #CMD ["npm","run", "dev"]
    CMD ['node', 'server.js']
  ```

- Where:
  - `FROM node:alpine` is a `Dockerfile` instruction that specifies the base image for building **Docker image**. In this case, it indicates that we're using the official **Node.js Docker image** with the **Alpine Linux distribution** as its base. By using `node:alpine` as the base image, you get a minimal Node.js environment, which is suitable for running Node.js applications like Express.js servers in Docker containers. It includes Node.js itself and a few essential tools and libraries, but it's designed to be lightweight, which helps keep your Docker images small and efficient.
  - The line `WORKDIR /app` in the `Dockerfile` sets the working directory for any subsequent instructions in the `Dockerfile`. In this case, `WORKDIR /app` is setting the working directory inside the Docker container to `/app`. This means that when you later use commands like `COPY`, `RUN`, or `CMD` in your `Dockerfile`, they will be executed relative to the `/app` directory within the container. Setting a working directory is helpful for organizing a `Dockerfile` and ensuring that commands operate in the correct context within the container. In many cases, you'll see `/app` used as the working directory because it's a common convention for storing application code within Docker containers. However, you can choose any directory structure that makes sense for your specific application.
  - It then copies the `package.json` and `package-lock.json` files, installs the dependencies, copies the rest of the application files.
  - The `RUN npm install` command is used to install Node.js dependencies for your project within the Docker image.
  - The `CMD ['node', 'server.js']` instruction in a Dockerfile specifies the default command that should be executed when a container based on the Docker image is launched.

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [mongoose.com - Schemas](https://mongoosejs.com/docs/guide.html)
