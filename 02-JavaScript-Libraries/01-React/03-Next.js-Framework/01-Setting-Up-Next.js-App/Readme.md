# Setting Up Next.js App

## Table Of Contents

# Setup a `Next.js` 13 App

## Step #1: Run `npx create-next-app@latest <app-name>`

```sh
    # create a `my-test-app`
    npx create-next-app@latest test-app
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev
```

## Step #1: Running Development Server

- To confirm everything works, you can view your app by running `npm run dev` inside your terminal and navigating to [localhost:3000](http://localhost:3000/) in the browser. Then, make a small change to the code and save it.

  ```sh
      # run the development server
      npm run dev
  ```

# Folder Structure with `Next.js` 13

- `node_modules/`
- `public/`
  - Static assets to be served
- `src/app/`
  - for App router.
  - It has the following files:
    - `src/app/favicon.ico`
    - `src/app/globals.css`
    - `src/app/layout.js`
    - `src/app/page.js`
    - `src/app/page.module.css`

1. `next.config.js` Configuration file for `Next.js`

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {};

   module.exports = nextConfig;
   ```

2. `package.json` Project dependencies and scripts
3. `jsconfig.json` Configuration file for JavaScript
4. `.gitignore` Git files and folders to ignore
5. `package-lock.json`
6. `.estlintrc.json` Configuration file for ESLint

- **Remarks**:

  - with `Next.js` 13, the file-based routing can be done from the `src/app` folder. Previously, the routing was done from the `pages/` folder instead.
  - To setup pages and routing from the `src/app` folder, we add a setting within the `next.config.js` file as follows:

    ```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      experimental: {
        appDir: true,
      },
      reactStrictMode: true,
    };

    module.exports = nextConfig;
    ```

## The `src/app/` Directory

- The `app/` directory in Next.js comes with a lot of features such as:
  - Layout
  - Routing
  - Fonts usage
  - Loading Component
  - Error Component
  - Not Found Component
  - Template Component
  - Server Component

## Layout in `Next.js`

- **Layout** is UI shared between multiple pages. **Layouts** are used to create a consistent design across our application. We can use **layouts** to include common elements such as a **header**, **footer**, and **navigation menu** on every page of our application.
- When you setup `Next.js` App, a root layout file, `layout.js`, is required within the `app/` folder which will be shared across all pages in the app.

  ```js
  // layout.js

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  ```

- To create a **layout** in `Next.js`, we first need to create a file with a `.js` extension in the layouts directory of our project.
- Example:

  - suppose we want to create a _layout_ that includes a **header**, **footer**, and **navigation menu**. We can create a file named `DefaultLayout.js` in the layouts directory.
    ```js
    //
    import Header from "../components/Header";
    const DefaultLayout = ({ children }) => {
      return (
        <div>
          <Header />
          {children}
          <footer>
            <p>&copy; 2023 My Application</p>
          </footer>
        </div>
      );
    };
    ```
  - Here, we have created a _layout_ component that includes the **Header** component, the content of the **page**, and a **footer**.
  - Now that we have created the `DefaultLayout` component, we can use it across our application. For example, let’s say we want to use the `DefaultLayout` component on our **home page**. We can import the `DefaultLayout` component in our `index.js` file and use it like this:

    ```js
    //
    import DefaultLayout from "../Layouts/DefaultLayout";

    const Home = () => {
      return (
        <DefaultLayout>
          <h1>Content inside a DefaultLayout!</h1>
        </DefaultLayout>
      );
    };
    ```

- A **layout** can be defined by default exporting a React component from a `layout.js` file. The component should accept a children `prop`, which will be populated within a page or other nested layouts.
- **Layouts** defined inside a folder apply to specific route segments and render when these segments are active.

# Fonts in `Next.js`

## `@next/font`

- `Next.js` 13 introduces a new font system, that provides you with easy access to all the fonts stored in [Google fonts](https://fonts.google.com/). These get downloaded when you build your app, so no requests get sent to Google client-side. This helps with speed and performance since the fonts get stored locally.
- `Next.js` also includes automatic optimization for fonts, similar to how it optimises images with its Image component.
- The `Next.js` Font Component comes in a separate package and is not part of the `Next.js` package itself.
- The package includes:
  - Built-in automatic self-hosting for any font file. i.e., `@next/font` will automatically optimize fonts and remove external requests for improved privacy and performance.
- With `Next.js` Font, you automatically self-host any [Google Font](https://fonts.google.com/) which are automatically included in the deployment and serve from the same domain as your deployment. So, no request is sent to Google by the browser.
- To get started, install:
  ```sh
      # install dependencies - install next/font
      npm install @next/font
  ```
- Then on the `src/app/layout.js` file, import the font package:

  ```js
  // layout.js
  import { Open_Sans } from "@next/font/google";

  const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400"],
  });

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={openSans.className}>{children}</body>
      </html>
    );
  }
  ```

* **NOTE**: Resolving **"Built-in next/font"** Error in `Next.js`
  - to resolve this error which typicaly occurs when you are using the `@next/font` package in `Next.js` 13.2 and later.
  - `next/font` will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
  - From version 13.2 onward, `next/font` has been built into `Next.js`, making the `@next/font` package redundant. The `@next/font` package will be completely removed in `Next.js` 14.
  - To resolve this issue, you need to uninstall `@next/font` and replace all `@next/font `imports with `next/font` in your project. This can be done automatically using the `built-in-next-font` codemod:
    ```sh
        # uninstall @next/font and replace all @next/font imports with next/font
        npx @next/codemod built-in-next-font
    ```
  - you can then uninstall the `@next/font` from the `package.json`
    ```sh
      # uninstall @next/font
      npm uninstall @next/font
    ```

# Styling in `Next.js`

- `Next.js` supports different styling options such as:
  - CSS Modules
  - Tailwind CSS
  - global styles
  - CSS-in-JS

## Global Styles in `Next.js` 13

- **CSS Modules** are useful for styling components.
- **Global Styles** can be used for CSS that needs to be loaded by every page.
- **NOTE**: the global styles can be imported into any layout, page, or component inside the `/app` directory.
- E.g.,
  ```css
  /* app/global.css */
  body {
    margin: 0 auto;
    max-width: 680px;
    padding: 20px 20px 60px;
  }
  ```
  - then import the `app/global.css` file into any of the pages
    ```js
    import "./global.css";
    ```

## CSS Module

- `Next.js` has a built-in support for **CSS Modules** which are identified using the extension, `.module.css`
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

# Additonal Libraries (Modules) to `Next.js` App

# `bootstrap` Module

- To use `bootstrap` in `Next.js` App, install specific version by:
  ```sh
      npm install bootstrap@5.1.3
  ```
  - Or, download the latest version of `bootstrap` by:
    ```sh
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

