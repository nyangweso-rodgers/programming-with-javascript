# The `app` Router in `Next.js`

## Table Of Contents

# Introduction to Routing

# The `app` Router

- In version 13, `Next.js` introduced a new **App Router** which supports shared **layouts**, nested routing, loading states, error handling, and more. The **App Router** works in the `app` directory.
- `Next.js` **App Router** uses the file-system-based router, where you create directories(folders) to define **routes**. You must create a special file called `page.js`(or .ts/.jsx/.tsx) under the directory to create a page for the route. The top-level `app/` directory acts as the root route(`/`), and any directory you create under the app directory will create other route segments that map to a URL segment.
- If a directory doesn't have a corresponding `page.js` file, the respective route will be inaccessible and result in a `404`, page not found error.

# Linking and Navigating

- There are four ways to navigate between **routes** in **Next.js**:
  1. Using `<Link>` Component
  2. Using the `useRouter` hook (Client Components)
  3. Using the `redirect` function (Server Components)
  4. Using the native [History API](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api)

## Using `<Link>` Component

- `<Link>` is a built-in component that extends the HTML `<a>` tag to provide **prefetching** and client-side navigation between **routes**. It is the primary and recommended way to navigate between routes in `Next.js`.
- You can use it by importing it from `next/link`, and passing a `href` `prop` to the component:

  ```js
  import Link from "next/link";

  const Page = () => {
    return (
      <>
        <Link href="/Components/Blog" className="nav-link">
          Blog
        </Link>
      </>
    );
  };
  ```

# Dynamic Routes in `Next.js`

- You create **dynamic routes** when you do not know the route segment name and want to create with dynamic data. For example, you may have a static route called `/blog`. Creating individual blog post routes under it will be too much overhead. You may want to create them using any dynamic data like `id`, `name`. or a `slug`.
  - `Slug` is an unique part of an `URL` that provides information about a web page. It appears at the end part of the `URL` after the backslash (“`/`”). Example: `first-blog` is the slug of the URL `https://example.com/blog/first-blog`

# Resources

1. [nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)
