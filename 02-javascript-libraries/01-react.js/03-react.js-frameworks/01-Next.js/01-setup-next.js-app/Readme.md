# How To Set and Run Next.js App

## Table Of Contents

# `Next.js` vs. `create-react-app` Toolchains

- `create-react-app` does not easily help with generating server-side rendered apps.
- `Next.js` comes with speed, and SEO.

# Next.js Application Project Structure

- A robust directory structure optimized for large Next.js projects:
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

# Setup

## Step 1: Run `npx create-next-app@latest <app-name>` Command

- Run the laest version of Next.js by:
  ```sh
    npx create-next-app <app-name>
  ```
- **Remark**:

  - To run a specific version of Next.js, use:
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

- This stp should generate the below folder Structure:
  1. node_modules/
  2. public/
  3. src/app/
  4. package.json
  5. package-lock.json
  6. jsconfig.json
  7. .estlintrc.json
  8. .gitignore
- Remark
  - With **Next.js 13**, the file-based routing can be done from the `src/app` folder. Previously, the routing was done from the `pages/` folder instead.
  - The `app/` directory in Next.js comes with a lot of **features** such as:
    1. Layout
    2. Routing
    3. Font Usage
    4. Loading Component
    5. Error Component
    6. Not Found Component
    7. Template Component
    8. Server Component

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

## Step 3: Styling Next.js App

- Next.js supports different styling options such as:
  1. CSS Modules - useful for styling components.
  2. Bootstrap
  3. Tailwind CSS
  4. global styles - can be used for `CSS` that needs to be loaded by every page. Global styles can be imported into any layout, page, or component inside the `/app` directory.
  5. CSS-in-JS
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

### Step 3.1: CSS Module

- Next.js has a built-in support for **CSS Modules** which are identified using the extension, `.module.css`
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

### Step 3.2: Bootstrap

- To use **bootstrap** in `Next.js` App, install specific version by:

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

## Step 4: Icons

### Step 4.1: Font Awesome Library

- `Next.js` allows you to import `CSS` directly in `.js` files. It handles optimization and all the necessary Webpack configuration to make this work.
- Method 1:

  - Step #1: Install All the Necessary `npm` Packages for FontAwesome
    ```sh
      npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
    ```
  - Step #2: And then at the top of the `app.js` file add these lines:
    ```js
    // import Font Awesome CSS
    import "@fortawesome/fontawesome-svg-core/styles.css";
    import { config } from "@fortawesome/fontawesome-svg-core";
    config.autoAddCss = false;
    ```
  - Step #3: Thereafter, you can import & use the rest of the `FontAwesome` icons as React Components like:

    ```js
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

    <FontAwesomeIcon
      icon={faCheck}
      className="fas fa-check"
      style={{ color: "red" }}
    ></FontAwesomeIcon>;
    ```

