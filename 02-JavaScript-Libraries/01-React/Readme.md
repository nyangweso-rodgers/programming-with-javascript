# React

## Table of Contents

# Introduction to React

- `React` is a `JavaScript library` used to build _User Interfaces_ developed and maintained by **Facebook**. It is capable of building complex and highly interactive single-page web applications.

# How does `ReactJS` Work?

- `ReactJS` creates a **VIRTUAL DOM** in memory. Instead of manipulating the browser's `DOM` directly, `ReactJS` creates a **virtual DOM** in memory, where it does all the necessary manipulating, before making the changes in the browser `DOM`.
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

# Resources

1. [react.dev/learn](https://react.dev/learn)
2. [Hashnode - 7 Best Practices for Keeping a React Project Clean and Efficient](https://theankurtyagi.hashnode.dev/7-best-practices-for-keeping-a-react-project-clean-and-efficient)
3. [freeCodeCamp - Front End JavaScript Development Handbook – React, Angular, and Vue Compared](https://www.freecodecamp.org/news/front-end-javascript-development-react-angular-vue-compared/)
