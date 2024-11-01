# TypeScript

## Table Of Contents
- [Further Reading]()
    - [TypeScript Basics](https://dev.to/pranta07/typescript-basics-3g9i)
    - [TypeScript Tutorial for Beginners [2022]](https://www.youtube.com/watch?v=d56mG7DezGs)
    - [Typescript vs Javascript](https://dev.to/jordandev/typescript-vs-javascript-4iee)
    - [Learn TypeScript – The Ultimate Beginners Guide](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
    - [Compiling TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling)

# Introduction to TypeScript
* __TypeScript__ is a language made by __Microsoft__. It is a superset of __JavaScript__ meaning it _adds features to vanilla JavaScript_. __TypeScript__ adds static typing to JavaScript. What the does this mean?

* __Vanilla JavaScript__ is _dynamically typed_, which means the type (_const_, _string_, _int_ etc) is checked at run time, which can be missed.In __TypeScript__, Types checked before run-time (tracking bugs before shifting your code). This means its easier to spot bugs early on.

# TypeScript vs JavaScript
```js
// JavaScript
var name = 'rodgers',
    age = 25,
    programmer = true;
```

```ts
// TypeScript
let name: string = 'rodgers',
    age: number = 25,
    programmer: boolean = true;
```

# When to use Type Script
* The benefits of TypeScript kick in when you are working on a large project ( more than 2 files), otherwise it doesn't really make sense to use it.