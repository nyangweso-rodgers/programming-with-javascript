# Link Component in `Next.js`

## Table Of Contents

# `<Link>` Component

```js
import Link from "next/link";
```

## `props` For `<Link />` Component

1. `href`
2. `replace`
3. `scroll`
4. `prefetch`

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
   - You can use Next.js's "Link" component with prefetching:

     ```js
     import Link from "next/link";

     const Navigation = () => {
       return (
         <>
           <main>
             <Link href="/about" prefetch>
               About
             </Link>
           </main>
         </>
       );
     };

     export default Navigation;
     ```

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

# Resources

1. [nextjs.org/learn/react-foundations](https://nextjs.org/learn/react-foundations)
2. [nextjs.org/docs/pages/api-reference/components/link](https://nextjs.org/docs/pages/api-reference/components/link)
