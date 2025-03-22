# `npx`

# Overview of `npx`

- `npx` was introduced with `npm v 5.2.0`. While `npm` is all about installing and managing packages, `npx` is about **running them**. Think of `npx` as a quick command runner that lets you execute **Node.js** packages without installing them. `npx` is particularly useful when you want to use a package just once or test it out without permanently adding it to your system.
- Before `npx`, if you wanted to use a command-line tool from a package, you’d have to install it globally first. `npx` simplifies this by allowing you to run the tool directly from the `npm` registry without the need for a global installation.
- **How npx works**
  - When you run a command with `npx`, it first checks your local `node_modules` directory. If the package is found there, it’s executed. If not, `npx` temporarily installs the package, runs it, and then removes it. This means you can use a wide range of tools without cluttering your system.
  - Let’s say you want to use `create-react-app` to start a new React project. Normally, you’d have to install it globally first:
    ```sh
        npm install -g create-react-app
    ```
  - Then, you’d run:
    ```sh
      create-react-app my-app
    ```
  - But with `npx`, you can skip the global installation and run it directly:
    ```sh
      npx create-react-app my-app
    ```
  - This command downloads `create-react-app`, runs it, and discards it when you’re done. It’s fast and convenient and keeps your system from getting cluttered with global packages you might only use once.
  - If you’ve already installed a package locally in your project, `npx` can help you run it without needing to specify the full path to `node_modules`. For instance, if you’ve installed `Jest` locally for testing, you can run it with npx like this:
    ```sh
        npx jest
    ```
  - `npx` automatically finds the package in your local node_modules folder and runs it, saving you time and hassle.
