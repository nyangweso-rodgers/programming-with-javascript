# The `app` Router in `Next.js`

## Table Of Contents

# Introduction to Routing

# The `app` Router

- In version 13, `Next.js` introduced a new **App Router** which supports shared layouts, nested routing, loading states, error handling, and more. The **App Router** works in the `app` directory which works alongside the `pages` directory to allow for incremental adoption.

# Roles of Folders and Files

- Next.js uses a file-system based router where:
  - **Folders** are used to define **routes**. A **route** is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a `page.js` file.
  - **Files** are used to create UI that is shown for a route segment.

# Creating Routes in `Next.js`

- Note that `Next.js` uses a file-system based router where folders are used to define routes.
- Each folder represents a **route segment** that maps to a URL segment. To create a nested route, you can nest folders inside each other.
- A special `page.js` file is used to make route segments publicly accessible.
- Task: Create a `Blog/` Route:
  - Step #1: Create a `Blog/` directory and add `page.js` to it.
    ```js
    //Blog/
    const Page = () => {
      return (
        <>
          <section className="border border-primary p-5">
            <div className="container border border-secondary p-4">
              <div className="row border border-info p-3">
                <div>
                  <h1>Hello, Blog Page!</h1>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    };
    export default Page;
    ```

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

# Resources

1. [nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)
