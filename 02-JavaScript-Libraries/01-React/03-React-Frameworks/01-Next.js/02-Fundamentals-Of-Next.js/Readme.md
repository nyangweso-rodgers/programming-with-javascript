# Fundamentals Of `Next.js`

## Table Of Contents

# Data Fetching in `Next.js`

- Initially `Next.js` was well known to be a **Server-Side Rendering** Framework, now there are 4 methods to fetch data.

## Client-Side Rendering (CSR)

- **CSR** is the usual kind of data fetching using `useEffect`, it will fetch the data from the API every single page request on the **client-side** (after the page is rendered, then the function will run).

- This is how **CSR** works:

  - When a request is made to a `Next.js` server, it first checks if there is a static `HTML` version of the page in the cache. If it exists, it sends that to the client. If not, it proceeds with the **CSR** process.
  - **Data Fetching**:
    - `Next.js` calls a special function called `getInitialProps()`. This function runs on the client side and can be used to fetch any data that the page needs to render. This could be data from an API, a database, or any other source.
    - The `getInitialProps()` function is `asynchronous`, meaning it can use the `await` keyword to wait for `promises` to resolve. This is particularly useful when fetching data from an API, as it allows the function to wait for the data to be retrieved before continuing.
  - **Components Rendering**:
    - `Next.js` renders the React components on the client side using the data returned by `getInitialProps()`. It generates an `HTML` document with this rendered content.
    - This process involves calling the `renderToString()` function from `react-dom/server`, which turns React components into `HTML` strings.
    - The `renderToString()` function takes a React element and returns an `HTML` string that represents that element. This string is then inserted into the HTML document that is sent to the client.
  - **Response Sending**:
    - The server sends this `HTML` document to the client along with minimal JavaScript code for interactivity. The page appears almost instantly and is interactive even before all JavaScript has loaded. The minimal JavaScript code sent with the `HTML` document includes **event handlers** for user interactions such as `clicks` and form submissions. It also includes code to manage state and update the DOM when state changes.
  - **Page Hydration**:
    - Once all JavaScript has loaded, React “hydrates” the page. This means it attaches event listeners and sets up any additional interactivity that couldn’t be captured in the HTML alone.
    - **Hydration** involves replacing server-rendered static markup with fully interactive components. During **hydration**, React will preserve all of the existing DOM nodes, attach event listeners, and update any dynamic content.

- **Note**:
  - **CSR** isn't ideal for server-rendered pages, as it can cause hydration mismatches between server and client.
  - **CSR** is a powerful feature that can greatly improve your web application’s performance and user experience. By rendering pages on the client side, it ensures that users can see and interact with your pages as quickly as possible, regardless of their network speed or device capabilities.
  - While **CSR** can improve performance, it also adds complexity to the application and increases server load.

## Static Site Generation (SSG)

- The default data fetching in `Next.js` is called **static data fetching** also known as **static site generation**.

  - In this approach, data is fetched at build time once then cached. The cached data is then reused on every request.
  - This is a good technique to use for pages that do not change often within your website e.g., blog posts page, it can always be fetched from the cached.
  - This boosts performance to some extent since the pages are now static and the content are retrieved from the cache instead.
  - This method ensures that the load on the database is reduced by minimizing the number of requests.

## Incremental Static Regeneration

- Another data fetching method in `Next.js` is called **Incremental Static Regeneration** (ISR).

  - In this approach, data is fetched and cached which is then reused on each request until it reaches a specific internal of time.
  - This method is useful if the data changes and you want to ensure the application shows the latest version without having to rebuild the application.

## Server Side Rendering (SSR), Dynamic Data Fetching

- **SSR** refers to a process where a web server generates an `HTML` page on the server itself, rather than letting JavaScript handle that on the client (browser). When a user visits a web page, the server will:

  1. Get the data from the database if required
  2. Inject this data into the HTML template
  3. Respond with the resulting HTML back to the client

-In the end, the browser would receive a generated `HTML` page and then request all the necessary static assets like `CSS`, `JavaScript`, etc.

- Dynamic data changes often and could be specific to users like a shopping cart.

# Remarks

- By default, all the components are **server components**, and if you want to write a **client component**, you need to mark them explicitly using the `use client`. Thi implies that a component hierarchy in Next.js can combine **server** and **client components**. We can use **server components** as much as possible and **client components** wherever we need user interactions or event handling.

# Server Actions in Next.js

- **Server actions** are built on **React Actions** that you can define in **server components** and/or calls from **client components**. **Server actions** are JavaScript `async` functions that run on the **server** by the user interactions on the **client**.

# Resources

1. [nextjs.org/docs - Data Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching)
2. [refine.dev - Introduction to Next.js Link component with examples](https://refine.dev/blog/next-js-link-component/#introduction)
3. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)
