# Fundamentals Of React Application

## Table of Contents

# 3 React Core Concepts

- There are three core concepts of **React**
  1. Components
  2. Props
  3. State

# Compilers, Transpilers, and Optimizers in React App

- The important thing to understand is that **transpilers**, **compilers**, and **optimizers** are programs that take a text file containing your code, analyze it, and produce a new text file of different but functionally equivalent code.

# Transpilers

- A **transpiler** is a program that analyzes piece of code and outputs functionally equivalent code in a different programming language, or an adjusted version of a code in the same programming language.
- **React** devs have been using a **transpiler** for years to convert **JSX** to the code that is actually run by the **JavaScript engine**.
- For example, if you wrote the following **React** code using **JSX**:

  ```jsx
  function App() {
    return <Item item={item} />;
  }

  function Item({ item }) {
    return (
      <ul>
        <li>{item.desc}</li>
      </ul>
    );
  }
  ```

- it becomes, after transpilation:

  ```jsx
  function App() {
    return _jsx(Item, {
      item: item,
    });
  }

  function Item({ item }) {
    return _jsx("ul", {
      children: _jsx("li", {
        children: item.desc,
      }),
    });
  }
  ```

- This is the code that is actually sent to the browser. Not HTML-like syntax, but nested function calls passing plain JavaScript objects that **React** calls '**props**'.
- You can quickly generate and examine the output of transpiled **JSX** using [Babel](https://babeljs.io/repl).

# Compilers

- From a **Computer Science** background, you might have mostly been exposed to **compilers** as a program that converts the code you write into machine language (the binary code that a processor actually understands).
- Enter **React Compiler**. A program that analyzes the text of your **React** code, and produces new code ready for **JSX transpilation**. But that new code has some extra things added to it.

# Resources
