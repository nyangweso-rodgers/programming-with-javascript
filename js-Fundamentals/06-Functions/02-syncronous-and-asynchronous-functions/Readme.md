# Synchronous and Asynchronous Functions

## Table Of Contents

## Synchronous Functions

- **Blocking Execution**: In a **synchronous** execution model, each operation is performed one after the other in a sequential manner. If one operation takes time to complete (e.g., a network request or a file read), the entire program execution is blocked until that operation finishes.
- **Sequential Flow**: **Synchronous** functions have a straightforward, sequential flow. Each line of code is executed in order.

## Asynchronous Functions

- **Non-blocking Execution**: **Asynchronous** functions allow operations to be initiated and continue processing other tasks without waiting for the completion of the asynchronous operation.
- **Event-Driven**: **Asynchronous** operations are often used in event-driven environments, such as handling user input, responding to network requests, or reading files.
- `js` provides several mechanisms for handling asynchronous code:
  1. Callbacks
  2. Promises, and
  3. `Async/Await`
- **Asynchronous** programming allows developers to create responsive and efficient applications by avoiding unnecessary blocking.
