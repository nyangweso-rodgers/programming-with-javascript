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
