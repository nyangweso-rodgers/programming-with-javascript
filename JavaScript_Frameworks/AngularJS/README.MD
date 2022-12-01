# Angular

## Table Of Contents
- [Introduction to Angular](#Introduction-to-Angular)
- [Universal benefits of Angular](#Universal-benefits-of-Angular)
- [References]()

# Introduction to Angular
* __Angular__ is a tool to help you build interactive websites. i.e., Framework. for now and most probably in future, __Angular__ most popular competition is __jQuery__. __Angular__ was invented by __Misko Hevery__ - at the time, he was working at Google.

# Universal benefits of Angular
These are benefits that apply no matter what kind of application you are buiding and no matter what kind of development team or compnay you work at:
* _Reduction of cost_: using a framework to build a web application over building everything yourself is simply going to reduce the amount of cost that it takes to build the application. that's going to be realized in developer time, and bug fixing, instability.
* _Angular is very Standards Compliance_: standard compliance means that your website is going to run in more browsers and be able to reach more users. this includes things like ES6 or better, modules, internationalization and accessibility
* Angular is extremely performant: it's as fast or faster than any other frameworks.
* Angular is open source
* Angular is very Popular (popularity)
* Documentation

# Subjective and Situational benefits of Angular
* _Angular is a Framework_: i.e., it comes with pieces will need to build a website built right right into it. for example, __Angular__ comes with a _Router_, _http_, _forms handling_ library, rxjs which is a way to handle asynchronous data, e.t.c. these are benefits because you have to make less decisions .
* _Uniformity_: a typical Angular application is going to look a lot more like another Angular application .
* Angular is backed by Google.
* Angular is written using __TypeScript__: TypeScipt is a superset of JavaScript that also add types to it.

# Basic Features of Angular
1. with __Angular__, you can easily build __Progressive Web Apps__: __Progressive Web Apps__ are emerging standards that allow web applications to be installed like a mobile application, to have an icon on a phone and to open up on a phone, or even to be available offline.
2. __Angular supports Lazy Loading__: this allows you to reduce the size of the data that initially needs to be downloaded to the browser in order for the application to begin working. this can improve the perceived performance of your application. 
3. __Angular has a Fully featured Forms Library__: it's very easy with __Angular__ to write very complex data input forms and handles complex validation and other aspects of forms.
4. __Angular is built on top of RxJS Library__: the __RxJS Library__ is a very modern library used to handle asynchronous data. from the developer's standpoint, this can ease the amount of time it takes to make asychronous features work in an application.
5. __Angular has a fully featured Router__
6. __Angular has a very robust, fully featured Animation Library__: this allows you to use animations when you are transition from one page to another, when  you sort list of data, when you add items to a list of data, or remove items from a list of data.

# Advanced Features 
1. __Angular supports server-side rendering__: _server-side rendering_ is the process of rendering your first page view on the server. so the server creates the HTML and CSS and sends it to the browser instead of asking your friend framework to do that. this makes the initial page view much faster and more parsable by search engines.
2. Angular is very Mobile Friendly.
3. __Angular Language Service__: this is a service that you can use in order to get better intellisense and debugging in templates.
4. __ngUpgrade Library__:  this library allows you to take existing __AngularJS__ application and slowly migrate it to Angular, running both farmeworks side by side in the same web application, and as you have available resources, you can rewrite pieces of your AngularJS application into Angular, practically, a file at a time, while never interrupting the service of your application and almost never having to support two copies of the same code. 

# Angular Architecture 
1. __One Way Data Flow__: this is an architectural construct that has come in __JavaScript__ world in force recently. it's really about change detection. with this system, some kind of change happens to the state of component.

2. __Dependency Injection__: this is one of the cornerstone of the both the __AngularJS__ and __Angular__. it will be familiar to server-side developers who use strongly-typed langauges like C# or Java. these languages have long utilized dependency injection and Angular uses a similar architecture.

3. __Components__: Custom Component share another staple of modern JavaScript frameworks. AngularJS had them and Angular is the same.

4. __Directives__: are a way to add new capabilities to an element of your display.

5. __Templates__: in Angular specify how components display. 

6. __Zone.js and Change Detection__: one thing you want for a good framework is for it to rerender the display when its state changes. state change doesn't just happen spontaneously. __Zone.js__ is the key to change detection: it creates a wrapper around all asynchronous operations in the browser such as user interactions, HTTP, Timers, and any other events that can cause changes in state. __Zone__ knows when any of these operations completes.

7. __Rendering Targets__: with web frameworks we always assume that all we will use them for is to create a typical website and, as usual, we will be rendering on the browser, we send code, templates and data to the browser, and then the framework takes all that, puts it together, and renders it. But with the rise of mobile and other needs it could bacame advantageous to create the same experience on a phone. we could also take advantage of rendering on a server for both speed and SEO, and there's even reasons to create things such as native desktop apps and other rendering targets. most modern frameworks today allow you to not only use your code in a browser, but in other places as well. Angular is no different. __Angular's__ built to allow itself to be rendered to any number of devices by changing the rendering engine. __Angular__ comes with two packages that are used by default to enable rendering to the browser and the DOM. these are the:
    * Browser-platform library
    * browser-platform-dynamic library

    They allow just-in-time compilation and precompilation for browsers. But __Angular__ supports many different rendering targets currently and may support even more in the future. __Rendering Targets__:

    * Browser/DOM
    * Server-Side Rendering with Angular Universal
    * Native Mobile Apps 
    * Native Desktop Aps 
8. __Tooling__: one of the greatest benefits of Angular is the number of tools that are available to add even more features to your applications and ease your development