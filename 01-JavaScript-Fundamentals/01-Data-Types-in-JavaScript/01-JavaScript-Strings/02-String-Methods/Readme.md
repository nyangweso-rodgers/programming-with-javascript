# JavaScript String Methods

## Table Of Contents

## String Method 1: `replace()`

- `replace()` method replaces a specified value with another value in a string.

  ```js
  // replace() string Method

  const fullName = "Rodgers Nyangweso";

  const replaceStringMethod = (sampleString) => {
    sampleString = sampleString.replace("Nyangweso", "Omondi");
    return sampleString;
  };

  console.log(replaceStringMethod(fullName)); // Output: Rodgers Omondi
  ```

- Note:
  - `replace()` method does not change the string it is called on.
  - `replace()` method returns a new string.
  - `replace()` method replaces only the first match
  - By default, the `replace()` method replaces only the first match:

# Resources
