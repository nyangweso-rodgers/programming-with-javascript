# JavaScript

## Table of Contents
1. [Introduction to JavaScript](#Introduction-to-JavaScript)
    - [Difference between Java and Javascript](#Difference-between-Java-and-Javascript)
    - [Features of JavaScript](#Features-of-JavaScript)
    - [How do Engines work?](#How-do-Engines-work?)
    - [What CAN in-browser JavaScript do?](#What-CAN-in-browser-JavaScript-do?)
    - [What CAN'T in-browser JavaScript do?](#What-CAN'T-in-browser-JavaScript-do?)
    - [Languages "over" JavaScript](#Languages-"over"-JavaScript)
    - [The Modern mode, "use strict"](#The-Modern-mode,-"use-strict")
    - [Definitions of Terms](#Definitions-of-Terms)
    - [Attaching Scripts to a Webpage](#Attaching-a-script-to-a-Webpage)

2. [JavaScript Fundamentals]()
    - []()

3. [Further Reading]()
    - []()
# Introduction to JavaScript
* __JavaScript__ was initially created to make "web pages alive". the programs in this langauge are called __scripts__. they can be written right in a web page's HTML and run automatically as the page loads. __Scripts__ are provided and executed as plain texts. they don't need special preparation or compilation to run. - in this aspect, __JS__ is very different from another programming language called __Java__.

* Today, __JS__ can execute not only in the __browser__, but also on the __server__, or actually on any device that has a specal program called the __JavaScript Engine__. The browser has an embeded engine sometimes called a "__JavaScript virtual machine__". Different engines have different 'codenames'. For example:
    * __V8__ - in Chrome and Opera
    * __SpiderMonkey__ - in Mozilla Firefox
    * there are other codenames like:
        -  "__Trident__" and "__Chakra__" for different versions of Internet Explorer, 
        - "__ChakraCore__" for Microsoft Edge, 
        - "__Nitro__" and "__SquirellFish__" for Safari, e.t.c.,

# Difference between Java and JS
* __Java__ is an __OOP programming__. It creates applications that run in a _virtual machine_ or _browser_. __JavaScript__ is an __OOP scripting language__. The code is run on browser only.

# Features of JavaScript
* it is a lightweight, interpreted programming language
* it is designed for creating network-centric applications
* it is complementary to and integrated with Java
* it is open and cross-platform scripting language

# How do Engines work?
* Basics of Engines are as follows:
    1. the engine (embeded if it's a browser) reads ('parses') the script
    2. then it converts ('compiles') the scripts to the machine language
    3. and then the machine code runs pretty fast.

* The __engine__ applies optimizations at each step of the process. it even watches the compiled scripts as it runs, analyzes the data that flows through it, and applies optimizations to the machine code based on that knowledge. when it's done, scripts run quite fast.

# How Does JS work?
* When you write __JS__, how does the browser understands what has been written? This is handled by a __JS Engine__ and different browsers have different __JS Engine__. 

# V8 Engine
* the purpose of __v8 Engine__ is to convert __JS code__ into a __binary__ so that the computer can understand. Components of the __v8 Engine__ are as follows:

    * __Memory Heap__: this is where memory allocation happens

    * __Call Stack__: this is to keep track of where we are in the code execution.

* _Remarks_: 
    * _How do we get to machine code?_: To get to machine code, __JS file__ will either have to be __compiled__ or __interpreted__.

    * _Compilation_: the entire source code is converted to machine code at once.

    * _Interpretation_: there is an interpreter which runs through the source code and executes it line by line.

    * _Is JS compiled or interpreted?_: JS used to be purely interpreted language  but the problem with an __interpreted__ language is that they are much, much slower than the __compiled__ languages. Modern __JS Engine__ now uses both a mix between _compilation_ and _interpretation_ which is __J-I-T__ (Just In Time) compilation.

    * The __compiler__ and __interpreter__ are not sufficient for efficiency, that's why __JIT__(Just In Time) comes into the picture. So, JavaScript is a collection of compilers as well as interpreters which are also known as JIT.

    * __JIT__ compilation is a method for improving the performance of the code. It decides the most frequently used code, then compiles it to machine code.

# What CAN in browser JavaScript do?
Modern __JS__ is a 'safe' programming language. it does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it. __JS__ capabilities greatly depend on the environment it's running in. For example, __Node.js__ supports functions that allow __JS__ to read/write arbitrary files , perform network requests e.t.c., __in-browser JS__ can do anything related to webpage manipulation, interaction with the user, and the webserver.

For instance, __in-browser JS__ is able to:
* add new HTML to the page, change the existing content and modify styles.
* react to users actions, run on mouse clicks, pointer movements, key presses.
* send requests over the network to remove servers, download and upload files (so called AJAX and COMET technologies)
* get and set cookies, ask questions to the visitor and show messages.
* remember the data on the client side ('local storage')

# What CAN'T in-browser JavaScript do?
*__JS's__ abilities in the browser are limited for the sake of the user's safety. the aim is to prevent an evil webpage from accessing private information or harming the user's data. Examples of such restrictions include:
    * JS on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. it has not direct access to OS system functions.

    * different tabs/windows generally do not know about each other. sometimes they do, for example when one window uses JS to open the other one. but even in this case, JS in from one page may not access the other if they come from different sites (from a different domain, protocol or port). This is called the "__Same Origin Policy__". To work around that, both pages must agree for data exchange and contain a special JS code that handles it.

    * JS can easily communicate over the net to the server where the current page came from. but its ability to receive data from other sites/domains is crippled. thouh possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. once again, that's a safety limitation.

_REMARKS_: 
* _such limits do not exist if JS is used outside of the browser, for example on a server. modern browsers also allow plugins/extensions which may ask for extended permissions._
* _What makes JS unique?_: There are at least 3 great things about JS:
    * full integraton with HTML/CSS
    * simple things are done simply
    * support all major browsers and enabled by default.
* _JS is the only browser technology that combines these three things._
* _JavaScript is a case-sensitive language. The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters_

# Languages "over" JavaScript
* Recently, plethora of new languages appeared, which _transpiled_ (converted) to JS before they run in the browser. Modern tools makes the _transpilation_ very fast and transparent, actually allowing developers to code in another language and auto-converting it "under the hood". __examples of such languages__:
    1. __CoffeeScript__ - is a "syntactic sugar" for JS. it intoduces shorter syntax, allowing us to write clearer and more precise code. usually, Ruby devs like it.
    2. __TypeScript__ - is concentrated on adding "_strict data typing_" to simplify the development and support of complex systems. it's developed by __Microsoft__.
    3. __Flow__ - also adds data typing but in a different way. it's developed by __Facebook__
    4. __Dart__ - is a standalone language that has its own engine that runs in non-browser environments (like mobile-apps), but also can be transpiled to JS. it's developed by __Google__.

# The Modern mode, "use strict"
* For a long time, __JavaScript__ evolved without compatibility issues. new features were added to the language while old functionality didn't change. That had the benefit of never breaking existing code. but the downside was that any mistake or an imperfect decision made by JS creators got stuck in the language forever. This was the case until 2009 when __ECMAScript__ (ES5) appeared. it added new features to the language and modified the existing ones. to keep the old code working, most modifications are off by default. you need to explicitly enable them with a special directive "__use strict__"

* The directive looks like a string: "__use strict__" or __'use strict'__. when it is located at the top of the script, the whole script works the "modern" way.
_Remarks_:
    * make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
    * only comments may appear above "use strict"
    * there is no directive like "no use strict" that reverts the engine to old behavior.once we enter strict mode, there's no return.
    * for the future, when you use a browser console to test features, please note that it doesn't "use strict" by default.

# Attaching a script to a Webpage
* For server-side environments (like __Node.js__) you can execute the script by command like "__node my.js__". JS programs can be attached to any part of an __HTML__ document with an help of a __< script >__ tag which contains JS code which is automatically executed when the browser processes the tag. The __< script >__ tag has a few attributes that are rarely used nowadays but can still be found in old code.

# JavaScript Runtime
* The __JavaScript engine__ doesn’t run in isolation. It, along with a number of other components, operates in the __JavaScript Runtime Environment__(__JRE__). __JRE__ is responsible for making JavaScript asynchronous.  It is the reason JavaScript is able to add event listeners and make HTTP requests asynchronously.

# What is the runtime environment?
* The __JRE__ gives a program access to built-in libraries and objects that allow it to communicate with the outside world and make code work.

* __JRE__ is just like a container which consists of the following __components__:
    1. __JS Engine__ (which in turn is made up of the heap and the call stack)
    2. __Web API__: The Web APIs aren't part of the JavaScript engine, but they are part of the browser's runtime environment. Modern browsers have a big range of APIs that allow us to do a lot of different things.
    3. __Callback Queue or message queue__: This is where your asynchronous code gets pushed to, and waits for the execution.
    4. __Event Loop__: Event loops continue indefinitely, checking the Main stack for frames to execute. If none, then checking the Callback queue for codes to execute, and finally popping the message from there to the Main Stack for execution.
