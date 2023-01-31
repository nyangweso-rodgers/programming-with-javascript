# NPM (Node Package Manager)

## Table Of Contents
- [Further Reading]()
    - [npm Docs](https://t.co/RPMiRcvpGh)

# Introduction to NPM
* __NPM__ is a popular package manager, which allows JavaScript developers to share useful packages like a tailwind, uuid, etc. __NPM__ is a default package manager for the __Node JS__ JavaScript runtime environment.

* __NPM__ provides 2 main functionalities:
    1. Online Repository
    2. Command line to install packages

* You can relate it with __Git__ and __GitHub__, _Git is a tool for tracking the changes into the git repo_, And _GitHub is an online hosting website that is used to host our code or pages_. That means __NPM online repository__ is used to host packages and __CLI__ is used to download those packages into our project.

* https://www.npmjs.com/ hosts thousands of free packages to download and use.

# How to Install NPM
* __NPM__ comes bundled with Node JS installation. That means once you install Node JS into your machine then NPM is also installed at the same time. You can check it with these 2 commands:
    - For Node use: node -v
    - And for NPM use: npm -v

# What is a Package?
* A __package__ is a collection of JavaScript files that can be used in your project. A __package__ in Node.js contains all the files you need for a __module__.

* __Modules__ are JavaScript libraries you can include in your project.

# Download a Package
* Open the command line interface and tell NPM to download the package you want. E.g., _download a package called "upper-case":_

    ```cmd
        C:\Users\Your Name>npm install upper-case
    ```

* Now you have downloaded and installed your first package!

* __NPM__ creates a folder named "__node_modules__", where the package will be placed. All packages you install in the future will be placed in this folder.

* My project now has a folder structure like this: __C:\Users\My Name\node_modules\upper-case__