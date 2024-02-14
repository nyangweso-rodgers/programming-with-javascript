# Strategic Digit Removal for Maximum Decimal Value

# Challenge Description

- As a codebreaker, you are deciphering a code presented as a `string`, 'codeString',denoting a considerable numerical value. Additionally, you are given a character 'criticalDigit' which is a recurring element in 'codeString'.
- The code must be optimized by excising precisely one instance of 'criticalDigit' from 'codeString'.
- The aim is to rearrange 'codeString' into the greatest possible numerical value in decimal form after the removal.It is assured that the 'criticalDigit' is present in 'codeString' at least once.
- Example 1:

  ```js
  //Input: codeString = "123", criticalDigit = "3";
  // Output: 12;
  // Explanation: There is only one '3' in '123'. After removing '3'. the result is '12'.
  ```

- Example 2:
  ```js
  // Input: codeString = "1231", criticalDigit = "1"
  // Output: 231
  // Explanation:we can remove the first "1" to get "231" or remove the second "1" to get "123"
  // since 231 > 123, we return "231"
  ```
- Constraints:
  - `2 <=codeString.length <= 100`
  - `codeString` consists of digits from `1` to `9`
  - `criticalDigit` is a digit from `1` to `9`
  - `criticalDigit` occurs at least once in `codeString`

# Solution
