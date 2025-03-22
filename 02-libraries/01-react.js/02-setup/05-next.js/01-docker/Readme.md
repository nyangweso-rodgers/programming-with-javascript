# Running Next.js with Docker

## Table of Contents

# Running Next.js with Docker

1. **Step 1**: The `Dockerfile`

   - We use a [multi-stage build setup](https://docs.docker.com/build/building/multi-stage/) to build our Docker image. This has two main benefits. For once, it helps us to break up `Dockerfile` into logical steps, and second, most importantly, it allows for creating a tiny final image by disposing of all the dependencies needed and artifacts created in the steps before the final run stage.
   - First, create a new `Dockerfile` at the root level of **Next.js** project and create a new base stage:

     ```Dockerfile
        # syntax = docker/dockerfile:1

        # Step 1
        FROM node:22-slim AS base

        ARG PORT=3000

        ENV NEXT_TELEMETRY_DISABLED=1

        WORKDIR /app

        # Step 2
        FROM base AS dependencies
        COPY package.json package-lock.json ./
        RUN npm ci

        # Step 3
        FROM base AS build

        COPY --from=dependencies /app/node_modules ./node_modules
        COPY . .

        # Public build-time environment variables
        ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
        ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

        RUN npm run build

        # Step 4
        FROM base AS run

        ENV NODE_ENV=production
        ENV PORT=$PORT

        RUN addgroup --system --gid 1001 nodejs
        RUN adduser --system --uid 1001 nextjs
        RUN mkdir .next
        RUN chown nextjs:nodejs .next

        COPY --from=build /app/public ./public
        COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
        COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

        USER nextjs

        EXPOSE $PORT

        ENV HOSTNAME="0.0.0.0"
        CMD ["node", "server.js"]
     ```

     - We’ll use this `base` stage as a starting point for all further stages, so this is the perfect place to configure all the general settings we need for all the other stages.
       - `node:22-slim` is a minimal image, including only **Node** and `npm`.
       - The default `PORT ARG` can be overwritten when running the container.
       - `NEXT_TELEMETRY_DISABLED=1` prevents **Next.js** from sending telemetry data to **Vercel servers**.
       - We configure the `WORKDIR` within the container to contain our application files.
     - We use our `base` stage as a starting point for this stage. By copying only `package.json` and `package-lock.json` before running `npm ci`, we ensure that Docker can efficiently cache the build process and only run `npm ci` of one of those two files, but not any other file has changed.
     - For the `build` stage, we first COPY the dependencies we’ve installed previously and then also COPY our source code from the project root directory into the container. If we need any public environment variables at build time, we must specify them here as ARG’s and later pass them to the docker build command.
     - Step 4:

       - First, we set the `NODE_ENV` to `production` because this is our target environment for this Docker image. After setting the `PORT` to whatever we pass in as `PORT ARG`, we create a new user and group, which we’ll use to run the Next.js Node.js process. This ensures that the Node.js process can only access the bar minimum data inside the container, which means a potential attacker can not do too much harm.
       - After creating a new `.next` directory and setting its permissions, we `COPY` only the necessary files from the build stage. Note that we `COPY` a `/app/.next/standalone` directory. To make the **Next.js** build script generate this Docker-optimized standalone build, we need to update our `next.config.mjs` file:

         ```mjs
         // next.config.mjs
         const nextConfig = {
           output: "standalone",
         };

         export default nextConfig;
         ```

2. **Step 2**: Exclude Files With `.dockerignore`

   - To ensure that we don’t copy any unnecessary files into our Docker container, which can lead to longer build times, fewer cache hits, and potentially even security risks, we create a new `.dockerignore` file and exclude everything that’s not needed to build and run our application:
     ```dockerignore
        Dockerfile
        .dockerignore
        node_modules
        npm-debug.log
        README.md
        .env*
        .next
        .git
        # Add more files and directories according to your porject needs
     ```

3. **Step 3**: **Building and Running the Next.js Docker Image**
   - To build the Docker image, navigate to your project’s root directory in the terminal and run the following command:
     ```sh
        docker build -t <app-name> .
     ```
   - This command tells Docker to build an image based on the `Dockerfile` in the current directory . and tag it with the name `<app-name>`.
   - If you have any build-time environment variables, you can pass them using the `--build-arg` flag:
     ```sh
        docker build -t <app-name> --build-arg NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key_here .
     ```

# Running Next.js Using Docker Compose

- **docker compose** enables us to specify all the parameters and settings necessary to build and run our Docker container in a single `docker-compose.yml` file.

  ```yml
  version: "3"
  services:
  <app-name>:
    build:
    context: .
    args:
      - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    ports:
      - "3000:3000"
    environment:
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
  ```

- This configuration tells **Docker** to build the image using the `Dockerfile` in the current directory, map port `3000` from the container to port 3000 on the host machine, and set some environment variables.
  ```sh
    docker compose up
  ```

# Resources and Further Reading

1. [markus.oberlehner.net - Running Next.js with Docker](https://markus.oberlehner.net/blog/running-nextjs-with-docker?ref=dailydev)
