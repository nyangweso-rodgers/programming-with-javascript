# Comparison Operators

- Like all other operators, a comparison returns a value. in this case, the value is a `boolean`
- a comparison result can be assigned to a **variable**, just like any other value
- **String Comparison**:
  - to see whether a `string` is greater than another, JS uses the so-called "dictionary" or "**lexicographical**" order. i.e., `strings` are compared letter-by-letter
  - case matters. a capital "A" is not equal to the lowercase "a". which one is greater? the lowercase "a". **Why?** because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).
- **Comparison of different types**:
  - when comparing values of different types, JS converts the values to numbers.

## Equals operator, `a == b`

- for comparison of different types:
  ```js
  // comparison of different types - JS onverts the values to numbers
  console.log("01" == 1); // true, string '01' becomes number 1
  ```
- for `Boolean` values, `true` becomes `1` and `false` becomes `0`
  ```js
  // For boolean values, true becomes 1 and false becomes 0
  console.log(true == 1); // true
  console.log(false == 0); // true
  ```

## Not Equals operator, `a != b`

## Greater than operator, `a > b`

- for numeric comparison:
  ```js
  console.log(4 > 2); // Output: true
  ```
- for `string` comparison:

  ```js
  // string comparison
  console.log("Z" > "A"); // Output: true

  console.log('Glow', > 'Glee'); // Output: true
  console.log('Z' > 'a'); // Output: false
  ```

- for comparison of different types:
  ```js
  // comparison of different types - JS onverts the values to numbers
  console.log("2" > 1); // true, string '2' becomes number 2
  ```

## Greater than or equals to operator, `a >= b`

## Less than operator, `a < b`

## Less than or equals to operator, `a <= b`

### Remarks

- **A funny consequence**:

  - if it's possible that at the same time: Two values are equal, one of them is `true` as a `boolean` and the other one is `false` as a `boolean`.
  - for example:

    ```js
    let a = 0;
    console.log(Boolean(a)); // false

    let b = "0";
    console.log(Boolean(b)); // true

    console.log(a == b); // true
    ```

    - from JS standpoint, this result is quite normal
    - an equality check converts values using the numeric conversion (hence '0' becomes 0), while the explicit Boolean conversion uses another set of conversion

- **Strict Equality**: a regular equality `==` has a problem, it cannot differentaite between `0` and `false`:

  ```js
  console.log(0 == false); // true

  // the same thing happens with an empty string:
  console.log("" == false); // true
  ```

  - this happens because the operands of different types are converted to numbers by the equality operator `==`. an empty string, just like `false` becomes a zero. what to do if we want to differentiate `0` from `false`? A strict equality operator `===` checks equality without type conversion. i.e., if a and b are of different types, then a === b immediately returns false without an attempt to convert them
    ```js
    console.log(0 === false); // false, because the types are different
    ```
  - there's also a "**strict non-equality**" operator `!==` analogous to `!=`. the strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less room for errors

- **Comparison with null and undefined**:

  - there is non-intuitive behavior when `null` or `undefined` are compared to other values
  - for a **strict equality** check `===`. these values are different because each of them is a different types
    ```js
    console.log(null === undefined); // false
    ```
  - for a **non-strict** check `==`. there's a special rule. these two are the "sweet couple": they equal each other (in the sense of ==), but not any other value
    ```js
    console.log(null == undefined); // true
    ```
  - **For maths and other comparisons <> <= >=** `null`/`undefined` are converted to numbers: `null` becomes `0`, while `undefined` become `NaN`
  - Now let's see some funny things that happen when we apply these rules. And, what's more important, how to not fall a trap with them:
    ```js
    // Strange result: null vs 0
    // let's compare null with zero:
    console.log(null > 0); // false
    console.log(null == 0); // false
    console.log(null >= 0); // true
    ```
  - mathematically, that's strange. the last result states that "`null`" is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false. the reason is that an equality check == and comparisons > < >= <= work differently. comparisons convert null to a number, treating it as 0. that's why null > 0 is false. on the other hand, the equality check `==` for `undefined` and `null` is defined such that without any conversions, they equal each other and don't equal anything else. that's why null == 0 is false.

- **An incomparable undefined**:

  - the value `undefined` shouldn't be compared to other values:

    ```js
    console.log(undefined > 0); // false
    console.log(undefined < 0); // false
    console.log(undefined == 0); // false
    ```

  - why does it dislike zero so much? we get these results because: - the above comparisons return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons, the equality check returns false because undefined only equals null, undefined, and no other value.
