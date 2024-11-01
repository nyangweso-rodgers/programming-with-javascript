# Next.js

## Table Of Contents

# Drawbacks of React

- With **React**:
  - You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
  - Need to do production optimizations such as code splitting.
  - You might have to write some server-side code to connect your React app to your data store.

# Next.js: The React Framework

- `Next.js` is a framework for building **server-side** rendered **React apps**, making it suitable for generating quick and dynamic web applications. It offers the following features:
  - An intuitive [page-based](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) routing system (with support for [dynamic routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes))
  - [Pre-rendering](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#pre-rendering), both [static generation](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#static-generation-recommended) (SSG) and [server-side rendering](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#server-side-rendering) (SSR) are supported on a per-page basis
  - Automatic code splitting for faster page loads
  - [Client-side routing](https://nextjs.org/docs/pages/building-your-application/routing#linking-between-pages) with optimized prefetching
  - Development environment with Fast Refresh support
  - API routes to build API endpoints with Serverless Functions

# Next.js Concepts

## 1. Static Site Generation (SSG) with Next.js

- **SSGs** are tools for producing HTML in advance so a server can efficiently send the same content to all visitors without creating it first.
- **Benefits** of **SSG** include:
  1. Faster loading time
  2. Better user experience
  3. For developers, scalability is also convenient with static sites as you can cache and serve entire websites in Content Delivery Networks (CDNs) instead of deploying more servers.
  4. With no server-side processing or database interactions, static sites are more resilient to security vulnerabilities like SQL injection or cross-site scripting (XSS) attacks

# Performance Improvements in Next.js

# 1. Load only the JavaScript and CSS you need.

- To find out if this is a problem, you can use the **Coverage** tab in the **DevTools**. This tab is a bit hidden, but it tells you the % usage of your files. When you click on a **file**, it shows you the lines that are used:

# 2. Next.js Dynamic Imports

- Dynamic imports is a technique that can significantly improve the initial loading performance of Next.js applications. i.e., **Dynamic imports** are a feature that allows you to load JavaScript modules asynchronously.
- In the context of a Next.js application, this means you can load components on demand, rather than bundling them all together at the initial page load. This can lead to smaller javascript bundle sizes and faster page load times, enhancing the overall user experience.

## How to Implement Dynamic Imports in Next.js

- To dynamically import a React component in Next.js, you can use the `next/dynamic` function. This function enables you to import components asynchronously and can be paired with Server-side rendering (SSR) options to fine-tune the behavior of your imports.
- Example:

  - Here's a simple example of how to use next/dynamic to import a React component:

    ```js
    import dynamic from "next/dynamic";

    const DynamicComponent = dynamic(() => import("../components/MyComponent"));

    function HomePage() {
      return (
        <div>
          <h1>Welcome to My Next.js App</h1>
          <DynamicComponent />
        </div>
      );
    }

    export default HomePage;
    ```

  - Here, `MyComponent` will only be loaded when the `HomePage` component is rendered, reducing the initial load time.

## Advanced Dynamic Imports with SSR Options

- Next.js allows you to control the server-side rendering behavior of your dynamic imports. You can set the `ssr` option to `false` if you want to disable SSR for a particular component:
  ```js
  const DynamicComponentWithNoSSR = dynamic(
    () => import("../components/MyComponent"),
    { ssr: false }
  );
  ```
- By setting `ssr` to `false`, the component will only be rendered on the client side, which can be useful for components that rely on browser-specific features.

## Using Suspense with Dynamic Imports

- React's **Suspense** feature can be used in conjunction with **dynamic imports** to display a fallback UI while the component is being loaded. Here's how you can implement a suspense fallback:

  ```js
  import dynamic from "next/dynamic";
  import React, { Suspense } from "react";

  const DynamicComponentWithSuspense = dynamic(
    () => import("../components/MyComponent"),
    { suspense: true }
  );

  function HomePage() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponentWithSuspense />
      </Suspense>
    );
  }

  export default HomePage;
  ```

- Here, the text "`Loading...`" will be displayed until `MyComponent` is ready to be rendered.

## Optimizing Page Load with Dynamic Imports

- One of the key benefits of dynamic imports is the ability to optimize page load times. By loading components only when they are needed, such as in response to user interaction, you can significantly reduce the initial load of your application.

## Loading Components on User Interaction

- Consider a scenario where a component should only be loaded when a user clicks a button. You can use a dynamic import within an event handler to achieve this:

  ```js
  import dynamic from "next/dynamic";
  import React, { useState } from "react";

  function HomePage() {
    const [DynamicComponent, setDynamicComponent] = useState(null);

    const loadComponent = async () => {
      const Component = await import("../components/MyComponent");
      setDynamicComponent(() => Component.default);
    };

    return (
      <div>
        <button onClick={loadComponent}>Load Component</button>
        {DynamicComponent && <DynamicComponent />}
      </div>
    );
  }

  export default HomePage;
  ```

- Here, `MyComponent` will only be loaded and rendered after the user clicks the button, improving the initial page load performance.

## Code Splitting Strategies with Dynamic Imports

- **Code splitting** is a technique where you divide your code into multiple bundles that can be loaded on demand. **Dynamic imports** are a natural fit for **code splitting**, as they allow you to load components asynchronously. By strategically splitting your code, you can ensure that users only download the code they need, when they need it, which can lead to faster load times and a more responsive application.

### Splitting At Route Level

- Next.js automatically performs **code splitting** at the route level. Each page in your pages directory becomes its own JavaScript bundle. However, you can further optimize your application by using **dynamic imports** within your pages.
- Example

  - If you have a heavy `ChartComponent` that's only needed on a specific route, you can dynamically import it to avoid loading it with the initial page:

    ```js
    import dynamic from "next/dynamic";

    const DynamicChartComponent = dynamic(() =>
      import("../components/ChartComponent")
    );

    function AnalyticsPage() {
      return (
        <div>
          <h1>Analytics</h1>
          <DynamicChartComponent />
        </div>
      );
    }

    export default AnalyticsPage;
    ```

### Splitting Within Components

- You can also use **dynamic imports** to split the code inside individual components. For instance, if a header component contains a search feature that's not immediately needed, you can dynamically import the search functionality:

  ```js
  import dynamic from "next/dynamic";
  import React from "react";

  const DynamicSearchComponent = dynamic(() =>
    import("../components/SearchComponent")
  );

  function Header() {
    return (
      <header>
        <nav>/* Navigation items */</nav>
        <DynamicSearchComponent />
      </header>
    );
  }

  export default Header;
  ```

## Handling Named Exports with Dynamic Imports

- When you dynamically import a module with multiple named exports, you need to handle it slightly differently. You can use the `await` import statement to retrieve all named exports from the module:

  ```js
  import React, { useState } from "react";

  function HomePage() {
    const [components, setComponents] = useState({});

    const loadComponents = async () => {
      if (!components.MyComponent) {
        const { MyComponent, AnotherComponent } = await import(
          "../components/MyComponents"
        );
        setComponents({ MyComponent, AnotherComponent });
      }
    };

    return (
      <div>
        <button onClick={loadComponents}>Load Components</button>
        {components.MyComponent && <components.MyComponent />}
        {components.AnotherComponent && <components.AnotherComponent />}
      </div>
    );
  }

  export default HomePage;
  ```

- Here, `MyComponent` and `AnotherComponent` are both named exports from the `MyComponents` file. They are loaded dynamically when the user clicks the button.

# 3. Use the `<Image />` component from Next.js

- The Next.js Image component extends the HTML `<img>` element with features for automatic image optimization:
  1. Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
  2. Visual Stability: Prevent [layout shift]() automatically when images are loading.
  3. Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
  4. Asset Flexibility: On-demand image resizing, even for images stored on remote servers
- Example:

  - An example of the use of the `<Image />` component:

    ```js
    import Image from "next/image";
    import profilePic from "../public/me.png";

    export default function Page() {
      return (
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      );
    }
    ```

# 4. Use the Next.js Font Optimization

- [next/font]() will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
- `next/font` includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used.
- This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. No requests are sent to Google by the browser.
- Example:

  - An example of the use of Google fonts using `next/font`:

    ```js
    import { Inter } from "next/font/google";

    // If loading a variable font, you don't need to specify the font weight
    const inter = Inter({ subsets: ["latin"] });

    export default function MyApp({ Component, pageProps }) {
      return (
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      );
    }
    ```

# 5. Script Optimization

- To load a third-party script for all routes, import `next/script` and include the script directly in your custom component:

  ```js
  import Script from "next/script";

  export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        <Script src="https://example.com/script.js" />
      </>
    );
  }
  ```

- This script will load and execute when any route in your application is accessed. Next.js will ensure the script will only load once, even if a user navigates between multiple pages.

# 6. Remove unused packages

- Sometimes we forget to remove packages that are defined in package.json but no longer needed. You can check those items by running:
  ```sh
   npx depcheck
  ```

# 7. Check the current bundle size

- `@next/bundle-analyzer` enables you to visually analyze the bundle size. The bigger the cell is, the larger the size of the modules.
- How to install `@next/bundle-analyzer`:

# 8. Use Server Components

- React Server Components allow you to write UI that can be rendered and optionally cached on the server.

# Resources and Further Reading

1. [nextjs.org/docs](https://nextjs.org/docs)
2. [nextjs.org/learn/foundation](https://nextjs.org/learn/foundations/about-nextjs)
3. [Dhiwise - Accelerate Your Website With Next.js Dynamic Imports](https://www.dhiwise.com/post/accelerate-your-website-with-nextjs-dynamic-imports?ref=dailydev)
4. [Medium - Get the Best Performance on Your Next.js App](https://javascript.plainenglish.io/get-the-best-performance-on-your-next-js-app-f407cc25d1f9)
