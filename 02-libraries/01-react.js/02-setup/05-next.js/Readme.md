# Next.js

## Table of Contents

# React vs. Next.js

1. **Rendering**
   - React offers Client-side by default
   - Next.js offers Server-side, static, and client-side
2. **Routing**
   - React Requires external library for Routing
   - Next.js has built-in file-based routing
3. **SEO**
   - In React, SEO is quite Challenging without SSR
   - Next.js offers Excellent SEO out of the box
4. **Performance**
   - React has good performance, but requires optimizations
   - Next.js has a great built-in performance optimizations
5. Learning Curve
6. **Flexibility**
   - React has a high Flexibility
   - Next.js offers moderate Flexibility
7. **Backend Integration**
   - React requires a seperate setup
   - Next.js has built-in API routes

# Key Features of Next.js

1. **Server-Side Rendering** (**SSR**): Improve initial load time and SEO.
2. **Static Site Generation** (**SSG**): Pre-render pages for lightning-fast performance.
3. **API Routes**: Build backend functionality within your Next.js app.
4. **App Router**: Intuitive file-based routing system with improved performance.
5. **Image Optimization**: Automatically optimize images for better performance.
6. **Built-in CSS Support**: Use CSS Modules, Sass, and other styling options out of the box.

# Setting up a Next.js Project

## Step 1: Run `create-next-app` Command

- Run the laest version of Next.js by:
  ```sh
    npx create-next-app <app-name>
  ```
- Running the above generates some of the following prompts:

  - `Would you like to use Turbopack for next dev? » No / Yes`
    - This asks whether we want to use **Turbopack** as the development server for Next.js project instead of the default development server (based on **Webpack**).
    - **Turbopack** is a new **bundler and dev server** created by the team behind Next.js.
    - It's designed to be much faster than **Webpack** and other bundlers, especially for large projects.
    - It's written in **Rust**, making it highly efficient and suitable for modern, complex projects.
  - `Would you like to customize the import alias (@/* by default)? » No / Yes`

    - Asks if we want to define a custom import alias for your project instead of using the default alias, which is @/\*.
    - An **import alias** is a shortcut or custom path prefix that simplifies the way you import files in your project. Instead of writing long relative paths like:

      ```javascript
      import MyComponent from "../../components/MyComponent";
      ```

    - You can use an alias to make it cleaner and more maintainable:
      ```javascript
      import MyComponent from "@/components/MyComponent";
      ```
    - If you choose **Yes** and set `~/` as the alias, you can configure it like this in your `tsconfig.json` (or `jsconfig.json`) file:
      ```json
      {
        "compilerOptions": {
          "baseUrl": ".",
          "paths": {
            "~/*": ["./*"]
          }
        }
      }
      ```
    - Now, you can import files using `~` instead of `@`:
      ```javascript
      import MyComponent from "~/components/MyComponent";
      ```

