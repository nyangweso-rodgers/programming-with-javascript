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

# Steps

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

## 1. Postgres Database

- [Prisma](https://www.prisma.io/) is an open-source ORM tool for Node.js and TypeScript, that simplifies connection, querying, migrations, and data modeling to SQL databases.
- There are many ways in Next.js where we can fetch data. Next.js has three unique functions we can use to fetch data for pre-rendering:
  1. `getStaticProps` (Static Generation)
  2. `getServerSideProps` (Server-side Rendering)
  3. API Routes
- Using [Prisma ORM](https://www.prisma.io/) to abstract away the database layer.
- Step :
  ```sh
    npm install prisma --save-dev
  ```
- Step : Install Prisma Client
  ```sh
    npm install @prisma/client
  ```
- Step : Initialize Prisma

  ```sh
    npx prisma init
  ```

  - This auto-generates your `prisma/schema.prisma` file.

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

  - Add a `aUserProfile` model to it, which has an `email` and a `name` and a boolean whether they accepted your terms and conditions.
  - If you ran `npx prisma init`, rename your `.env` file to `.env.local`, otherwise create it and make sure it contains the credentials for your Prisma database.

  ```env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
  ```

- Step : Now create a `src/lib/prisma.ts` or `src/lib/prisma.js` file, which will contain your Prisma client connection.

## 2. Vercel Postgres

- To use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) for your production deployment:
- To set up a database in your Vercel project, follow these steps:

- Step :

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

# Resources and Further Reading

1. [medium - How to Set Up Next.js 15 for Production in 2024](https://medium.com/@jan.hesters/how-to-set-up-next-js-15-for-production-in-2024-347f542922b4)
