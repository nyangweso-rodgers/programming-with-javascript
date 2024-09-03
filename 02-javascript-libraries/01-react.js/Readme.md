# React

## Table of Contents

# Introduction to React

- **React** is a **JavaScript library** used to build **User Interfaces** developed and maintained by **Facebook**.

# How does ReactJS Work?

- **React** creates a **VIRTUAL DOM** in memory. Instead of manipulating the browser's `DOM` directly, `ReactJS` creates a **virtual DOM** in memory, where it does all the necessary manipulating, before making the changes in the browser `DOM`.
- `ReactJS` only changes what needs to be changed! i.e., it finds out what changes have been made, and changes only what needs to be changed.

# Advantages of `ReactJS`

- Very fast, gives smooth experience to users
- Easy to develop and maintain due to its **Components** based structure. A **component** basically represent a piece of UI. Once a **component** is created, it can be used as many times as you wish to.
- can be use on client-side and server-side devices
- reusable components rduce development time and help build complex functionalities
- data is updated by refreshing UI, making it efficient

# Cons OF `ReactJS`

- `ReactJS` uses traditional `MVC` framework and hence requires complex configuration.
- An in depth knowledge is required for integration the UI into `MVC framework`
- **Redux** and **Routing** are external tools that need to be learnt, whereas `Angular` has most of these tools inbuilt.

# Features of React

## Feature Of React #1: React Virtual DOM

- **Virtual DOM**: uses a strategy that updates the **DOM** without having to redraw all the webpage elements. Every time the **DOM** changes, browsers need to recalculate entire layout and then repaint the web page which makes the web app slow. To overcome this, we have **virtual DOM**. Evrey time the state of our application changes, the **virtual DOM** gets updates instead of the real **DOM**.

- Whenever the new element is added to the UI, a new **virtual DOM** associated with that element is created. If state of this element chnages, a second new **virtual DOM** is created which will be compared with the previous **virtual DOM**. It then updates ONLY the object on the real **DOM**.

## Feature Of React #2: Unidirectional Data Flow

- In **React**, data flow refers to how data is passed between **components**.
- **React** employs a **one-way data flow** or **unidirectional data flow**. It is sometimes referred to as the **one-way data binding model**.
- In a **unidirectional data flow**, data flows in a single direction, which is from a parent component down to its child components. In **React**, this is achieved by passing data down through `props` _which are essential properties that can be passed down from a parent component to its child components._. Once a child component receives `props` from its parent, it can use those `props` to render itself.
- This **unidirectional flow** of data helps to keep the application's data model simple and also makes it easier to debug the application, as changes to data can be easily traced back to their source.

## Feature Of React #3: `JSX`

- **React** doesn’t have `HTML` files, `HTML` tags are rendered directly inside `JavaScript`. This approach makes **React** faster.
- `JSX` is stricter than `HTML`:
  - You have to close tags like `<br />`.
  - Your component also can’t return multiple `JSX` tags.
- Example:
  ```jsx
  AboutPage = () => {
    return (
      <>
        <h1>Header 1</h1>
        <p>
          Hello there.
          <br />
          How do you do?
        </p>
      </>
    );
  };
  ```
