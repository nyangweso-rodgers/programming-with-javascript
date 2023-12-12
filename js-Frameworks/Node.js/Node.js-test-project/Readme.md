# Sample Project in `Node.js`

## Table Of Contents

# Project Setup

- Create the `Node.js-test-project` folder and run `npm init -y` to initialize the project.

# Task 1: Build a countdown timer

- build a countdown timer to count every second starting from 50.

  ```js
  let time = 50;

  let countdown = setInterval(update, 1000);

  function update() {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    console.log(`${min}:${sec}`);
    time--;

    if (time == 0 && sec == 0) clearInterval(countdown);
  }
  ```
