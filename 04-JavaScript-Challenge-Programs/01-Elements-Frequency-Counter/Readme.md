# Elements Frequency Counter

# Program Description

- iterate over the array and for each element, check if it already exists as a key in an object. If it does, increment its count; otherwise, initialize its count to 1.

  ```js
  // elements frequency counter

  const sampleArray = [1, 2, 3, 4, 5, 5];

  const elementsFrequencyCounter = (array) => {
    const arrayCounterObject = {};

    array.forEach((element) => {
      if (arrayCounterObject[element]) {
        arrayCounterObject[element]++;
      } else {
        arrayCounterObject[element] = 1;
      }
    });
    console.log("Array Counter Object: ", arrayCounterObject);
    return arrayCounterObject;
  };

  elementsFrequencyCounter(sampleArray); // output: Array Counter Object:  { '1': 1, '2': 1, '3': 1, '4': 1, '5': 2 }
  ```

- Let's breakdown the code:
  - `if (arrayCounterObject[element]) {`: This line checks if the current element (`element`) exists as a **key** in the `arrayCounterObject`. In JavaScript, accessing an object property that doesn't exist returns `undefined`, which is `falsy`. So, if the `element` exists as a key in the `arrayCounterObject`, this condition evaluates to `true`.
  - `arrayCounterObject[element]++;`: If the `element` already exists in the `arrayCounterObject`, this line increments the count associated with that element by 1. It's equivalent to `arrayCounterObject[element] = arrayCounterObject[element] + 1`;. This way, it updates the count of occurrences for that element.
  - `else { arrayCounterObject[element] = 1; }`: If the element doesn't exist as a key in the `arrayCounterObject`, this line initializes the count for that element to 1. This means it's the first occurrence of that element in the array.