- **Remark**:

  - To run a specific version of **Next.js**, use:
    ```sh
      npx create-next-app@14.1.4 <app-name>
    ```
  - To upgrade to the latest Next.js version, run:

    ```sh
      #using npm
      npm i next@rc react@rc react-dom@rc eslint-config-next@rc

      #using yarn
      yarn add next@rc react@rc react-dom@rc eslint-config-next@rc
    ```

  - **Engine locking**

    - Ensuring consistent **Node.js** versions across environments is essential for predictable functionality in both development and production. Specify the supported **Node.js** version in your `package.json`:
      ```json
        //package.json
        {
        ...
        "engines": {
          "node": ">18.8.x"
        }
        ...
      }
      ```
    - Add a `.npmrc` file next to `package.json`. This `.npmrc` configuration enforces the **Node.js** version specified in `package.json`, preventing incompatible **Node.js** versions from being used.
      ```npmrc
      // npmrc
        engine-strict=true
      ```
    - The `engine-strict` setting tells your package manager to stop with an error on unsupported versions. This looks like:

      ```sh
        ERR_PNPM_UNSUPPORTED_ENGINE  Unsupported environment (bad pnpm and/or Node.js version)

        Your Node version is incompatible with "next@15.0.3(react-dom@19.0.0-rc-66855b96-20241106(react@19.0.0-rc-66855b96-20241106))(react@19.0.0-rc-66855b96-20241106)".

        Expected version: ^18.18.0 || ^19.8.0 || >= 20.0.0
        Got: v18.12.1

        This is happening because the package's manifest has an engines.node field specified.
        To fix this issue, install the required Node version.
      ```

  - **Add Prettier**

    - **Prettier** is an opinionated code formatter that automatically formats our files based on a predefined set of rules.
    - It is only used during development, so I’ll add it as a **devDependency**:
      ```sh
        pnpm add --save-dev --save-exact prettier
      ```
    - Next, create a config file `.prettierrc` with the following content:
      ```prettierrc
      //prettierrc
        {
          "endOfLine": "lf",
          "semi": false,
          "singleQuote": false,
          "tabWidth": 2,
          "trailingComma": "es5"
        }
      ```
    - Next, create a `.prettierignore` file that lists the different directories/files we don’t want prettier to format:
      ```prettierignore
      //prettierignore
        node_modules
        .next
      ```
    - Add the following scripts to format files manually or check formatting status in CI environments:
      ```json
      //package.json
        {
          ...
          "scripts": {
            ...
            // format all files
            "format": "prettier --write .",
            // check if files are formatted, this is useful in CI environments
            "format:check": "prettier --check ."
          },
          ...
        }
      ```
    - You can now run:

      ```sh
        # format files
        pnpm run format

        # check if files are formatted
        pnpm run format:check
      ```

  - **Sorting Imports**
    - Next up, we will be adding `@ianvs/prettier-plugin-sort-imports` to our prettier config , this will allow us to sort import declarations using RegEX order.
    - First, install it as a **devDependency**:
      ```sh
        pnpm add -D @ianvs/prettier-plugin-sort-imports
      ```
    - Then, update your `.prettierrc` file to be as follows:
      ```prettierrc
      //prettierrc
      {
      "endOfLine": "lf",
      "semi": false,
      "singleQuote": false,
      "tabWidth": 2,
      "trailingComma": "es5",
      "plugins": [
        "prettier-plugin-tailwindcss",
        "@ianvs/prettier-plugin-sort-imports"
      ],
      "importOrder": [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^types$",
        "^@/types/(.*)$",
        "^@/config/(.*)$",
        "^@/lib/(.*)$",
        "^@/hooks/(.*)$",
        "^@/components/ui/(.*)$",
        "^@/components/(.*)$",
        "^@/styles/(.*)$",
        "^@/app/(.*)$",
        "",
        "^[./]"
      ],
      "importOrderParserPlugins": ["typescript", "jsx", "decorators-legacy"]
      }
      ```

## Step 2: Run Development Server

