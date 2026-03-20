# How to Render React Applications

# React Server Components (RSC)

- With **RSCs**, you can move your data fetching logic to the server (so that your component fetches the data without a network call) and get it ready on the server itself. The data that comes back to the client is a well constructed component along with all the data fit into it.

- With **RSC**, you may not need to use `useEffect` (ever!).
- Some of the **Limitations** of **RSC** include:
  - **RSCs** stay on the server and get rendered on the server. They don't have anything that is related to the client-side. This means that you can't add any user interactivity to the server components. For example, you can't use any event handlers or React hooks like `useState`, `useReducer`, `useEffect` in your server components.
  - You can not use Browser Web APIs like `localstorage`, bluetooth, web USB, and so on in server components.
  - For everything that's related to client interactions, you must continue to use client components.

# How to Use Client and Server Components Together

- **Server components** can import and render **client components**, but **client components** can't render the **server components** in it. If you want to use a **server component** in a **client component**, you can pass it as `props` and use it that way.

- It is better to have the **server components** at the root of your component hierarchy and push the client components towards the leaves of the component tree.

- The data fetching can happen at the top in the server components and you can pass them how `React` allows. User interactions (event handlers) and accessing browser APIs can be handled in the client component at the leaf level.

# React Server Components (RSC) vs. SSR

- With **SSR** we send the raw `HTML` from the **server** to the **client**, then all the client side `JavaScript` gets downloaded. `React` starts the **Hydration** process to transform the `HTML` to an interactive `React` component. In **SSR** the component doesn't stay on the server.

- With **RSC**, the components stay on the server and have access to the server infrastructure without making any network roundtrips.

- **SSR** is useful for faster loading of the initial page of your application. You can use **SSR** and **RSCs** together in your application without any problems.

# Resources

1. [freeCodeCamp - React Server Components – How and Why You Should Use Them in Your Code](https://www.freecodecamp.org/news/how-to-use-react-server-components/)
