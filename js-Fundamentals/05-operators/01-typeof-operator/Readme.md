# The `typeof` Operator

- the `typeof` operator returns the type of an argument. it supports two types of syntax:

  ```js
  console.log(typeof 2); // Output: number
  console.log(typeof "2"); // Output: string
  console.log(typeof true); // Output: boolean
  console.log(typeof undefined); // Output: undefined
  console.log(typeof Math); // Output: object
  console.log(typeof Symbol("id")); // Output: symbol
  console.log(typeof null); // Output: object
  console.log(typeof alert); // Output: undefined
  ```

- **Remarks**:
  - for `null` it retuns `object`. this is an error in the language, it's not actually an `object`. it is an officially recognized error in `typeof`, kept for compatibility. of course, `null` is not an `object`, it is a special value with a seperate type of its own.

# Type Conversions

- Most of the time, **operators** and **functions** automatically converts the values given to them to the right type. for example, **alert** automatically converts any value to a `string` to show it. mathematical operations converts values to numbers. there are also cases where we have to explicitly convert a value to an expected type.

## 1. To `String`

- **ToString** string conversion happens when we need the string form of a value. for example, alert(value) does it to show the value

  ```js
  // we can also call the String(value) function to convert a value to a string
  let value = true;
  console.log(typeof value); // boolean

  value = String(value); // now value is a string true
  console.log(typeof value); // string
  ```

## 2. To `Number`

- **ToNumber**: numeric conversion happens in mathematial functions and expressions automatically. for example, when division is applied to non-numbers

  ```js
  // strings are converted to numbers
  console.log("78" / "45"); // Output: 1.7333333333333334
  ```

- we can use the `Number`(value) function to explicitly convert a value to a number

  ```js
  // we can use the Number(value) function to explicitly convrt a value to a number
  let str = "123456";
  console.log(typeof str); // Output: string

  let num = Number(str); // becomes number 123456
  alert(typeof num); // Output: 123456
  ```

- **Remarks**:

  - explicit conversion is usually required when we read a value from a `string`-based source like a text form but expect a number to be entered.
  - if the `string` is not a valid number, the result if such conversion is `NaN`. for instance
    ```js
    let age = Number("an arbitrary string intead of a number");
    console.log(age); // NaN, conversion failed.
    ```
  - Addition '`+`' **concatenates strings**:almost all mathematical operations converts values to numbers.a notable exception is the **addition** "+". if one of the added values is a `string`, the other one is also converted to a `string`. then, it concatenates (join) them.

    ```js
    console.log("1" + 2); // 12
    console.log(1 + "2"); // 12
    ```

  - this only happens if atleast one of the arguments is a `string`. otherwise values are converted to numbers.
  - so it doesn't matter if the first or second operand is a `string`. the rule is simple: if either **operand** is a `string`, the other one is converted into a `string` too. however, note that operations runs from left to right: if there are two numbers followed by a `string`, the numbers will be added before converted to a `string`
    ```js
    console.log(3 + 5 + "1"); // 81 and not 351
    console.log("1" + 3 + 5); // 135
    ```
  - **string concatenation** and conversion is a special feature of the **binary plus +**. other arithmetic operators work only with numbers and always convert their operands to numbers. for example:

    ```js
    console.log(2 - "1"); // 1
    console.log(2 / "4"); // 0 .5
    ```

  - the need to convert `strings` to `numbers` arises very often . for example if we are getting values from `HTML` form fields, they are usually `strings`. what if we want to sum them? the binary plus would add them as `strings`

    ```js
    let apples = "2";
    let oranges = "3";

    console.log(apples + oranges); // the binary plus concatenates the strings

    // if we want to treat them as numbers, we have to convert and sum them
    // both values converted to numbers before the binary plus
    console.log(+apples + +oranges); // 5

    // the longer variant
    console.log(Number(apples) + Number(oranges));
    ```

  - from the mathematician's standpoint, the abundance of pluses may seem strange but from the programer's standpoint, there's nothing special: **unary pluses** are applied first, they convert strings to numbers and then the binary plus sums them up. why are unary pluses applied to values before the binary ones? as we are going to see, that's because of their higher precedence.

### Numeric Conversion Rules

|     Value      |                                                                                becomes                                                                                |
| :------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   undefined    |                                                                                  NaN                                                                                  |
| true and false |                                                                                1 and 0                                                                                |
|     string     | whitespaces from the start and end are removed. if the remaining string is empty, the result is 0. otherwise the number is "read" from the string. an error gives NaN |

- Examples:
  ```js
  console.log(Number("1233")); // 123
  console.log(Number("123a")); // NaN
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  console.log(Number(undefined)); // NaN
  console.log(Number(null)); // 0
  ```

## 3. to `Boolean`

- **ToBoolean**: Boolean conversion is the simplest one. it happens in logical operations but can also be performed explicitly with a call to `Boolean(value)`. the conversion rules:

  - values that are intutively "empty", like `0`, an empty string, `null`, `undefined`, and `NaN` becomes `false`
  - other values becomes `true`

  ```js
  console.log(Boolean(1)); // true
  console.log(Boolean(0)); // false

  console.log(Boolean("hello")); // true
  console.log(Boolean("")); // false
  ```

- **NOTE**: a `string` with `zero` "0" is `true`. some languages like PHP treat "0" as false. but in JS, a non-empty string is always `true`
  ```js
  // a string with zero "0" is true. some languages like PHP treat "0" as false. but in JS, a non-empty string is always true
  console.log(Boolean("0")); // true
  console.log(Boolean(" ")); // spaces, is also true
  ```
