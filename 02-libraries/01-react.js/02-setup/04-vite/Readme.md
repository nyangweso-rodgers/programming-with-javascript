# Vite

## Table Of Contents

# Overview of Vite

- For a long time, [Create React App](https://create-react-app.dev/) was the go-to option for React developers, when setting React Applications. However, over time, systems become complex, and **CRA** fails to maintain the speed and performance of the applications. That’s when **Vite** comes into the picture. It’s a modern build tool providing robust features and presenting growth opportunities.
- [Vite](https://vitejs.dev/) like [create-react-app](https://create-react-app.dev/) is a build tool that is designed to be fast and optimized for modern web development workflows. It too generates a new **React** site for us along with all of the configuration and dependencies it needs to run hence doing all the heavy lifting for us as well.
- **Vite** is a modern build tool built upon [Rollup bundler](https://rollupjs.org/). It was designed specifically to address the limitations of existing build tools and is optimized for speed and performance.
- **Vite** leverages a native development server, native browser imports, and native [ECMAScript Modules](https://nodejs.org/api/esm.html) to ensure seamless app development, resulting in faster build times. Its development server can send multiple responses for a single client request using [HTTP/2 server push](https://www.smashingmagazine.com/2017/04/guide-http2-server-push/).
- **Vite** also provides features like hot reloading and code splitting. This build tool can be used to develop applications that don’t need complex configurations.

# Advantages of Vite

1. **Extensive ecosystem** - **Vite** is quite an extensible and flexible option. It allows you to integrate with a large array of tools to extend its capabilities. Its rich plugin ecosystem supports multiple development frameworks, including [React]() and [Svelte]().
2. **Rapid development** - **Vite** leverages the native **ECMAScript Modules** imports to eliminate the manual bundling process during development. It provides pre-bundled modules and dependencies, leading to reduced development time. On top of that, its lightning-fast development server minimizes the build time.
3. **Optimized code sizes** - Features like [tree-shaking](https://webpack.js.org/guides/tree-shaking/) and **lazy loading** of modules help developers reduce the size of the code and optimize it for performance. These features from Vite can come in handy when working on projects with many modules. Reduced code sizes also help speed up the development process, leading to enhanced developer productivity.
4. **Flexible configurations** - In terms of configuration, Vite is very flexible. It enables you to tailor-cut every single aspect of the React project setup to meet your unique requirements. With such a flexible configuration system, you can use Vite for a broad spectrum of projects.

# How does Vite Work?

- **Vite** primarily does two things during development: it serves the code locally, and for production purposes, it bundles your CSS and JavaScript along with other assets.
- Several tools available in the market, including Rollup, Parcel, and Webpack, do the same thing. So, what makes Vite unique?
- The problem with those old frameworks is that they rebuild everything on each save, change, and update. Now, if you manage a large app, even for a small save, you must wait several minutes despite using hot reloading with those frameworks.
- In short, their update speed will get slower as you add more code and dependencies to your React application. Meanwhile, Vite takes the opposite approach by starting with the server, taking unchanged dependencies, and using [esbuild](https://esbuild.github.io/) to bundle them together.

# Difference between Vite and CRA

1. **Performance**

   - While **pre-bundling**, **Vite** uses **ECMAScript Modules** to convert dependencies with various internal modules into a single module. When kept separated, these modules can send hundreds of requests at the same time, congesting the browser and slowing the load time.
   - However, after pre-bundling them into a single module, it can only send one request, increasing the app’s performance. Meanwhile, **CRA** lacks **pre-bundling,** and without that, hundreds of requests fire up at the same time, resulting in a congested browser and deteriorated app performance. 2. Development Speed 3. Configuration

2. **Development Speed**:

   - **Vite** is faster than **CRA**, whether it’s development server startup time or build time, because it uses an **ECMAScript Modules-based development server**, while **CRA** has a **Webpack-based development server.**
   - Moreover, **Vite** leverages a preconfigured Rollup for building and releasing apps into a production environment. Compared to **Webpack**, Rollup handles bundling with excellent efficiency. Hence, the build time of **Vite** is faster with a smaller-sized output.

3. **Configuration**:
   - One of the primary reasons React developers prefer to use **CRA** is its zero-configuration setup. It can run a React app using a single command. However, this compromises CRA’s flexibility, and that’s why you need to extend its capabilities when working with large projects.
   - Meanwhile, **Vite** allows you to add new capabilities to this build tool by quickly writing [Rollup plugins](https://rollupjs.org/plugin-development/). **Rollup** has an extensive plugin ecosystem that can be leveraged to create an environment suited to your project requirements.

# Why Choose Vite?

- **Vite** offers numerous advantages over **CRA**. Let’s find out some major benefits.

  1. **Efficient and high-performance builds**

     - **Vite** helps you create optimized production builds using preconfigured commands such as tree shaking, async chunk loading, and CSS code splitting. This helps you maintain smaller bundle sizes and improve build performance.
     - **Vite’s** development server imports **ECMAScript Modules**, eliminating the need for bundling. As a result, your development speed increases.

  2. **Faster file updates**

     - As the codebase grows larger over time, the file updates slow down in **CRA**. However, things work differently in **Vite**. It prefers performing hot module replacement over native **ECMAScript Modules**.
     - When you edit a module of a file, **Vite** annuls its chain with its closest hot module replacement boundary. This simplifies the hot module replacement updates and increases its speed, regardless of the app size. **Vite** uses HTTP requests to fetch the modules and HTTP headers to cache, leading to increased full-page reload speed.
     - Moreover, **Vite** leverages the `304 Not Modified` to make source code module requests conditional and `Cache-Control: max-age=31536000,immutable` for caching the dependency module requests.

  3. **Rich features**

     - **Vite** offers built-in support for dynamic imports. For example, it can import various file types, such as TypeScript (ts), TypeScript with JSX (tsx), JavaScript with JSX (jsx), and CSS files. This helps ensure that updates are quickly reflected in the browser.

  4. **Quick startup for development server**
     - **CRA** builds an entire application altogether before delivering it to the user. **Vite** divides the modules of React apps into two categories:
       - Dependencies: They are plain JavaScript that does not change during development. **Vite** uses esbuild to pre-bundle them to ensure that every dependency gets to send only a single HTTP request. Because they don’t change, dependencies are easy to cache. After that, you can skip pre-bundling.
       - Source code: They are the non-plain JavaScript that changes over time. They need to be edited, changed, and updated as per requirements. Vite uses native ECMAScript Modules to serve the source code. It helps improve the start time of the dev server.

# Steps to Create React App with Vite

- **Remarks**:

  - For **Vite**, we use `pnpm create vite@latest`
  - `pnpm` is also a package manager but faster than `npm`. However, you can also use `npm create vite@latest` instead.
  - in `create-react-app`, `JavaScript` files have a `.js` file extension while using **Vite**, files have a `.jsx` extension.
  - Additionally, the entry point of any React application built with **Vite** is the `main.jsx` file which works the same as the `index.js` file in `create-react-app`

- **Step 1**: Setup

  - Run `pnpm create vite@latest` in the terminal, from which you will be prompted to add the **Project name**, the default being `vite-project`.
  - After adding the project name, we are prompted to select the framework we are to use in our project.
    - **Vite** supports several **libraries**, **frameworks** but because we are using **React**, we will select **React**.
  - After selecting **React**, we are to select whether we are to use **React with TypeScript** or **JavaScript**.
    - For one wiith **JavaScript**, We have one with **JavaScript** and the second option with **JavaScript + SWC**.
    - [SWC](https://swc.rs/) is a transpiler for `JavaScript` / `TypeScript` that is written in **Rust** and is much faster than **Babel** (`JavaScript` option with no '`**+ SWC`' uses `Babel`), used for both compilation and bundling. `Rust` is known for its performance and reliability, hence for compilation, `SWC` takes `JavaScript` / `TypeScript` files using modern `JavaScript` features and outputs valid code that is supported by all major browsers 20x faster than `Babel`. It speeds up the development, production builds and outputs smaller files hence much faster than `Babel`.

- **Step 2**: Run Application
  - With **CRA** we were using `npm start` but for **Vite**, we are to use `pnpm run dev` or `pnpm dev` (_the starting script can be found in the `package.json `file_)
  - After running `pnpm run dev` or `pnpm dev` the development server for our application (`my-app`) is typically started and we can open our web app on our local machine, the same way we did in **CRA**, but this time, **vite** provides a different local host port. eg: localhost:5173.

# Understanding Vite Folder Structure

# Migrating from CRA to Vite

- The following are the needed steps for the migration.

  1. Step 1: Uninstall `react-scripts`. When preparing for migration, the first step is to remove **CRA** from your project by uninstalling `react-scripts`.
     ```sh
      npm uninstall react-scripts
     ```
  2. Step 2: Install **Vite** and its related dependencies.
     ```sh
      npm install vite @vitejs/plugin-react --save-dev
     ```
  3. Step 3: Update `package.json` to add **Vite** scripts.
     ```json
      "scripts": {
     "dev": "vite",
     "build": "vite build",
     "serve": "vite preview",
     }
     ```
  4. Step 4: Move the `index.html` file to the project’s root directory. Move your `public/index.html` file to the root directory of your project and change the script tag accordingly.

     ```html
     <!-- index.html -->
     <body>
       <noscript>You need to enable JavaScript to run this app.</noscript>
       <div id="root"></div>

       <script type="module" src="/src/index.jsx"></script>
     </body>
     ```

  5. Step 5: Change file extensions `.js/.jsx`. Change the file extensions of `app.js` and `index.js` to `app.jsx` and `index.jsx`, respectively. Additionally, if any file contains JSX code, all related files must have the `.jsx `extension.
  6. Add the `vite.config.js` file to the project’s root directory. To set up **Vite** for your project, make sure to add the `vite.config.js` file to the root of your project. You can add your preferences to this file. For reference, check out [Vite Doc](https://vite.dev/config/#configuring-vite).

     ```js
     // vite.config.js
     import { defineConfig } from "vite";
     import react from "@vitejs/plugin-react";

     // https://vitejs.dev/config/
     export default defineConfig({
       plugins: [react()],
     });
     ```

  7. Step 7: Change the `.env` file to use `env` variables. If you have a `.env` file, always prefix the environment variable name with `VITE_` to avoid inadvertently exposing environment variables to the client.
     ```env
      VITE_SOME_KEY=123
     ```
  8. Step 8: `VITE_SOME_KEY` will be used as `import.meta.env.VITE_SOME_KEY` to your client source code.
     ```js
     console.log(import.meta.env.VITE_SOME_KEY); // "123"
     ```
  9. Step 9: Run the project. Once you’ve finished the steps above, you’re all set to launch your new Vite-powered React app. Now run.
     ```sh
      npm run dev
     ```

# Resources

1. [pnpm](https://pnpm.io/)
2. [vitejs.dev/](https://vitejs.dev/)
3. [Hashnode - ReactJS 101: Let's Build Robust Web Applications with React. by Gatere Mark](https://gateremark.hashnode.dev/reactjs-101-lets-build-robust-web-applications-with-react?ref=twitter-share)
4. [Why Vite - vitejs.dev/guide](https://vitejs.dev/guide/why.html)
5. [https://blog.openreplay.com/why-choose-vite-over-create-react-app/?ref=dailydev](https://blog.openreplay.com/why-choose-vite-over-create-react-app/?ref=dailydev)