- Method #2:
  - Step #1: Install the package by:
    ```sh
      npm install --save-dev @fortawesome/fontawesome-free
    ```
  - Step #2: Import the following, on the `app.js` file:
    ```js
    // app.js
    import "@fortawesome/fontawesome-free/css/all.min.css";
    ```
  - Step #3: Usage:
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
- Method #3:
  - you can also use the [react-fontawesome](https://www.npmjs.com/package/react-fontawesome) icon library.
    ```sh
      # From the NPM page, just install via npm
      npm install --save react-fontawesome
    ```

## Step 5: Deploy Next.js App

- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Step 6: Set Up Speed Insights

- To start collecting **performance insights**, run the following command

```sh
  npm i @vercel/speed-insights
```

- Import and use the `<SpeedInsights/>` Next.js component into your app's `layout.js` file.
  ```js
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

## Step 7: Set Up Web Analytics

- To start counting visitors and page views, follow these steps.
- Step #1: Start by installing `@vercel/analytics` in your existing project.
  ```sh
    npm i @vercel/analytics
  ```
  - The Analytics component is a wrapper around the tracking script, offering more seamless integration with Next.js.
- Step #2: Add the React component

  - Import and use the `<Analytics/>` React component into your app's layout.

    ```js
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

## Step 8: Prisma and Next.js

- [Prisma](https://www.prisma.io/) is an open-source ORM tool for Node.js and TypeScript, that simplifies connection, querying, migrations, and data modeling to SQL databases.
- There are many ways in Next.js where we can fetch data. Next.js has three unique functions we can use to fetch data for pre-rendering:
  1. `getStaticProps` (Static Generation)
  2. `getServerSideProps` (Server-side Rendering)
  3. API Routes

### Step 8.1: `getStaticProps` (Static Generation)

- `getStaticProps` (**Static Generation**): Fetch data at build time. We will use the **Prisma client** to perform queries to our DB.
- Example:

  - Example 1:

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

  - Next.js will perform the query during build time to fetch the data, then we return the results in the `props` object, this will make Next.js pass the results to the `props` of the corresponding component.

### Step 8.2: `getServerSideProps` (Server-side Rendering)

- `getServerSideProps` (**Server-side Rendering**) Runs when the page is being **pre-rendered** on each request. We can also call the **Prisma client** methods here to fetch data that we want to pass to the Next.js components.
- Examples:

  - Example 1:

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

### Step 8.3: API Routes

- **API routes** in Next.js are kept in the `app/api` folder. Each file and folder maps to an API endpoint. They are served under the same URL path as the frontend code, localhost:3000. So as localhost:3000/foods renders the food page, so also localhost:3000/api/getAllFoods is an API endpoint that returns lists of food recipes from the Next.js app.
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

### Step 8.4: Prisma Setup

#### 8.4.1: Install `prisma` Dependencies

- Start by installing the Prisma CLI via npm:
  ```sh
    npm install prisma --save-dev
  ```

#### 8.4.2: Prisma Initialization

- Run the below command:
  ```sh
    npx prisma init
  ```
- This command will create a `prisma/` folder inside your root project and a `.env` file. The `prisma/` folder will contain a `schema.prisma` file, this is where we declare our Prisma database models.

#### 8.4.3: Setup Prisma Connection to the Database

- Open the `.env`, we will see it has a `DATABASE_URL`:
  ```env
    #.env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
  ```
- This is the URL connection to a Postgres database server.
  1. johndoe is the name of the database user.
  2. randompassword is the password for the database user.
  3. localhost is the host of the database.
  4. 5432 is the port number, it is always 5432 by default.
  5. mydb is the name of the database you want to connect to. Create this in your Postgres server.
- Remark:
  - Now change them to your own Postgres details.
    ```.env
      DATABASE_URL="postgresql://postgres:0000@localhost:5432/food"
    ```

#### 8.4.4: Define Model

- Add model definition to the `schema.prisma` file.
- Examples

  - Add the following **model definitions** to your `schema.prisma` so that it looks like this:

    ```prisma
      // schema.prisma
      generator client {
        provider = "prisma-client-js"
      }

      datasource db {
        provider = "postgresql"
        url = env("POSTGRES_PRISMA_URL") // uses connection pooling
        directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
      }

      model Post {
        id        String     @default(cuid()) @id
        title     String
        content   String?
        published Boolean @default(false)
        author    User?   @relation(fields: [authorId], references: [id])
        authorId  String?
      }

      model User {
        id            String       @default(cuid()) @id
        name          String?
        email         String?   @unique
        createdAt     DateTime  @default(now()) @map(name: "created_at")
        updatedAt     DateTime  @updatedAt @map(name: "updated_at")
        posts         Post[]
        @@map(name: "users")
      }
    ```

  - This **Prisma schema** defines two models, each of which will map to a table in the underlying database: `User` and `Post`. Notice that there's also a relation (one-to-many) between the two models, via the `author` field on `Post` and the `posts` field on `User`.

#### 8.4.5: Run Migrations

- Running migrations, will create an SQL migration file for the current schema, and run the migrations against the database. Migrations run whenever we update the schema. Migrations are just SQL commands that are generated based on what was performed on the schema. If we create a new Model in the schema, the migrations will create an SQL command to create a table, eg:

  ```sql
    -- CreateTable
    CREATE TABLE "newTable" (
        "id" SERIAL NOT NULL,
        "name" TEXT,

        PRIMARY KEY ("id")
    );
  ```

- This SQL command will then be executed to create the table in the database. That's the summary of running migrations. So whenever you hear of migrations, bear in mind that this is what is being done.
- Now, we run the below command to run migrations on our Postgres database:
  ```sh
    npx prisma migrate dev --name init
  ```
- This command will generate the migrations file and run them against your db. The `--name` sub-arg sets the name of the **migration**. The value which is `init` will be the name of the migrations folder generated. The output is: `{NUMBER_GENERATED_BY_PRISMA}_init`. So this will generate a folder/file inside the `prisma/migrations` folder. A new folder with a `migration.sql` SQL file will be generated for each migration run. In my machine the command generated this:

## Step 8: Setup Prisma and create the database schema

-

- At this stage, the **Prisma studio** is the fastest way to create data; to launch the studio and add data, run the following command:
  ```sh
    npx prisma studio
  ```
  - The studio will launch at http://localhost:5555/
- To actually create the tables in your database, you now can use the following command of the Prisma CLI:
  ```sh
    npx prisma db push
  ```
- You should see the following output:

  ```sh
    Environment variables loaded from /Users/nikolasburk/Desktop/nextjs-guide/blogr-starter/.env.development.local
    Prisma schema loaded from prisma/schema.prisma

    Your database is now in sync with your schema. Done in 2.10s
  ```

### Step 8.2: Fetching and reading data from database

- We must establish a [Prisma client](https://www.prisma.io/docs/orm/prisma-client?utm_source=hackmamba&utm_medium=blog&utm_id=HMBcommunity) instance to enable smooth interaction with our database. In the root of our application, create a `lib` folder and a `prisma.js` or `prisma.ts` file with the following snippets:
  ```js
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

### Step 8.1: Install and generate Prisma Client

- Before you can access your database from Next.js using **Prisma**, you first need to install **Prisma Client** in your app. You can install it via `npm` as follows:
  ```sh
    npm install @prisma/client
  ```
- Because **Prisma Client** is tailored to your own schema, you need to update it every time your **Prisma schema** file is changing by running the following command:
  ```sh
    npx prisma generate
  ```
- You'll use a single `PrismaClient` instance that you can import into any file where it's needed. The instance will be created in a `prisma.ts` file inside the `lib/` directory. Go ahead and create the missing directory and file:
  ```sh
    mkdir lib && touch lib/prisma.ts
  ```
- Now, add the following code to this file:

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

## Step 9: Adding authentication with `Auth.js`

- `Auth.js` is an open source project created by Vercel. With Auth.js we can integrate many different providers into our applications, giving us the power to use them to log in and out.

## Step 10: Configure `Next.js` to work with Docker

- According to [Next.js documentation](), `Next.js` can automatically create a standalone folder that copies only the necessary files for a production deployment including select files in `node_modules`.
- To reduce image size we need to add `output: "standalone"` in the `next.config.js` file.
  ```javascript
  //next.config.js
  const config = {
    reactStrictMode: true,
    output: "standalone",
    // ...
  };
  ```
- Add `.dockerignore` file at the root of the project directory to exclude unnecessary files from the **Docker image**.
  ```dockerignore
    .env
    Dockerfile
    .dockerignore
    .next
    .git
    .gitignore
    node_modules
    npm-debug.log
    README.md
  ```
- Create a `Dockerfile` for `Next.js` application:

  ```Dockerfile
    FROM node:18-alpine

    COPY ../package.json ../package-lock.json ./app

    WORKDIR /app

    RUN npm ci

    CMD ["npm", "run", "dev"]
  ```

  - Here,
    - We are uing the `node:18-alpine` image as a base image. It is a lightweight image that contains `Node.js 18` and `npm`.
    - Using 'clean install' (`npm ci`) instead of 'install' (`npm i`) is a good practice for **Docker images**. It will ensure that the dependencies are installed from the `package-lock.json` file and not from the `node_modules` cache. This is faster than 'install', which is especially important for CI/CD pipelines where you want to keep the build time as short as possible.

- Create a `docker-compose.yml` file.
  - `docker-component.yml` file is used to define and run multi-container Docker applications with a single command `docker-compose up`.
    ```yml
    #docker-compose.yml
    version: "3"
    services:
      my-app:
        container_name: next.js-app
        build:
          context: .
          dockerfile: Dockerfile
        ports:
          - 3001: 3001
        environment:
        depends_on:
          - db
        volumes:
          - ./my-app/src/:app/src
          - ./my-app/public:/app/public
      db:
        image: postgres:15.3
        container_name: postgres
        ports:
          - 5432:5432
        environment:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: myapp-db
        volumes:
          - postgres-data:/var/lib/postgresql/data
    volumes:
      postgres-data:
    ```
- Run the application by `docker-compose up`

# Resources and Further Reading

1. [the Next.js GitHub repository](https://github.com/vercel/next.js/)
2. [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
3. [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
4. [Next.js deployment documentation](https://nextjs.org/docs/deployment)
5. [Add the `SpeedInsights` component to your app](https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app)
6. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