- Remarks:
  - `Next.js` offers code splitting capabilities to improve initial page load performance. This means unnecessary libraries like `Bootstrap's `JavaScript might not be included initially.
  - The `useEffect` hook allows you to run code after the component has rendered.
  - By using `import("bootstrap/dist/js/bootstrap")`; within the `useEffect` hook with an empty dependency array `([])`, you're dynamically importing Bootstrap's JavaScript only after the component mounts (renders). This ensures it's available for the toggler functionality.

# Font Awesome Library

- [Font Awesome](https://fontawesome.com/) is an icon's library and toolkit.
- Run the following command in the terminal to install Font Awesome to `Next.js`
  ```sh
      # npm uninstall @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
      npm install --save-dev @fortawesome/fontawesome-free
  ```
- Head to `package.json` file, you will see the following dependencies has added:
  ```json
  // package.json file
  {
    "devDependencies": {
      "@fortawesome/fontawesome-free": "^6.4.2"
    }
  }
  ```
- `Next.js` allows you to import `CSS` directly in `.js` files. It handles optimization and all the necessary Webpack configuration to make this work.
- Import the following, on the `app.js` file:
  ```js
  // app.js
  import "@fortawesome/fontawesome-free/css/all.min.css";
  ```
- Usage:
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
- Remark:
  - you can also use the [react-fontawesome](https://www.npmjs.com/package/react-fontawesome) icon library.
  - from the `npm` install
    ```sh
      # From the NPM page, just install via npm
      npm install --save react-fontawesome
    ```

# Resources

1.  [Cloudinary Implementing images using Next.js Image Component](https://cloudinary.com/blog/guest_post/implementing-images-using-next-js-image-component)
2.  [refine.dev - Nextjs image optimization with examples](https://refine.dev/blog/using-next-image/#introduction)
