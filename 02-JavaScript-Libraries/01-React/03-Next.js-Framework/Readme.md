# Next.js

## Table Of Contents

# History of `NextJS`

- Released in Oct. 2016 by **Vercel** with the goal of resolving the following drawbacks of `React.js`
  1. Performance issues
  2. Routing
  3. Server-side rendering
  4. SEO

# Introduction to `Next.js` 13

- `Next.js` is a `React` Framework that enables:
  1. Server-side rendering (SSR)
  2. Additional server-side functionality
  3. An improved development and deployment toolchain
- You use `React` Components to build user interfaces, and `Next.js` for additional features and optimizations.
- By framework, we mean `Next.js` handles the tooling and configuration needed for `React`, and provides additional structure, features, and optimizations for your application.
- It's significant for web app development because it helps with things like:
  - page routing,
  - server-side rendering, and
  - quick loading times, which are critical for generating a great user experience.

# `Next.js` vs. `create-react-app` Toolchains

- `create-react-app` does not easily help with generating server-side rendered apps.
- `Next.js` comes with speed, and SEO.

# How `Next.js` Works

## `Next.js` Compiler

- **Compiling** refers to the process of taking code in one language and outputting it in another language or another version of that language.
- `Next.js` handles code transformations and underlying infrastructure to make it easier for your application to go to production. This is made possible because `Next.js` has a **compiler** written in [Rust](), a low-level programming language, and `SWC`, a platform that can be used for compilation, minification, bundling, and more.
- In `Next.js`, compilation happens during the development stage as you edit your code, and as part of the build step to prepare your application for production.

## Minification in `Next.js`

- **Minification** is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.
- In `Next.js`, `JavaScript` and `CSS` files are automatically minified for production.

## Bundling in `Next.js`

- Developers break up their application into modules, components, and functions that can be used to build larger pieces of their application. Exporting and importing these internal modules, as well as external third-party packages, creates a complex web of file dependencies.
- **Bundling** is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.

## Code Splitting in `Next.js`

- Developers usually split their applications into multiple pages that can be accessed from different URLs. Each of these pages becomes a unique **entry point** into the application.
- **Code-splitting** is the process of splitting the application’s bundle into smaller chunks required by each entry point. The goal is to improve the application's initial load time by only loading the code required to run that page.
- `Next.js` has built-in support for code splitting. Each file inside your `pages/` directory will be automatically code split into its own `JavaScript` bundle during the build step. Further, Any code shared between `pages` is also split into another bundle to avoid re-downloading the same code on further navigation.

# Rendering in `Next.js`

- The process of converting `React` into the `HTML` is called **rendering**.
- **Rendering** can take place on the **server** or on the **client**. It can happen either **ahead of time at build time**, or on **every request at runtime**.
- With `Next.js`, three types of rendering methods are available:
  1. Server-Side Rendering,
  2. Static Site Generation, and
  3. Client-Side Rendering.

## Pre-Rendering in `Next.js`

- **Server-Side Rendering** and **Static Site Generation** are also referred to as **Pre-Rendering** because the fetching of external data and transformation of `React` components into `HTML` happens before the result is sent to the client.

- `Next.js` pre-renders every page by default. **Pre-rendering** means the `HTML` is generated in advance, on a server, instead of having it all done by `JavaScript` on the user's device.
- With **server-side rendering**, the `HTML` of the page is generated on a server for each request. The generated `HTML`, `JSON` data, and `JavaScript` instructions to make the page interactive are then sent to the client.
- On the client, the `HTML` is used to show a fast non-interactive page, while `React` uses the `JSON` data and `JavaScript` instructions to make components interactive (for example, attaching event handlers to a button). This process is called **hydration**.
- In `Next.js`, you can opt to **server-side render** pages by using [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)

## Static Site Generation

- With **Static Site Generation**, the `HTML` is generated on the server, but unlike **server-side rendering**, there is no server at runtime. Instead, content is generated once, at build time, when the application is deployed, and the `HTML` is stored in a [CDN](https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge) and re-used for each request.

## Client-Side Rendering

- In a standard `React` application, the browser receives an empty `HTML` shell from the server along with the `JavaScript` instructions to construct the UI. This is called **client-side rendering** because the initial rendering work happens on the user's device.
- **Note**:
  - You can opt to use **client-side rendering** for specific components in your `Next.js` application by choosing to fetch data with React’s `useEffect()` or a data fetching hook such as [useSWR](https://swr.vercel.app/).

# Components in `Next.js`

## Client Components

- **Client components** are rendered on the client. In `Next.js`, **Client components** can also be **pre-rendered** on the **server** and **hydrated** on the **client**.
- To use Client component, you would create a file inside the `/app` folder and add the `'use client'` directive to the top of the file. This should be before any imports are added.

  ```js
      // app/Counter.js
      'use client';

      import { useState } from 'react';

      const Page =() => {
          return ()
      };
  ```

- You only need to mark components as `'use client'` when they use client hooks such as `useState` or `useEffect`.
- Other components that do not depend on client hooks can be automatically rendered as **Server Components**, without `'use client'`
- In summary, use **Client Components** when:
  - Use React Hooks such as `useState`, `useEffect`, `useReducer`, e.t.c.,
  - Interactivity within the componentm with event listeners like `onClick()`
  - Use custom hooks that depend on client state, effects.

## Server Components

- **Server Components**: all components inside the `/app` directory are **server components** by default. You can choose to use a **client component** instead by specifying it explicitly.
- **Server components** allow you to render components on the server and reduce the amount of `js` sent to the client.
- User **Server components** when:
  - Fetching data
  - Soring sensitive information on server (tokens, API keys, etc.)
  - access backend resources directly.
  - keep large dependencies on the server

# How to Deploy Next.js App

## Deploy `Next.js` App on Vercel

- The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
- Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on deployment.

## Deploy Next.js Apps to GitHub Pages

# Resources

1. [Next.js 14 Learn Course](https://nextjs.org/learn)
2. [freecodecamp - How to Deploy Next.js Apps to Github Pages](https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/)
3. [github.com/features/actions](https://github.com/features/actions)
4. [pages.github.com/](https://pages.github.com/)
