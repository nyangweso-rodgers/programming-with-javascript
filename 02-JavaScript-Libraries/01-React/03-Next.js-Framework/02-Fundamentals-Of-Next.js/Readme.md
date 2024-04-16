# Fundamentals Of Next.js

## Table Of Contents

# Data Fetching in `Next.js`

- Data fetching in `Next.js` can be done on a page-by-page basis.
- The default data fetching in `Next.js` is called **static data fetching** also known as **static site generation**.

  - In this approach, data is fetched at build time once then cached. The cached data is then reused on every request.
  - This is a good technique to use for pages that do not change often within your website e.g., blog posts page, it can always be fetched from the cached.
  - This boosts performance to some extent since the pages are now static and the content are retrieved from the cache instead.
  - This method ensures that the load on the database is reduced by minimizing the number of requests.

- Another data fetching method in `Next.js` is called **Incremental Static Regeneration** (ISR).

  - In this approach, data is fetched and cached which is then reused on each request until it reaches a specific internal of time.
  - This method is useful if the data changes and you want to ensure the application shows the latest version without having to rebuild the application.

- Final approach of data fetching in `Next.js` is called **Dynamic Data Fetching** or **Server-Side Rendering**
  - In this method, the data is fetched on each request.
  - Dynamic data changes often and could be specific to users like a shopping cart.

# Resources

1. [nextjs.org/docs](https://nextjs.org/docs)
2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
3. [Resolving "Built-in next/font" Error in Next.js](https://nextjs.org/docs/messages/built-in-next-font)
4. [refine.dev - Introduction to Next.js Link component with examples](https://refine.dev/blog/next-js-link-component/#introduction)
5. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
6. [freeCodeCamp - How to Build a Full Stack App with Next.js 13 and Firebase](https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/)
