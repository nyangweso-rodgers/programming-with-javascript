# NodeJS

## Table Of Contents
- [What is Node JS?](#What-is-Node-JS?)
- [Why Node JS?](#Why-Node-JS?)
- [Disadvantages of NodeJs](#Disadvantages-of-NodeJs)
- [References]()
    - [Download for Windows](https://nodejs.org/en/)
    - [Create RESTful Api with Node.js , Express, MySQL](https://morioh.com/p/ef557595683a?f=5c21fb01c16e2556b555ab32)
    - [Buid and Deploy a Node.js Microservice Application](https://dormoshe.io/trending-news/build-and-deploy-a-nodejs-microservices-application-2966-57622?utm_source=twitter&utm_campaign=twitter)
    - [How to Get Started with Node.js – Beginner's Guide to Node](https://www.freecodecamp.org/news/introduction-to-nodejs)

# What is Node JS?
* __Node.js__ is a JavaScript runtime built on Chrome’s __V8 JavaScript engine__, a engine that helps chrome to understand javascript. i.e., __nodejs__ is interpreter just like compiler instead of relying on browser you can run __javascript__ on your machine. __Node.js__ allows you to run your __JavaScript__ code on the server like any other server-side technology. 

* You know that JavaScript is a programming language that is typically used in the browser. However, JavaScript is not limited to it. __Node.js__ allows you to run your JavaScript code on the server like any other server-side technology.

* __Node.js__ uses V8 and adds some extra features. For example, 
    - working with your local file system, 
    - opening & modifying files, 
    - adding data in your database, etc.

# Why use Node.js?
* Node.js is an open source server environment
* Node.js is free
* Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) i.e., cross-platform
* Node.js uses JavaScript on the server

# Why Node.js?
* A common task for a web server can be to open a file on the server and return the content to the client.

* Here is how __PHP__ or ASP handles a file request:
    1. Sends the task to the computer's file system.
    2. Waits while the file system opens and reads the file.
    3. Returns the content to the client.
    4. Ready to handle the next request.

* Here is how Node.js handles a file request:
    1. Sends the task to the computer's file system.
    2. Ready to handle the next request.
    3. When the file system has opened and read the file, the server returns the content to the client.

* __Node.js__ eliminates the waiting, and simply continues with the next request.

* __Node.js__ runs _single-threaded_, _non-blocking_, _asynchronous_ programming, which is very memory efficient.

# What Can Node.js Do?
* __Node.js__ can generate dynamic page content
* Node.js can create, open, read, write, delete, and close files on the server
* Node.js can collect form data
* Node.js can add, delete, modify data in your database

# What is a Node.js File?
* Node.js files contain tasks that will be executed on certain events
* A typical event is someone trying to access a port on the server
* Node.js files must be initiated on the server before having any effect
* Node.js files have extension "__.js__"
# Disadvantages of NodeJs
* Unstable API
* Lack of library support
* High demand for experienced resources
* Heavy Computing Tasks
* Asynchronous Programming Model