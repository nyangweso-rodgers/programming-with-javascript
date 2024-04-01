# Fundamentals Of Next.js

## Table Of Contents

# Linking and Navigation using `Link` Component

- When linking between pages on websites, we use the `<a>` HTML tag.
- In `Next.js`, we use the `Link` Component [next/link](https://nextjs.org/docs/pages/api-reference/components/link) to link between pages in an application.
- `<Link>` allows you to do client-side navigation and accepts `props` that give you better control over the navigation behavior.

* The `Link` Component can be imported from the `next/link`

## Link Component `props`

1. `href`:

   - specifies the path or URL to navigate to which could be _absolute URL_, a _relative URL_, or a _URL object_.
   - Absolute Url:
     ```js
     // absolute URL
     <Link href="https://nextjs.org/docs">Read the docs</Link>
     ```
   - Relative URL:
     ```js
     // relative URL
     <Link href="/about">About me</Link>
     ```
   - URL objects:
     - With a URL object, we can resolve URLs using strings and parameters passed as an object to the `Next.js` Link component.
       ```js
       // URL object
       <Link
         href={{
           pathname: "/products",
           query: { product: "1" },
         }}
       >
         <a>Search for products</a>
       </Link>
       ```
     - The above example will resolve the `href` value into: `/products/?product=1`.

2. `prefetch`

   - helps to fetch page in the background automatically, and it helps to improve web performance. It is by default `true`

3. `replace`
4. `scroll`
5. `locale`
6. `shallow`

   ```js
   import Link from "next/link";

   export default function Page() {
     return (
       <Link href="/About" prefetch={false}>
         About
       </Link>
     );
   }
   ```

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