- If you have a lot of HTML to port to JSX, you can use an [oneline converter](https://transform.tools/html-to-jsx)
- 3 Rules of `JSX`:

  1. Return a single root element

     - To return multiple elements from a component, **wrap them with a single parent tag**.
     - E.g., For example, you can use a `<div>`:

       ```jsx
       <div>
         <h1>My header!</h1>
         <ul>
           <li></li>
           <li></li>
           <li></li>
         </ul>
         <button></button>
       </div>
       ```

     - If you don’t want to add an extra `<div>` to your markup, you can write `<>` and `</>` instead:
     - This empty tag is called a [Fragment](https://react.dev/reference/react/Fragment).
     - **Fragments** let you group things without leaving any trace in the browser `HTML` tree.
       ```jsx
       <>
         <h1>My header!</h1>
         <ul>
           <li></li>
           <li></li>
           <li></li>
         </ul>
         <button></button>
       </>
       ```

  2. Close all tags

     - `JSX` requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>`oranges must be written as `<li>`oranges`</li>`.

  3. camelCase, all/most of the things

     - `JSX` turns into `JavaScript` and attributes written in `JSX` become keys of `JavaScript` objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.

     - This is why, in `React`, many `HTML` and `SVG` attributes are written in **camelCase**. For example, instead of `stroke-width` you use `strokeWidth`. Since class is a reserved word, in `React` you write `className` instead.

       ```jsx
       <div className="container">This is a div!</div>
       ```

# Angular vs React

|       Parameter       |                                                                              Angular                                                                              |                                                                                                     React                                                                                                     |
| :-------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         Type          |                                             Complete framework (everything is inbuilt including Routers, HTTP e.t.c)                                              |                                                                     `ReactJS` is a JS library and is much older compared to `AngularJS`.                                                                      |
|   Use of Libraries    |                                                           `AngularJS` is a complete solution in itself                                                            |                                   `ReactJS` can be packaged with other programming libraries. (Since it is just a library it doesn’t have much of inbuilt functionalities)                                    |
|    Learning curve     | Learning `Angular` is not easy for beginners. Thus, it requires lots of training. But it includes most of the concepts and thus you don’t need any external tools | It is easier to grasp compared `Angular`. However, it is difficult to learn when augmented with `Redux`. Quick to learn React whereas it takes time to learn external tools such as redux which is essential. |
|   Installation Time   |                    `AngularJS` is easy to set up but may lead to an increase in coding time which also results in delayed project deliveries.                     |                                                      `ReactJS` takes longer to set up. But, it is really fast for delivering projects and building apps.                                                      |
|     Best Feature      |                                                  `AngularJS` offers a limited amount of freedom and flexibility.                                                  |                                                   `ReactJS` gives you the freedom to choose the tools, architecture, and libraries, for developing an app.                                                    |
|     Data Binding      |           `AngularJS` uses the two-way data binding method. It helps you to ensure that the model state automatically changes when any change is made.            |                                `ReactJS` language uses one-way data binding, which means that the UI elements can’t be changed without updating the corresponding model state.                                |
| Testing and Debugging |                                    In`AngularJS`, testing and debugging for a complete project is possible with a single tool.                                    |                                                                   `ReactJS` requires a set of tools to perform different types of testing.                                                                    |
|   Application Types   |                              You should `AngularJS` framework If you want to develop a SPA(Single Page Application) and mobile apps.                              |                                                                  Use `ReactJS` if you want to develop Native apps, hybrid apps, or web apps                                                                   |
|     Language used     |                                          `AngularJS` uses Typescript which requires a bit of prior learning to be done.                                           |                                                                    `ReactJS` is written in JavaScript which many programmers are familiar                                                                     |

# Improving `React` App Performance & Managing Large Datasets

## Improving `React` App Performance: using Pagination

- Pagination also helps in managing and viewing larger data sets in `React`.
- _Limitations_ of Pagination:
  - Requires additonal UI elements
  - Discountinous UI experience

## Improving `React` App Performance: Infinite Scroll

- **Infinite Scroll** is an improved version of **pagination**.
- _Limitations_ of Infinite Scroll:
  - Users get lost

## Improving `React` App Performance: Windowing

- Using `react-window` library
- _Limitations_ of **Windowing**:
  - Complex implementation
  - height and positioning constraints

## Improving `React` App Performance: Eliminating Needles Renders

- When Does React Re-render Components?
  - _State changes_: state or prop changes in a component or its parent
  - _Key changes_:
  - _Life cycle methonds_:
- **React Component Keys**

# React Frameworks

- Some of the drawbacks of the CRA (create-react-app) library include:
  1. Build time is slower when compared with alternative
  2. Limited control over build customization
  3. Lack of Server-Side Rendering(SSR)
  4. Outdated as there has been no major update to CRA since 2021.
- Performance Comparision metrics include:
  1. time taken for the development server to start
  2. build time
  3. deployment time, and
  4. first contentful paint

## 1. Next.js

- Next.js by Vercel is the full-stack React framework for the web.
- **Features** include:
  1. Server Side Rendering: Performance can be improved by using the SSR, with pre-rendered pages for faster load times.
  2. API Routes: With API routes, we can integrate full-stack development in NextJS.
  3. Automatic Code Splitting: By following the recommended project structure, we can have better code splitting. Thus improving performance.
  4. Easy Integration with Vercel: NextJS was built by the Vercel team. So, it became easy to deploy with Vercel.
- Use Case:
  - It is best suited for building a Serverless application that has no or little integration with the server.

## 2. ViteJs

- **Vite** is more focused on performance for building projects that are quick and have less loading time. In contrast to traditional bundlers like Webpack, Vite uses a development server that provides near-instant hot module replacement (HMR) without needing to bundle the entire application. In this way, they can have a faster development server.
- Features include:
  1. Faster Development Server: With native ES modules and modern browser capabilities it provides a faster development server.
  2. Rich Plugin Support: Vite has flexible plugin support. You can easily integrate different plugins to extend the capabilities of Vite.
  3. Optimized Build Process: Tree shaking, code splitting, and other performance enhancements are implemented at build time.
  4. SSR and SSG: Vite also supports Server Side Rendering and Static Site Generation for better performance.
- Use Case:
  - Vite best suites for developing a portfolio or blog website with better performance.

## 3. Remix

- Remix is a full-stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.
- Remix focuses on building a better user experience. It can be used to build a full-stack application. If you're familiar with server-side MVC web frameworks like Rails and Laravel, Remix is the View and Controller.
- Features include:
  1. Data Loading: It uses loaders to fetch data on the server before rendering the page. 0
  2. Easy Routing: It provides a file-based routing system. It provides routing based on the directories you are going to create. This feature is also supported in NextJS.
  3. Server Side Rendering: It also supports the SSR for providing better performance.
  4. Forms and Actions: Remix includes built-in support for form handling and actions. This helps manage form submissions and actions efficiently.
- Use Case:
  - It is best suited for building a project that requires advanced routing, SSR, and a focus on performance.

## 4. Gatsby

- Gatsby is a React-based open-source framework with performance, scalability, and security built-in.
- Gatsby is another framework based on React that is focused on building fast, secure, and optimized websites. It is primarily used for creating static sites but also supports dynamic content through APIs and integrations.
- Features include:
  1. Server Side Generation(SSG): It also supports Gatsby and pre-renders content to static HTML files.
  2. Progressive Web App: Gatsby has built-in PWA capabilities, enabling fast, offline-ready web experiences with native app-like functionality.
  3. JAMstack: JavaScript, APIs, and Markup let you build websites by serving static files from a CDN and using APIs.
  4. Content Management System: In Gatsby, it serves as a backend where content is authored and Gatsby pulls this content into its static site build process.
- Use Case:
  - Best suites for building a blog using a Content Management System through Gatsby.

# Resources

1. [react.dev/learn](https://react.dev/learn)
2. [Hashnode - 7 Best Practices for Keeping a React Project Clean and Efficient](https://theankurtyagi.hashnode.dev/7-best-practices-for-keeping-a-react-project-clean-and-efficient)
3. [freeCodeCamp - Front End JavaScript Development Handbook – React, Angular, and Vue Compared](https://www.freecodecamp.org/news/front-end-javascript-development-react-angular-vue-compared/)
4. [freecodecamp.org/news/new-react-19-features/](https://www.freecodecamp.org/news/new-react-19-features/)
