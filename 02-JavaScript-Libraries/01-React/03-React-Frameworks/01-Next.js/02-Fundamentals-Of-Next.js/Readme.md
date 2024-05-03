# Fundamentals Of `Next.js`

## Table Of Contents

# Data Fetching in `Next.js`

- Initially `Next.js` was well known to be a **Server-Side Rendering** Framework, now there are 4 methods to fetch data.

## Client-Side Rendering (CSR)

- **CSR** is the usual kind of data fetching using `useEffect`, it will fetch the data from the API every single page request on the **client-side** (after the page is rendered, then the function will run).

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

## Server Side Rendering (SSR)

- **Server-Side Rendering** is also referred to as **Dynamic Data Fetching**. In this method, the data is fetched on each request.
- Dynamic data changes often and could be specific to users like a shopping cart.

# Resources

1. [nextjs.org/docs](https://nextjs.org/docs)
2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
3. [Resolving "Built-in next/font" Error in Next.js](https://nextjs.org/docs/messages/built-in-next-font)
4. [refine.dev - Introduction to Next.js Link component with examples](https://refine.dev/blog/next-js-link-component/#introduction)
5. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
6. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)