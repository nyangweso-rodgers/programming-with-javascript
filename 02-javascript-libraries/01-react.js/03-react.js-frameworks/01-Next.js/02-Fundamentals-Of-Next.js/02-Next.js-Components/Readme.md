# React Components in `Next.js`

## Table Of Contents

# Components in `Next.js`

## Client Components

- **Client components** are rendered on the **client**. In `Next.js`, **Client components** can also be **pre-rendered** on the **server** and **hydrated** on the **client**.
- To use **Client component**, you would create a file inside the `/app` folder and add the `'use client'` directive to the top of the file. This should be before any imports are added.

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

- **React Server Components** are useful for rendering the skeleton of a page, while leaving the interactive bits to the so-called "client components". They can be useful because they allows us to:

  - render pages faster
  - reduce the amount of JavaScript that needs to be sent to the Client
  - improve the routing performance of server-rendered pages

- In short, we use **Server Components** to fetch data from the server and render the skeleton of a page: then, we can pass the data to the "client components".

- **Server Components** are a new type of **React components** that run on the server and return compiled `JSX` that is sent to the client. `Next.js`, with its new `app` directory released in `Next.js` 13, fully embraced **Server Components** by making them the default type components. i.e., All components inside the `/app` directory are **server components** by default. You can choose to use a **client component** instead by specifying it explicitly.
- **Server components** allow you to render components on the server and reduce the amount of `js` sent to the client.

- Use **Server components** when:

  - Fetching data
  - Storing sensitive information on server (tokens, API keys, etc.)
  - access backend resources directly.
  - keep large dependencies on the server

- There are some constraints to using **Server Components** that we need to keep in mind:
  - Server components cannot use browser-only APIs
  - Server components cannot use **React hooks**
  - Server components cannot use `Context`

# Handling Events in `Next.js`

# Resources

1. [nextjs.org/learn/react-foundations](https://nextjs.org/learn/react-foundations)
