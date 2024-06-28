# Vite React Toolchain

## Table Of Contents

# Introduction to `Vite`

- [Vite](https://vitejs.dev/) like [create-react-app](https://create-react-app.dev/) is a build tool that is designed to be fast and optimized for modern web development workflows. It too generates a new `React` site for us along with all of the `configuration` and `dependencies` it needs to run hence doing all the heavy lifting for us as well.

# Advantages of `Vite`

1. **Speed** - `Vite` is blazingly fast as compared to `CRA`. This is because it uses a new generation of build tooling that leverages modern `JavaScript` features hence significantly reducing the time it takes to build and reload your app during development, as compared to `CRA` which uses a more traditional build process that is slower, especially for larger applications.
2. **Flexibility** - You can easily tailor it to your specific needs as it was designed to be highly configurable and customizable.
3. **Performance** - Vite has a smaller build output than CRA hence improving the performance, and loading time of your web application.

# Steps to Create React App with Vite

- For `Vite`, we use `pnpm create vite@latest`

- **Note**:

  - `pnpm` is also a package manager but faster than `npm`. However, you can also use `npm create vite@latest` instead.

- Run `pnpm create vite@latest` in the terminal, from which you will be prompted to add the **Project name**, the default being `vite-project`.
- After adding the project name, we are prompted to select the framework we are to use in our project. **Vite** supports several **libraries** \ **frameworks** but because we are using `React`, we will select `React`.
- After selecting `React`, we are to select whether we are to use `React` with `TypeScript` or `JavaScript`. We are to select `JavaScript` for this project. However, we have two options for both `JavaScript` and `TypeScript`:
  - we have one with `JavaScript` and the second option with `JavaScript + SWC`.
  - [SWC](https://swc.rs/) is a transpiler for `JavaScript` / `TypeScript` that is written in `Rust` and is much faster than `Babel` (`JavaScript` option with no '`**+ SWC`' uses `Babel`), used for both compilation and bundling. `Rust` is known for its performance and reliability, hence for compilation, `SWC` takes `JavaScript` / `TypeScript` files using modern `JavaScript` features and outputs valid code that is supported by all major browsers 20x faster than `Babel`. It speeds up the development, production builds and outputs smaller files hence much faster than `Babel`.
- Head to `test-app-with-vite` directory using `cd test-app-with-vite` and Install the project's dependencies with `npm install` or `pnpm install` (depending on the package manager you initially preferred to use).
- Then to run our project, with CRA we were using `npm start` but for `Vite`, we are to use `pnpm run dev` or `pnpm dev` (_the starting script can be found in the `package.json `file_)
- After running `pnpm run dev` or `pnpm dev` the development server for our application (`my-app`) is typically started and we can open our web app on our local machine, the same way we did in CRA, but this time, `vite` provides a different local host port. eg: localhost:5173.

# `Vite` Folder Structure

- Remarks:
  - in `create-react-app`, `JavaScript` files have a `.js` file extension while using **Vite**, files have a `.jsx` extension.
  - Additionally, the entry point of any React application built with **Vite** is the `main.jsx` file which works the same as the `index.js` file in `create-react-app`

# `Vite` vs. `create-react-app`

- Choose `create-react-app` if you prioritize simplicity, ease of use and no-configuration setup.
- Choose `Vite` if you value speed, performance and flexibility.

# Resources

1. [pnpm](https://pnpm.io/)
2. [vitejs.dev/](https://vitejs.dev/)
3. [Hashnode - ReactJS 101: Let's Build Robust Web Applications with React. by Gatere Mark](https://gateremark.hashnode.dev/reactjs-101-lets-build-robust-web-applications-with-react?ref=twitter-share)
4. [Why Vite - vitejs.dev/guide](https://vitejs.dev/guide/why.html)
