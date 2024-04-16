# Styling in `Next.js`

## Table Of Contents

# Styling in `Next.js`

- `Next.js` supports different styling options such as:
  - CSS Modules
  - Bootstrap
  - Tailwind CSS
  - global styles
  - CSS-in-JS

# Global Styles in `Next.js` 13

- **CSS Modules** are useful for styling components.
- **Global Styles** can be used for `CSS` that needs to be loaded by every page.
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

# CSS Module

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

# `bootstrap` Module in `Next.js`

- To use `bootstrap` in `Next.js` App, install specific version by:
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

- Remarks:
  - `Next.js` offers code splitting capabilities to improve initial page load performance. This means unnecessary libraries like `Bootstrap's `JavaScript might not be included initially.
  - The `useEffect` hook allows you to run code after the component has rendered.
  - By using `import("bootstrap/dist/js/bootstrap")`; within the `useEffect` hook with an empty dependency array `([])`, you're dynamically importing Bootstrap's JavaScript only after the component mounts (renders). This ensures it's available for the toggler functionality.

# Font Awesome Library

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

# Resources