- To confirm everything works, you can view your app by running `npm run dev` inside your terminal and navigating to [localhost:3000](http://localhost:3000/) in the browser. Then, make a small change to the code and save it.
- Remark:
  - You can also run:
    ```sh
      npm run dev
      #or
      yarn dev
      #or
      pnpm dev
      #or
      bun dev
    ```
  - We can change the default port of Next.js App from `3000` to any other port by modfying the `package.json` File to add `-p <port_number>` flag.
    ```json
      "scripts": {
      //...
      "dev": "next dev -p 3002",
      "start": "next start -p 3002",
      },
    ```

# Next.js Application Project Structure

- A robust directory structure optimized for large **Next.js** projects:
  1. `app/` directory houses the core logic and routing for your application:
     - `(auth)`: Group authentication-related pages like login and registration.
     - `dashboard`: Contains the dashboard page and layout files.
     - `api`: Includes API routes, enabling serverless functions within your app.
     - `layout.tsx`: Defines the main layout, shared across multiple pages.
     - `page.tsx`: The main entry point, often used for the homepage.
  2. `components/` Reusable Building Blocks
     - `ui`: General UI components like buttons and cards.
     - `forms`: Specific components for handling forms, such as LoginForm.
     - `layouts`: Layout components like headers and footers, ensuring consistent UI across pages.
  3. `lib/` directory contains core functionality and utility functions:
     - `api.ts`: API client setup and functions for interacting with backend services.
     - `utils.ts`: Utility functions used throughout the application.
  4. `hooks/`: Store your custom React hooks in the `hooks/` directory:
     - `useUser.ts`: Manages user-related state and logic.
     - `useAuth.ts`: Handles authentication processes.

# Styling Next.js Applications

- **Next.js** supports different styling options such as:
  1. CSS Modules - useful for styling components.
  2. Bootstrap
  3. Tailwind CSS
  4. global styles - can be used for `CSS` that needs to be loaded by every page. Global styles can be imported into any layout, page, or component inside the `/app` directory.
  5. CSS-in-JS

## 1. Global Styles

- For **Global Styles**:
  - Example:
    ```css
    /* app/global.css */
    body {
      margin: 0 auto;
      max-width: 680px;
      padding: 20px 20px 60px;
    }
    ```
  - Then import the `app/global.css` file into any of the pages
    ```js
    import "./global.css";
    ```

## 2. Styling Next.js App - CSS Modules

- **Next.js** has a built-in support for **CSS Modules** which are identified using the extension, `.module.css`
- E.g., we can create a `header.module.css` with the following structure:

  ```css
  /* header.module.css */
  .speaker {
    font-size: 24px;
  }
  ```

- we can then import the above css module directly into our `page.js` file

  ```js
  import styles from "./header.module.css";

  const Page = () => {
    return (
      <>
        <p className={styles.speaker}>Header</p>
      </>
    );
  };
  ```

## Step 3. Styling Next.js App - Bootstrap

- To use **bootstrap** in **Next.js** App, install specific version by:

  ```sh
      npm install bootstrap@5.1.3
      #or, download a specific version by
      npm i bootstrap@latest
  ```

- Import `bootstrap.css` to the `pages.js` file.
  ```js
  // pages.js
  import "bootstrap/dist/css/bootstrap.css";
  ```
- To include `Bootstrap's` JavaScript in your `Next.js` component, like `Header` Component, we use `useEffect` Hook with

  ```js
  //Header component
  "use client";
  import { useEffect } from "react";
  import styles from "../../../globals.css";

  const Header = () => {
    useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
    }, []);
    return (
      <>
        <header></header>
      </>
    );
  };

  export default Header;
  ```

- **Remarks**:
  - **Next.js** offers code splitting capabilities to improve initial page load performance. This means unnecessary libraries like Bootstrap's JavaScript might not be included initially.
  - The `useEffect` hook allows you to run code after the component has rendered.
  - By using `import("bootstrap/dist/js/bootstrap")`; within the `useEffect` hook with an empty dependency array `([])`, you're dynamically importing Bootstrap's JavaScript only after the component mounts (renders). This ensures it's available for the toggler functionality.

# Icons in Next.js App

## 1. Font Awesome Library

- **Next.js** allows you to import `CSS` directly in `.js` files. It handles optimization and all the necessary Webpack configuration to make this work.

- **Method 1**:

  - Step 1: Install All the Necessary `npm` Packages for FontAwesome
    ```sh
      npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    ```
  - Step 2: And then at the top of the `app.js` file add these lines:
    ```js
    // import Font Awesome CSS
    import "@fortawesome/fontawesome-svg-core/styles.css";
    import { config } from "@fortawesome/fontawesome-svg-core";
    config.autoAddCss = false;
    ```
  - Step 3: Thereafter, you can import & use the rest of the `FontAwesome` icons as React Components like:

    ```js
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

    <FontAwesomeIcon
      icon={faCheck}
      className="fas fa-check"
      style={{ color: "red" }}
    ></FontAwesomeIcon>;
    ```

- **Method 2**:
  - Step 1: Install the package by:
    ```sh
      npm install --save-dev @fortawesome/fontawesome-free
    ```
  - Step 2: Import the following, on the `app.js` file:
    ```js
    // app.js
    import "@fortawesome/fontawesome-free/css/all.min.css";
    ```
  - Step 3: Usage:
    ```js
    const Home = () => {
      return (
        <div>
          <h1>
            <span className="fab fa-twitter fa-2x text-decoration-none"></span>
            Header
          </h1>
        </div>
      );
    };
    ```

# Database

- There are many ways in **Next.js** where we can fetch data. **Next.js** has three unique functions we can use to fetch data for **pre-rendering**:

  1. `getStaticProps` (Static Generation)
  2. `getServerSideProps` (Server-side Rendering)
  3. API Routes

- **Data Fetching Using** `getStaticProps` (**Static Generation**)

  - `getStaticProps` (**Static Generation**): Fetch data at build time. We will use the **Prisma client** to perform queries to our DB.
  - Example:

    ```js
    import { PrismaClient } from "@prisma/client";

    const prisma = new PrismaClient();

    export async function getStaticProps() {
      // Get all foods in the "food" db
      const allfoods = await prisma.food.findMany();

      return {
        props: allFoods,
      };
    }
    ```

  - **Next.js** will perform the query during build time to fetch the data, then we return the results in the `props` object, this will make Next.js pass the results to the `props` of the corresponding component.

- Data Fetching Using `getServerSideProps` (**Server-side Rendering**)

  - `getServerSideProps` (**Server-side Rendering**) Runs when the page is being **pre-rendered** on each request. We can also call the **Prisma client** methods here to fetch data that we want to pass to the Next.js components.
  - Examples:

    ```js
    import { PrismaClient } from "@prisma/client";

    const prisma = new PrismaClient();

    export async function getServerSideProps() {
      // Get all foods in the "food" db
      const allfoods = await prisma.food.findMany();

      return {
        props: allFoods,
      };
    }
    ```

- Data Fetching Using **API Routes**

  - **API routes** in **Next.js** are kept in the `app/api` folder. Each file and folder maps to an API endpoint. They are served under the same URL path as the frontend code, localhost:3000. So as localhost:3000/foods renders the food page, so also localhost:3000/api/getAllFoods is an API endpoint that returns lists of food recipes from the Next.js app.
  - We can make calls to our database via **Prisma** from here. For e.g localhost:3000/api/getAllFoods endpoint can query the database to retrieve all the food recipes and send it as a response:

  ```js
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  import { PrismaClient } from "@prisma/client";

  const prisma = new PrismaClient();

  export default async (req, res) => {
    const data = req.body;
    try {
      const result = await prisma.foods.findMany();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
  };
  ```

## 1. Local Postgres Database with Prisma

- [Prisma](https://www.prisma.io/) is an open-source ORM tool for Node.js and TypeScript, that simplifies connection, querying, migrations, and data modeling to SQL databases.

- Step 1: Install Prisma and it's dependencies

  ```sh
    npm install prisma --save-dev
  ```

- Step 2: Install Prisma Client

  - Before you can access your database from **Next.js** using **Prisma**, you first need to install **Prisma Client** in your app. You can install it via `npm` as follows:

  ```sh
    npm install @prisma/client
  ```

  - Because **Prisma Client** is tailored to your own schema, you need to update it every time your **Prisma schema** file is changing by running the following command:

  ```sh
    npx prisma generate
  ```

- Step 3: **Initialize Prisma**

  ```sh
    npx prisma init
  ```

  - This command will create a `prisma/` folder inside your root project and a `.env` file. The `prisma/` folder will contain a `schema.prisma` file, this is where we declare our Prisma database models.
  - Open the `.env`, we will see it has a `DATABASE_URL`:
    ```env
      #.env
      DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
    ```
  - This is the URL connection to a Postgres database server.

    1. `johndoe` is the name of the database user.
    2. `randompassword` is the password for the database user.
    3. `localhost` is the host of the database.
    4. `5432` is the port number, it is always `5432` by default.
    5. `mydb` is the name of the database you want to connect to. Create this in your Postgres server.

  - **Remark**:
    - Now change them to your own Postgres details.
      ```.env
        DATABASE_URL="postgresql://postgres:0000@localhost:5432/food"
      ```

- **Step 4**: **Setup Prisma Connection to the Database**

  ```prisma
    generator client {
    provider = "prisma-client-js"
  }

  datasource db {
    provider = "postgresql"
    // Uses connection pooling
    url = env("DATABASE_URL")
  }

  model UserProfile {
    id                         String   @id @default(cuid())
    createdAt                  DateTime @default(now())
    updatedAt                  DateTime @updatedAt
    email                      String   @unique
    name                       String   @default("")
    acceptedTermsAndConditions Boolean  @default(false)
  }
  ```

  - Add a `UserProfile` model to it, which has an `email` and a `name` and a boolean whether they accepted your terms and conditions.
  - If you ran `npx prisma init`, rename your `.env` file to `.env.local`, otherwise create it and make sure it contains the credentials for your Prisma database.

  ```env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
  ```

- **Step 5**: **Establish Client Connection**

  - We must establish a [Prisma client](https://www.prisma.io/docs/orm/prisma-client?utm_source=hackmamba&utm_medium=blog&utm_id=HMBcommunity) instance to enable smooth interaction with our database. In the root of our application, create a `lib` folder and a `prisma.js` or `prisma.ts` file with the following snippets:
    ```javascript
    //lib/prisma.js
    import { PrismaClient } from "@prisma/client";
    let prisma;
    if (process.env.NODE_ENV === "production") {
      prisma = new PrismaClient();
    } else {
      if (!global.prisma) {
        global.prisma = new PrismaClient();
      }
      prisma = global.prisma;
    }
    export default prisma;
    ```
  - For **TypeScript** support:

    ```ts
    //lib/prisma.ts

    import { PrismaClient } from "@prisma/client";

    let prisma: PrismaClient;

    if (process.env.NODE_ENV === "production") {
      prisma = new PrismaClient();
    } else {
      if (!global.prisma) {
        global.prisma = new PrismaClient();
      }
      prisma = global.prisma;
    }

    export default prisma;
    ```

  - Now, whenever you need access to your database you can import the `prisma` instance into the file where it's needed.

## 2. Integrate Next.js App with Prisma, and Vercel Postgres

- **Requirements**

  1. [Next.js](https://nextjs.org/) as the React framework
  2. [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for server-side API routes as the backend
  3. [Prisma](https://www.prisma.io/) as the ORM for migrations and database access
  4. [Vercel Postgres](https://vercel.com/storage/postgres) as the database
  5. [NextAuth.js](https://next-auth.js.org/) for authentication via GitHub (OAuth)
  6. [TypeScript](https://www.typescriptlang.org/) or [JavaScript]() as the programming language
  7. [Vercel]() for deployment

- **Prerequisites**

  1. Node.js
  2. A Vercel Account (to set up a free Postgres database and deploy the app)
  3. A GitHub Account (to create an OAuth app)

- **Remarks**: **Vercel CLI**

  - **Vercel** gives you multiple ways to interact with and configure your Vercel Projects. With the command-line interface (CLI) you can interact with the Vercel platform using a terminal, or through an automated system, enabling you to retrieve logs, manage certificates, replicate your deployment environment locally, manage Domain Name System (DNS) records, and more.
  - To download and install **Vercel CLI**, run the following command:
    ```sh
      npm i -g vercel
    ```
  - When there is a new release of Vercel CLI, running any command will show you a message letting you know that an update is available.
  - If you have installed our command-line interface through npm or Yarn, the easiest way to update it is by running the installation command yet again.
    ```sh
      npm i -g vercel@latest
    ```
  - The `--version` option can be used to verify the version of Vercel CLI currently being used.
    ```sh
      vercel --version
    ```

- **Steps**: **Set up your Vercel Postgres database**

  1. Go to the **Storage** tab and click the **Create Database** button.
  2. When the **Browse Storage** modal opens, choose **Postgres** and click **Continue**.

- For creating a new database:

  1. In the dialog box, type `sample_postgres_db` (or a name you prefer) in the Store Name field. Ensure the name has only alphanumeric characters, "\_" or "-", and does not exceed 32 characters.
  2. Choose a region. For lower latency, select a region close to your function region, which is US East by default.
  3. Click **Create**

- Then you’ll need to add `POSTGRES_URL_NON_POOLING` to the datasource in your **Prisma schema**.
  ```prisma
    datasource db {
    provider  = "postgresql"
    // Uses connection pooling
    url       = env("DATABASE_URL")
    // Uses direct connection, ⚠️ make sure to keep this to `POSTGRES_URL_NON_POOLING`
    // or you'll have dangling databases from migrations
    directUrl = env("POSTGRES_URL_NON_POOLING")
  }
  ```
- **Vercel** uses connection poolers, which manage a pool of database connections that can be reused by different parts of an application, rather than establishing a new connection for each database request. The `directUrl` property is used to ensure operations requiring direct database access, such as migrations, can bypass the connection pooler for reliable execution.
- You can get the environment variables for your **Vercel** database by pulling them from Vercel.
  ```sh
    vercel env pull .env
  ```

# Running Next.js with Docker

- When we don’t want to depend on a particular provider like **Vercel** to deploy Next.js application, we may consider bundling our **Next.js**-powered application within a **Docker container**, which offer numerous advantages, like portability and a standardized environment.

- **Step 1**: Start with `Dockerfile`

  - We use a [multi-stage build setup](https://docs.docker.com/build/building/multi-stage/) to build our **Docker image**. This has two main benefits:
    - It helps us to break up our `Dockerfile` into logical steps.
    - Most importantly, it allows for creating a tiny final image by disposing of all the dependencies needed and artifacts created in the steps before the final run stage.
  - First, we create a new `Dockerfile` at the root level of our **Next.js** project and create a new `base` stage:

    ```Dockerfile
      # syntax = docker/dockerfile:1
      FROM node:22-slim AS base

      ARG PORT=3000

      ENV NEXT_TELEMETRY_DISABLED=1

      WORKDIR /app
    ```

  - We’ll use this `base` stage as a starting point for all further stages, so this is the perfect place to configure all the general settings we need for all the other stages.
    - `node:22-slim` is a minimal image, including only Node and `npm`.
    - The default `PORT ARG` can be overwritten when running the container.
    - `NEXT_TELEMETRY_DISABLED=1` prevents **Next.js** from sending telemetry data to Vercel servers.
    - We configure the `WORKDIR` within the container to contain our application files.
  - Now, let’s continue with installing all the necessary dependencies in the next stage of our `Dockerfile`:

    ```Dockerfile
      # ...

      FROM base AS dependencies

      COPY package.json package-lock.json ./
      RUN npm ci
    ```

  - We use our `base` stage as a starting point for this stage. By copying only `package.json` and `package-lock.json` before running `npm ci`, we ensure that **Docker** can efficiently cache the build process and only run `npm ci` of one of those two files, but not any other file has changed.
  - Using 'clean install' (`npm ci`) instead of 'install' (`npm i`) is a good practice for **Docker images**. It will ensure that the dependencies are installed from the `package-lock.json` file and not from the `node_modules` cache. This is faster than 'install', which is especially important for CI/CD pipelines where you want to keep the build time as short as possible.

    ```Dockerfile
      # ...

      FROM base AS build

      COPY --from=dependencies /app/node_modules ./node_modules
      COPY . .

      # Public build-time environment variables
      ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

      RUN npm run build
    ```

  - For the `build` stage, we first `COPY` the dependencies we’ve installed previously and then also `COPY` our source code from the project root directory into the container. If we need any public environment variables at build time, we must specify them here as ARG’s and later pass them to the `docker build` command.
  - The last step in this stage is to run `npm run build`. After that, we’re ready to run our **Next.js** application:

    ```Dockerfile
      # ...

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

  - First, we set the `NODE_ENV` to `production` because this is our target environment for this **Docker image**. After setting the `PORT` to whatever we pass in as `PORT ARG`, we create a new user and group, which we’ll use to run the Next.js Node.js process. This ensures that the Node.js process can only access the bar minimum data inside the container, which means a potential attacker can not do too much harm.
  - After creating a new `.next` directory and setting its permissions, we `COPY` only the necessary files from the build stage. Note that we `COPY` a `/app/.next/standalone` directory. To make the **Next.js** build script generate this Docker-optimized standalone build, we need to update our `next.config.mjs` file:

    ```mjs
    // next.config.mjs
    const nextConfig = {
      output: "standalone",
    };

    export default nextConfig;
    ```

  - or,
    ```javascript
    //next.config.js
    const config = {
      reactStrictMode: true,
      output: "standalone",
      // ...
    };
    ```
  - Finally, we can change to the newly created `nextjs` user, expose the PORT we’ve configured earlier, and start the Node.js server.
  - Here is the complete `Dockerfile`:

    ```Dockerfile
      # syntax = docker/dockerfile:1

      FROM node:22-slim AS base

      ARG PORT=3000

      ENV NEXT_TELEMETRY_DISABLED=1

      WORKDIR /app

      # Dependencies
      FROM base AS dependencies

      COPY package.json package-lock.json ./
      RUN npm ci

      # Build
      FROM base AS build

      COPY --from=dependencies /app/node_modules ./node_modules
      COPY . .

      # Public build-time environment variables
      ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

      RUN npm run build

      # Run
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

- **Step 2**: Exclude Files With `.dockerignore`

  - To ensure that we don’t copy any unnecessary files into our **Docker container**, which can lead to longer build times, fewer cache hits, and potentially even security risks, we create a new `.dockerignore` file and exclude everything that’s not needed to build and run our application:
    ```dockerignore
      Dockerfile
      .dockerignore
      node_modules
      npm-debug.log
      README.md
      .env*
      .next
      .git
      .gitignore
      # Add more files and directories according to your porject needs
    ```

- **Step 3**: Building and Running the **Next.js Docker Image**
  - To build the Docker image, navigate to your project’s root directory in the terminal and run the following command:
    ```sh
      docker build -t my-app .
    ```
  - This command tells **Docker** to build an image based on the `Dockerfile` in the current directory `.` and tag it with the name `my-app`.
  - If you have any build-time environment variables, you can pass them using the `--build-arg` flag:
    ```sh
      docker build -t my-app --build-arg NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key_here .
    ```

# Running Next.js Using Docker Compose

- To streamline the process of running our **Next.js Docker image** locally, we can use `docker compose`, which enables us to specify all the parameters and settings necessary to build and run our Docker container in a single `docker-compose.yml` file.
  ```yml
  version: "3"
  services:
    my-app:
      build:
        context: .
        args:
          - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      ports:
        - "3000:3000"
      environment:
        - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
  ```
- This configuration tells **Docker** to build the image using the `Dockerfile` in the current directory, map port `3000` from the container to port `3000` on the host machine, and set some environment variables.

  ```sh
    docker compose up
  ```

# GitHub Actions

- It’s good practice to run your app with CI/CD
- Add a secret for your database URL to your [repository’s settings in GitHub](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).
  ```sh
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/testdb"
  ```
- Then create your GitHub Actions YAML configuration in a `.github/workflows/pull-request.yml` file for a comprehensive CI/CD pipeline including linting, type checking, testing, and more.

  ```yml
    name: Pull Request

  on: [pull_request]

  jobs:
    lint:
      name: ⬣ ESLint
      runs-on: ubuntu-latest
      steps:
        - name: ⬇️ Checkout repo
          uses: actions/checkout@v3

        - name: ⎔ Setup node
          uses: actions/setup-node@v3
          with:
            node-version: 20

        - name: 📥 Download deps
          uses: bahmutov/npm-install@v1

        - name: 🔬 Lint
          run: npm run lint

    type-check:
      name: ʦ TypeScript
      runs-on: ubuntu-latest
      steps:
        - name: ⬇️ Checkout repo
          uses: actions/checkout@v3

        - name: ⎔ Setup node
          uses: actions/setup-node@v3
          with:
            node-version: 20

        - name: 📥 Download deps
          uses: bahmutov/npm-install@v1

        - name: 🔎 Type check
          run: npm run type-check --if-present

    commitlint:
      name: ⚙️ commitlint
      runs-on: ubuntu-latest
      if: github.actor != 'dependabot[bot]'
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      steps:
        - name: ⬇️ Checkout repo
          uses: actions/checkout@v3
          with:
            fetch-depth: 0
        - name: ⚙️ commitlint
          uses: wagoid/commitlint-github-action@v4

    vitest:
      name: ⚡ Vitest
      runs-on: ubuntu-latest
      services:
        postgres:
          image: postgres:12
          env:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: postgres
            POSTGRES_DB: testdb
          ports:
            - 5432:5432
      steps:
        - name: ⬇️ Checkout repo
          uses: actions/checkout@v3

        - name: ⎔ Setup node
          uses: actions/setup-node@v3
          with:
            node-version: 20

        - name: 📥 Download deps
          uses: bahmutov/npm-install@v1

        - name: 🛠 Setup Database
          run: npm run prisma:wipe
          env:
            DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb

        - name: ⚡ Run vitest
          run: npm run test -- --coverage
          env:
            DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb

    playwright:
      name: 🎭 Playwright
      runs-on: ubuntu-latest
      services:
        postgres:
          image: postgres:12
          env:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: postgres
            POSTGRES_DB: testdb
          ports:
            - 5432:5432
      steps:
        - name: ⬇️ Checkout repo
          uses: actions/checkout@v3

        - name: ⎔ Setup node
          uses: actions/setup-node@v3
          with:
            node-version: 20

        - name: 📥 Download deps
          uses: bahmutov/npm-install@v1

        - name: 🌐 Install Playwright Browsers
          run: npx playwright install --with-deps

        - name: 🛠 Setup Database
          run: npm run prisma:wipe
          env:
            DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb

        - name: 🎭 Playwright Run
          run: npx playwright test
          env:
            DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb

        - name: 📸 Playwright Screenshots
          uses: actions/upload-artifact@v4
          if: failure()
          with:
            name: playwright-report
            path: playwright-report/
            retention-days: 30
  ```

- Now every time you make a pull request to your app, it automatically runs your tests to ensure it works, runs TypeScript type checks and lints it, so that everyone contributes code with the same formatting.

# Deploy Next.js App

## Deploy Next.js App in Vercel Platform

- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- Step : **Set Up Speed Insights**

  - To start collecting **performance insights**, run the following command
    ```sh
      npm i @vercel/speed-insights
    ```
  - Import and use the `<SpeedInsights/>` Next.js component into your app's `layout.js` file.
    ```javascript
    import { SpeedInsights } from "@vercel/speed-insights/next";
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode,
    }) {
      return (
        <html lang="en">
          <head>
            <title>Next.js</title>
          </head>
          <body>
            {children}
            <SpeedInsights />
          </body>
        </html>
      );
    }
    ```
  - Deploy your changes and visit the deployment to collect your first data points. If you don't see data after a 30 seconds, please check for content blockers and try to navigate between pages on your site.

- Step : **Set Up Web Analytics**

  - To start counting visitors and page views, follow these steps.
  - Start by installing `@vercel/analytics` in your existing project.
    ```sh
      npm i @vercel/analytics
    ```
  - The **Analytics component** is a wrapper around the tracking script, offering more seamless integration with **Next.js**.
  - Import and use the `<Analytics/>` React component into your app's layout.

    ```javascript
    import { Trirong } from "next/font/google";
    import { SpeedInsights } from "@vercel/speed-insights/next";
    import { Analytics } from "@vercel/analytics/react";

    const trirong = Trirong({ subsets: ["latin"], weight: ["400"] });

    export const metadata = {
      title: "Create Next App",
      description: "Generated by create next app",
    };

    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body className={trirong.className}>
            {children}
            <SpeedInsights />
            <Analytics />
          </body>
        </html>
      );
    }
    ```

  - Deploy your changes and visit the deployment to collect your page views.

# Sending Emails with `nodemailer` in Next.js

- How to seamlessly incorporate email sending capabilities into Next.js applications
- Step 1: Gmail Account Configurations

  - In order to utilize this service, you will have to enable **2-Step Verification** in your **Google** account.
  - After enabling 2-Step Verification Go to the Link: https://myaccount.google.com/apppasswords in your browser and generate a password for your new app

- Step 2: Install Dependencies

  - Install required dependencies by:
    ```sh
      npm i nodemailer dotenv
    ```

# Resources and Further Reading

1. [the Next.js GitHub repository](https://github.com/vercel/next.js/)
2. [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
3. [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
4. [Next.js deployment documentation](https://nextjs.org/docs/deployment)
5. [Add the `SpeedInsights` component to your app](https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app)
6. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
7. [medium - How to Set Up Next.js 15 for Production in 2024](https://medium.com/@jan.hesters/how-to-set-up-next-js-15-for-production-in-2024-347f542922b4)
8. [Medium - Sending Emails with Nodemailer in Next.js 2023: A Complete Guide to Integrating Gmail Mailer for Enhanced Communication](https://blog.devgenius.io/sending-emails-with-nodemailer-in-next-js-ccada06abfc9)
9. [Running Next.js with Docker](https://markus.oberlehner.net/blog/running-nextjs-with-docker/?ref=dailydev)
10. [daily.dev - Setting up a Next.js Project with Essential Best practices](https://ouassim.tech/notes/setting-up-a-nextjs-project-with-essential-best-practices/?ref=dailydev)
