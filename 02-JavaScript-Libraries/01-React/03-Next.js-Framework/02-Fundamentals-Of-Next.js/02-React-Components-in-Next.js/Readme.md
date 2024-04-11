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

- All components inside the `/app` directory are **server components** by default. You can choose to use a **client component** instead by specifying it explicitly.
- **Server components** allow you to render components on the server and reduce the amount of `js` sent to the client.
- User **Server components** when:
  - Fetching data
  - Soring sensitive information on server (tokens, API keys, etc.)
  - access backend resources directly.
  - keep large dependencies on the server


# Handling Events in `Next.js`

# Resources
1. [nextjs.org/learn/react-foundations](https://nextjs.org/learn/react-foundations)


