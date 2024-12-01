# Next.js

## Table of Contents

# React vs. Next.js

1. Rendering
   - React offers Client-side by default
   - Next.js offers Server-side, static, and client-side
2. Routing
   - React Requires external library for Routing
   - Next.js has built-in file-based routing
3. SEO
   - In React, SEO is quite Challenging without SSR
   - Next.js offers Excellent SEO out of the box
4. Performance
   - React has good performance, but requires optimizations
   - Next.js has a great built-in performance optimizations
5. Learning Curve
6. Flexibility
   - React has a high Flexibility
   - Next.js offers moderate Flexibility
7. Backend Integration
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

# Resources and Further Reading
