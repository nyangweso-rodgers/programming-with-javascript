# Fundamentals Of `Next.js`

## Table Of Contents

# Data Fetching in `Next.js`

- Initially `Next.js` was well known to be a **Server-Side Rendering** Framework, now there are 4 methods to fetch data.

# Problems with React

- When we load a webpage, `HTML` is loaded first whch informs the browser to load additional resources such as styles and `JavaScript`. With **React**, nothing gets displayed until all the `JavaScript` loads. The `HTML` is nearly empty and **React** injects your content in the `HTML` with `JavaScript`.

# What is Prerendering?

- **pre-rendering** means that the `HTML` is generated in advance, on a server, instead of having it all done by `JavaScript` on the user's device
- `Next.js` offers two methods for **pre-rendering**, i.e.,

  1. Server-Side Rendering (SSR), or Dynamic Data Fetching
  2. Static Site Generation (SSG)

## Server Side Rendering (SSR)

- **SSR** renders the web pages on the **server** and then sends `HTML` files to the **browser**. When a user visits a web page, the **server** will:

  1. Get the data from the database if required
  2. Inject this data into the `HTML` template
  3. Respond with the resulting `HTML` back to the client

-In the end, the browser would receive a generated `HTML` page and then request all the necessary static assets like `CSS`, `JavaScript`, etc.

- `getServerSideProps` function is used for **SSR**. It's similar to `getStaticProps` but is called every time the page loads instead of at build time. This ensures that all of your initial data is up to date on every load.

# Remarks

- By default, all the components are **server components**, and if you want to write a **client component**, you need to mark them explicitly using the `use client`. Thi implies that a component hierarchy in Next.js can combine **server** and **client components**. We can use **server components** as much as possible and **client components** wherever we need user interactions or event handling.
- **Pros of SSR**:
  - Since a ready-made HTML is provided to the browser, It makes the initial load of the pages faster.
  - great for SEO. Your content is present before you get it. So search engines can index it and crawl it efficiently.
  - your site will be ranked higher in the search results if it is rendered on the server side. Google gives preferential search rankings to the sites with the fastest page load speed.
- **Cons of SSR**:
  - You're generally processing/rebuilding the same application multiple times - once on the client and once on the server. It can be costly and resource-intensive.
  - With **SSR**, the browser displays the web page faster, but it still needs time to make it interactive. As a result, the app looks ready for interaction while the code is still being processed in the background. If the user tries to interact with the app during this period, there can be a delay in the browser’s response.
  - When the number of visitors increases on your site, with each user accessing a new page, it has to send a server request every time. Resulting in higher server costs.

## Static Site Generation (SSG), or Static Data Fetching

- **SSG** is the default data fetching in `Next.js`.

  - In this approach, data is fetched at build time once then cached. The cached data is then reused on every request.
  - This is a good technique to use for pages that do not change often within your website e.g., blog posts page, it can always be fetched from the cached.
  - This boosts performance to some extent since the pages are now static and the content are retrieved from the cache instead.
  - This method ensures that the load on the database is reduced by minimizing the number of requests.

- We use `getStaticProps` function for SSG. `getStaticProps` is a server-side function that will only be called at build time. The build will then use the response from `getStaticProps` to generate a static webpage.

## Client-Side Rendering (CSR)

- **CSR** means rendering pages directly in the browser. All logic, data fetching, templating, and routing are handled on the client rather than the server.
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

## Incremental Static Regeneration

- Another data fetching method in `Next.js` is called **Incremental Static Regeneration** (ISR).

  - In this approach, data is fetched and cached which is then reused on each request until it reaches a specific internal of time.
  - This method is useful if the data changes and you want to ensure the application shows the latest version without having to rebuild the application.

# Server Actions in Next.js

- **Server actions** are built on **React Actions** that you can define in **server components** and/or calls from **client components**. **Server actions** are JavaScript `async` functions that run on the **server** by the user interactions on the **client**.

# Resources

1. [nextjs.org/docs - Data Fetching](https://nextjs.org/docs/pages/building-your-application/data-fetching)
2. [developer.mozilla.org - How_browsers_work](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)
