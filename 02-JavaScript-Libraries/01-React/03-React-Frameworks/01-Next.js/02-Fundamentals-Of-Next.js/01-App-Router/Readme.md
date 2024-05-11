# The `app` Router in `Next.js`

## Table Of Contents

# Introduction to Routing

# The `app` Router

- In version 13, `Next.js` introduced a new **App Router** which supports:
  1. shared **layouts**,
  2. nested routing,
  3. loading states,
  4. error handling, and more.
- The **App Router** works in the `app` directory.
- **App Router** uses the file-system-based router, where you create directories(folders) to define **routes**. You must create a special file called `page.js`(or `.ts`/`.jsx`/`.tsx`) under the directory to create a page for the route. The top-level `app/` directory acts as the root route(`/`), and any directory you create under the app directory will create other route segments that map to a URL segment.
- If a directory doesn't have a corresponding `page.js` file, the respective route will be inaccessible and result in a `404`, `page not found error`.

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

- **Remarks**:
  - How to use `<Link>` Component for an **in-page navigation**:
    - we can scroll to a specific ID of a new route or navigate within the page to a specific HTML element with the <Link> component. We append the URL with a `# `followed by the ID of an HTML element to navigate(scroll) to a specific ID on the page.
    - Example: navigation link to scroll to the `contact` section of the page using its id `#contact`.
      ```javascript
      <Link href="/home#contact">Contact</Link>
      ```

## `useRouter` hook to navigate between the routes

- At times you may want to navigate from one route to another programmatically. How about moving from one route to another with a button click? In this case, you should not use the `<Link>` component but by using `useRouter`.

  ```js
  "use client";

  import { useRouter } from "next/navigation";

  export default function EmployeePage() {
    const router = useRouter();

    return (
      <button type="button" onClick={() => router.push("/salary")}>
        Salary
      </button>
    );
  }
  ```

  - Here:
    - We import the `useRouter` hook from the `next/navigation`.
    - We get a `router` instance from the hook.
    - We invoke the `push` method passing the new route when clicking the "Salary" button.

- Remarks:
  - when you use the `useRouter` hook in a component, you must make the component a **client component**.

# Dynamic Routes in `Next.js`

- You create **dynamic routes** when you do not know the route segment name and want to create with dynamic data. For example, you may have a static route called `/blog`. Creating individual blog post routes under it will be too much overhead. You may want to create them using any dynamic data like `id`, `name`. or a `slug`.
  - `Slug` is an unique part of an `URL` that provides information about a web page. It appears at the end part of the `URL` after the backslash (“`/`”). Example: `first-blog` is the slug of the URL `https://example.com/blog/first-blog`

## How to Create Dynamic Routes in `Next.js`

- We can create dynamic route segment by wrapping the directory name in square brackets(`[]`). For example, `[name]`, `[slug]`, `[id]`, etc.
- For example:

  - Suppose we have a `blog/` and it's `posts/` segments, the individual posts can include a route like this, `/blog/[slug]/page.js`. Here `[slug]` is the dynamic route segment.
  - Create a directory named `[slug]` under the `blog/` directory and a `page.js` file under the `blog/[slug]/`.
  - All dynamic segments are passed as the `params` prop to the `page`. We can destructure the dynamic route segment value from the `params` prop.

    ```js
    const BlogPage = ({ params: { slug } }) => {
      return (
        <>
          <div className="text-2xl">
            Showing the blog post for the slug <strong>{slug}</strong>
          </div>
        </>
      );
    };

    export default BlogPage;
    ```

  - The page has received a `params` prop, and we can extract the `slug` value from it. Now, you can do whatever logic you need using the `slug` value. You can use it to make a network call and get details to render on the page, or you can just render it on the page.

# Resources

1. [nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)
