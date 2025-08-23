# Node.js

## Table Of Contents

# Node.js

- **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript code outside of a web browser - like on servers, desktop applications, or command-line tools.

## `node_modules`

- Unused `node_modules` with `NPKill`

  - **NPKill** is a command-line tool that scans your system for unused `node_modules` folders and allows you to delete them with ease. It is lightweight, fast, and helps in cleaning up your disk space in just a few clicks.
  - **Why Should You Use npkill?**

    - Saves Disk Space: Unused `node_modules` folders can take up gigabytes of space. npkill helps you reclaim that space effortlessly.
    - Boosts Productivity: Manually searching for and deleting these folders is time-consuming. `npkill` automates the process.
    - User-Friendly Interface: `npkill` provides an interactive CLI (Command Line Interface) that makes it easy to navigate and delete folders.

  - **How to Install and Use NPKill**
    - Step 1: Install **NPKill** Globally
      ```sh
        npm install -g npkill
      ```
    - Step 2: Run NPKill
      ```sh
        npkill
      ```
    - Step 3: Navigate Through the List
      - **NPKill** will show you all `node_modules` folders found in your system. The interactive CLI allows you to navigate using:
        - **Arrow keys** to move up and down
        - **Enter key** to delete a selected `node_modules` folder
        - **Ctrl + C** to exit

# Resources and Further Reading
