# Setting Up Next.js App

## Table Of Contents

# Setup a `Next.js` 13 App

```sh
    # create a `my-test-app`
    npx create-next-app@latest my-test-app
    # move to the my-test-app directory
    cd my-test-app
    # start the server
    npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Folder Structure with `Next.js` 13

1. `node_modules/`
2. `public/`: Static assets to be served
3. `src/`: Optional application source folder

   - `app/`: App router
     - `app/layout.js`
     - `page.js`

4. `next.config.js` Configuration file for `Next.js`

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {};

   module.exports = nextConfig;
   ```

5. `package.json` Project dependencies and scripts
6. `jsconfig.json` Configuration file for JavaScript
7. `.gitignore` Git files and folders to ignore
8. `package-lock.json`
9. `.estlintrc.json` Configuration file for ESLint

- Remarks:

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

# Fonts in `Next.js`

## `@next/font`

- `Next.js` 13 introduces a new font system, that provides you with easy access to all the fonts stored in [Google fonts](https://fonts.google.com/). These get downloaded when you build your app, so no requests get sent to Google client-side. This helps with speed and performance since the fonts get stored locally. `Next.js` also includes automatic optimization for fonts, similar to how it optimises images with its Image component.
- The `Next.js` Font Component comes in a separate package and is not part of the `Next.js` package itself.
- The package includes:
  - Built-in automatic self-hosting for any font file.
- i.e., @next/font will automatically optimize fonts and remove external requests for improved privacy and performance.
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

* **NOTE**:
  - Resolving **"Built-in next/font"** Error in `Next.js`
  - to resolve this error which typicaaly occurs when you are using the `@next/font` package in `Next.js` 13.2 and later.
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

# Images in `Next.js`

## `next/image` in `Next.js` 13

- Some of the optimizations built into the `Image` component include:

  - Improved Performance: Always deliver images of the correct size for each device, using updated image formats.
  - Visual Stability: Prevent an unexpected shift layout as the page loads automatically
  - Faster Page Loads: The images load when they enter the viewport, with blur-up placeholders as an option.
  - Asset Flexibility: Resize photos stored on remote servers on the fly

- To use the `Next.js` Image Component, `Image` component from the `Next.js` package via `next/image`.

  ```js
  // pages/index.js
  import Image from "next/image";
  ```

- Required attributes:

  - `src`: This is the path to the image.
  - `alt`: This specifies the alternate text for an image.
  - `width`: This specifies the width of the image in `px`.
  - `height`: This specifies the height of the image in `px`.

- Making `Next.js` images responsive using `layout` prop which has 4 options:

  - `fixed`: The image is not scalable. The image’s width and height are specified regardless of the device’s size displayed.
  - `intrinsic`: The image scales down to fit the container’s width on smaller viewports. The image does not scale up beyond its actual size on a larger viewport. The container width is set to 100%.
  - `responsive`: On different viewports, the image is scaled down or up depending on the container’s width while retaining the aspect ratio.
  - `fill`: Stretches the image’s width and height to fill the parent container.

# Additonal Libraries (Modules) to `Next.js` App

## `bootstrap@5.3.2` Module

- Run the following command in the terminal:
  ```sh
      # install bootstrap
      npm install bootstrap@5.1.3
  ```
- Import `bootstrap.css` to the `pages.js` file.
  ```js
  // pages.js
  // import bootstrap to pages.js
  import "bootstrap/dist/css/bootstrap.css";
  ```

## `bootstrap-icons` Module

- install [bootstrap icons](https://icons.getbootstrap.com/) with `npm`
  ```sh
    # install bootstrap icons
    npm install bootstrap-icons
  ```
- import to the `page.js` file:
  ```js
  // import to the `page.js` file
  // import bootstrap-icons
  import "bootstrap-icons/font/bootstrap-icons.css";
  ```

## Font Awesome

- [Font Awesome](https://fontawesome.com/) is an icon's library and toolkit.
- Run the following command in the terminal to install Font Awesome to `Next.js`
  ```sh
      # install Font Awesome
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
