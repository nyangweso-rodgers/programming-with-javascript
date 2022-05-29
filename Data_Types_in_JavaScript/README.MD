# Data Types in JavaScript
A __variable__ in JS can contain any data type. a variable can at one moment be a __string__ and at another be a __number__
```js
let message = 'Hello!';
    message = 123;
```
Programming languages that allow such things are called "__dynamically typed__", meaning that there are data types, but variables are not bound to any of them.

1. __Number__: represents both _integer_ and _floating_ point numbers. there are many operations for numbers, e.g., 
    * multiplication (*), 
    * division (/), 
    * addition (+), 
    * subtraction (-) and so on
    ```js
    let n = 35;
        n = 35.76;
    ```
    Besides regular numbers, there are so-called "special numeric values" which also belong to this data type
    * __Infinity__ - represents a number whose value is greater than any other number.  we can get as a result of division by zero:
    ```js
    alert(1 / 0);
    ```
    ... or just reference it directly
    ```js
    alert(Infinity);
    ```
    * __-Infinity__
    * __NaN__ - represents a computational error. it is a result of an incorrect or undefined mathematical operation, for instance:
    ```js
      alert("not a number" / 2); 
    ```
    __NaN__ is sticky and any operation on __NaN__ returns __NaN__. so if there is a __NaN__ somewhere in a mathematical expression, it propagates to the whole result
    ```js
    alert("not a number" / 2 + 6);
    ```
    _Remark_: __Mathematical Operations are safe__: _doing maths is 'safe' in javascript. we can do anything, divide by zero, treat non-numeric strings as numbers, e.t.c., the script will never stop with a fatal error ("die"). at worst, we'll get __NaN__ as a result_
2. __String__: _double_ and _single quotes_ are "simple" quotes. there is no difference between them in javascript
    ```js
    let str = 'hello';
    let str1 = "double quotes are ok too";
    let phrase = `can embed ${str}`;`
    ```
    _backsticks_ are "extended functionality" quotes, they allow us to embed variables and expressions into a string by wrapping them in ${...}, for example:
    ```js
    let name = 'john';

    // embed a variable
    alert(`hello, ${name}!`);

    // embed an expression
    alert(`the result is ${1 + 2}`);
    ```
    3. __Boolean__ (logical type): has only two values: _true_ and _false_. this type is mostyly used to store yes/no values
    ```js
     let nameFieldChecked = true;
     let ageFieldChecked = false;
    ```
    __boolean__ values also comes as a result of comparison
    ```js
        let isGreater = 4 > 1;
        alert(isGreater);
    ```
    4. __null__: the special __null__ value does not belong to any of the types described above. it forms a seperate type of its own which contains only the __null__ value:
    ```js
    let age = null;
    ```
    in JS, __null__ is not a reference to "__non-existing object__" or a "__null pointer__" like in othere some languages. it's just a special value that represents "__nothing__", "__empty__", or a "__value unknown__". the code above states that the age is unknown or empty for some reasons 

5. __undefined__: the special value "__undefined__" also stands apart. it makes a type of its own just like __null__. the meaning of "__undefined__" is "__value not assigned__". if a variable is _defined but not assigend_, then its value is "__undefined__"
    ```js
        let x;
        alert(x); // shows undefined
    ```
    Technically, it is possible to assign __undefined__ to any variable:
    ```js
        let y = 12346;
        y = undefined;
        alert(y); // undefined
    ```
    but it's not recommended to do that. normally, you should use __null__ to assign an "__empty__" or "__unknown__" value to a variable. and we use "__undefined__" for checks like seeing if a variable has ben assigned.

6. __Objects and Symbols__: the object type is special. all the other types are called "__primitive__" because their value can contain only a single thing(be it a __string__, a __number__ or whatever). in contrast, __objects__ are used to store collections of data and more complex entities. the symbol type is used to create a unique identifier for objects.
    ```js
        // Creating an Object in JS
        var emp = {
            name: "Rodgers",
            age: 26
        };
    ```
    # typeof operator
the __typeof__ operator returns the type of an argument. it supports two types of syntax:
* as an operator: typeof x
* as a function: typeof(x)
```js
    typeof undefined; // undefined
    typeof 0; // number
    typeof true; // boolean
    typeof "foo"; // string
    typeof Symbol("id"); // symbol
    typeof Math; // Object
    typeof null; // object
    typeof alert; //function
```
_Remark_: _for null it retuns "__object__". this is an error in the language, it's not actually an object. it is an officially recognized error in __typeof__, kept for compatibility. of course, __null__ is not an object, it is a special value with a seperate type of its own.
# Comparisons Operators
Like all other operators, a comparison returns a value. in this case, the value is a boolean
 * Greater/less than: a > b, a < b
 * Greater/less than or equals: a >= b, a <= b
 * Equals: a == b
 * Not equals: a != b 

 a comparison result can be assigned to a variable, just like any other value
```js
let result = 5 > 4;

alert(result); // Output: true
```

_Remark_: __String Comparison__ to see whether a string is greater than another, JS uses the so-called "dictionary" or "__lexicographical__" order. i.e., strings are compared letter-by-letter
```js
alert('Z' > 'A'); // Output: true
alert('Glow', > 'Glee'); // Output: true
```

_Remark_: case matters. a capital "A" is not equal to the lowercase "a". which one is greater? the lowercase "a". __Why?__ _because the lowercase character character has a greater index in the internal encoding table JavaScript uses (Unicode)_
```js
    alert('Z' > 'a'); // Output: false
```
_Remark_: __Comparison of different types__: when comparing values of different types, JS converts the values to numbers. _for example_:
```js
    alert('2' > 1); // true, string '2' becomes number 2
    alert( '01' == 1); // true, string '01' becomes number 1

    // For boolean values, true becomes 1 and false becomes 0
    alert(true == 1); // true
    alert(false == 0); // true
```
_Remark_: _A funny consequence_: if it's possible that at the same time: Two values are equal, one of them is __true__ as a boolean and the other one is __false__ as a boolean. for example:
```js
    let a = 0;
    alert (Boolean(a)); // false

    let b = "0";
    alert( Boolean(b)); // true

    alert( a == b); // true

    // from JS standpoint, this result is quite normal
    // an equality check converts values using the numeric conversion (hence '0' becomes 0), while the explicit Boolean conversion uses another set of conversion 
```
* __Strict Equality__: a regular equality == has a problem, it cannot differentaite between 0 and false:
```js
    alert( 0 == false); // true

    // the same thing happens with an empty string:
    alert( '' == false); // true
```
_Remark_: _this happens because the operands of different types are converted to numbers by the equality operator ==. an empty string, just like false becomes a zero. what to do if we want to differentiate 0 from false? A strict equality operator === checks equality withot type conversion. i.e., if a and b are of different types, then a === b immediately returns false without an attempt to convert them_
```js
    alert(0 === false); // false, because the types are different
```
_Remark_: 
* _there's also a "strict non-equality" operator !== analogous to !=. the strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less rom for errors_
* __Comparison with null and undefined__: there is non-intuitive behavior when null or undefined are compared to other values
* for a strict equality check ===. these values are different because each of them is a different types
```js
    alert( null === undefined); // false
```
* for a non-strict check ==. there's a special rule. these two are the "sweet couple": they equal each other (in the sense of ==), but not any other value
```js
    alert( null == undefined); // true
```
* __For maths and other comparisons <> <= >=__ null/undefined are converted to numbers: null becomes 0, while undefined become NaN
* Now let's see some funny things that happen when we apply these rules. And, what's more important, how to not fall a trap with them:
```js
    // Strange result: null vs 0
    // let's compare null with zero:
    alert( null > 0); // false
    alert( null == 0); // false
    alert( null >= 0); // true

    // mathematically, that's strange.
    // the last result states that "null" is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.
    // the reason is that an equality check == and comparisons > < >= <= work differently.
   // comparisons convert null to a number, treating it as 0. that's why null > 0 is false.

   //  on the other hand, the equality check == for undefined and null is defined such that without any conversions, they equal each other and don't equal anything else. that's why null == 0 is false.
```
* __An incomparable undefined__ the value undefined shouldn't be compared to other values:
```js
    alert( undefined > 0); // false
    alert( undefined < 0); // false
    alert( undefined == 0); // false

    // why does it dislike zero so much? we get these results because:
    // the above comparisons return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons
    // the equality check returns false because undefined only equals null, undefined, and no other value.
```
# Operators in JavaScript
* An __operand__ is what operators are applied to.
* an __operator__ is __unary__ if it has a _single operand_. for example, the _unary negation_ - reverses the sign of a number 
    ```js
        let x = 1;
        x = -x;
        alert(x); // -1, unary negation was applied
    ```
* an __operator__ is __binary__ if it has two __operands__
    ```js
        let y = 1, z = 6;
        alert(x - y); // -5,  binary minus subtracts values

        // string concatenation, binary +
        let s = "my" + " string";
        alert(s); // "my string"

        // note that if one operand is a string, the other one is converted to a string too
        alert("1" + 2); // 12

        alert(1 + "2"); // 12
    ```
    _Remark_: _so it doesn't matter if the first or second operand is a string. the rule is simple: if either operand is a string, the other one is converted into a string too. however, note that operations runs from left to right: if there are two numbers followed by a string, the numbers will be added before converted to a string_
    ```js
        alert(3 + 5 + "1"); // 81 and not 351

        alert("1" + 3 + 5); // 135
    ```
        _Remark_: _string concatenation and conversion is a special feature of the binary plus +. other arithmetic operators work only with numbers and always convert their operands to numbers. for example:_
    ```js
        alert(2 - '1'); // 1
        alert(2 / '4'); // 0 .5
    ```
* __umeric conversion, unary +__: the plus + exist in two forms: the __binary form__ that we've used above and the __unary form__. the __unary plus__ or, in other words, the plus operator + applied to a single value doesn't do anything to numbers. but if the operand is not a number, the unary plus converts it into a number. _for example:_
    ```js
         // no effect on numbers 
        let v = 1;
        alert(+v); // 1

        let w = -2;
        alert(+w);  // -2
    ```
    _Remark_: _converts non-numbers_: it actually does the same thing as Number(...) but its shorter
    ```js
        alert(+true); // 1
        alert(+""); // 0
    ```
     _Remark_: _the need to convert strings to numbers arises very often . for example if we are getting values from HTML form fields, they are usually strings. what if we want to sum them? the binary plus would add them as strings:_
    ```js
        let apples = "2";
        let oranges = "3";

        alert(apples + oranges); // the binary plus concatenates the strings

        // if we want to treat them as numbers, we have to convert and sum them
        // both values converted to numbers before the binary plus
        alert(+apples + +oranges); // 5

        // the longer variant
        alert(Number(apples) + Number(oranges));
    ```
    _Remark_: _from the mathematician's standpoint, the abundance of pluses may seem strange but from the programer's standpoint, there's nothing special: __unary pluses__ are applied first, they convert strings to numbers and then the binary plus sums them up. why are unary pluses applied to values before the binary ones? as we are going to see, that's because of their higher precedence_
    * __Operator Precendence__: if an expression has more than one operator, the execution order is defined by their precedence, or in other words, the default priority order of operators. e.g., 
    * the multiplication (*) has a higher precedence than addition +
    * parentheses () overrides the precedence
 
    there are many operators in JS. every operator has a corresponding precedence number. the one with the larger one executes first. if the precedence is the same, the execution is from left ro right.

* __Assignment__: let's note that the assignment  (=) is also an operator. it's listed on the precedence table with a very low priority of 3. that's why when we assign a variable like x = 2 * 2 + 1, the calculations are done first and then = is evaliated, storing the result in x.
    ```js
        let h = 6 * 6 + 1;
        alert(h); // 37

        // it is possible to chain assignments
        let a, b, c;
        a = b = c = 2 + 2;
        alert(a); // 4
        alert(b); // 4
        alert(c); // 4

        // chained assignment evaluates from right to left:
        // firts the right most expression 2 + 2 is evaluated and then assigned to the variable c, b and a. at the end, all the variables share the same value
    ```
    * __Remainder (%)__: the result of a % b is the remainder of integer division of a and b
* __Exponentiation (**)__: exponentiation is a recent addition to the language.
* __Increment/Decrement__: increasing or decreasing a number is one among the most  common numerical operations. so, there are special operators for it 
    ```js
        // Increment ++ increases a variable by 1:
        let counter = 2;
        counter++; // works the same as counter = counter + 1 but shorter
        alert(counter); // 3

        // Decrement -- decreases a variable by 1:
        let counter2 = 3;
        counter2--; // works the same as counter2 = counter2 - 1, but shorter
        alert(counter2); // 2
    ```
    _Remarks_:
    * Increment/Decrement can only be applied to variables. trying to use it on a value like 8++ causes an error
    * the opertor ++ and -- can be placed either before or after a variable. when the operator goes before a variable it is in the '__prefix form__': ++counre. when the operator goes after a variable it is the '__postfix form__': counter++. both of these stements do the same thing, increase counter by 1. is there any difference? Yes but we can only see it if we use the returned value of ++/--
    * let's clarify. as we all know, all operators return a value. Increment/Decrement is no exception. the prefix form returns the new value (prior to incemrnt/decrement). the postfix form returns the old value(prior to incemrnt/decrement)
    
    ```js
         let counter3 = 1;
         let d = ++counter3; 
         alert(d); // 2, the prefix form ++counter3 increments counter3 and returns the new value 2. so the alert shows 2

        // Now, let's use postfix form
        let counter4 = 1;
        let e = counter4++;
        alert(counter4); // 1, the postfix form counter4++ also increments counter4 but returns the old value (prior to increment). so the alert shows 1

        // to summarize: if the result of increment/decrement is not used there is no differnce in which form to use
        let counter5 = 0;
        counter5++;
        ++counter5;
        alert(counter5); // alert 2, the lines above did the same

        // if we'd like to increase a value and immediately use the result of the operator, we need the prfix form:
        let counter6 = 0;
        alert( ++counter6 ); // 1

        // if we'd like to increment a value but use its previous value, we need the postfix form
        let counter7 = 0;
        alert( counter7++); // 0 
    ```
        _Remark_: _increment/decrement among other operators_: _the operators +++/-- can also be used inside expressions. their precedence is higher than most other arithmetic operations. for instance:_
    ```js
        let counter8 = 1;
        alert(2** ++counter8); // 4

        // compare with:
        let counter9 = 1;
        alert(2 * counter9++); // 2, because counter9++ returns the old value

        // though technically okay, such notation usually makes code less readable. one line does multiple things- not good
        // while reading a code, a fast "vertical" eye-scan can easily miss something like counter++ and it won't be obvious that the variable increased
        // we advise a style of one-line one-action
        let counter10 = 1;
        alert( 2 * counter10); // 2
        counter10++;  // 1
    ```
    * __Bitwise Operators__: bitwise operators treat arguments as 32-bit integer and work on the level of their binary representation. these operators are not JavaScript specific. they are supported in most programming languages. the list of operators are as follows:
    * AND (&)
    * OR (|)
    * XOR (^)
    * NOT (~)
    * LEFT SHIFT (<<)
    * RIGHT SHIFT (>>)
    * ZERO-FILL RIGHT SHIFT (>>>)

* __Modify-in-place__: we often need to apply an operator to a variable and store the new result in thta same variable. for example:
    ```js
        let n = 2;
        n = n + 5;
        n = n * 2;
        // this notation can be shortened using the operators += and *=

        let n1 = 2;
        n1 += 5; // now n1 = 7 (same as n1 = n1 + 5)
        n1 *= 2; // now n1 = 14 (same as n1 = n1 * 2)
        alert(n1); // 14

        // short "modify-and-assign" operators eixsts for all arithmetical and bitwise operators: /=, -=, e.t.c.
        // such operators have the same precedence as a normal assignment so they run after most other calculations
        let n2 = 2;
        n2 *= 3 + 5;
        alert(n2); // 16 (right part evaluated first, same as n2 *= 8)
    ```

    * __Comma__: the comma operator (,) is one of the rarest and most unusual operators. it is used to write a shorter code.the comma operator allows us to evaluate several expressions, dividing them with a comma ,. each one of them is evaluated but only the result of the last one is returned. for example:
    ```js
        let a1 = (1 + 2, 3 + 4);
        alert(a1); // 7 (the result of 3 + 4)
        // here, the first expression 1 + 2 is evaluated and its result is thrown away.then, 3 + 4 is evaluated and returned as the result
    ```
    _Remarks_: 
    * _comma has a very low precedence. comma has a very low precedence, lower than =, so parentheses are important in the example above. without them, a1 = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a1 = 3, 7 then the assignment operator = assigns  a1 = 3, and the rest is ignored_
    * _why do we need an operator that throws away everything except the last expression? sometimes, people use it in more complex constructs to put several actions in one line_
    ```js
        // for example:
        // three operations in one line
        for (a = 1, b = 3, c = a * b; a < 10; a++) {
            ...
        }
        // such tricks are used in JavaScript 
    ```
    # Math Operations
* addition (+)
* subtraction ( - )
* multiplication (*)
* division (/)
* modulo (%)
* increment (++)
* decrement (--)

# Types Conversion in JavaScript
Most of the time, operators and functions automatically converts the values given to them to the right type. for example, __alert__ automatically converts any value to a string to show it. mathematical operations converts values to numbers. there are also cases where we have to explicitly convert a value to an expected type.  
* __ToString__ string conversion happens when we need the string form of a value. for example, alert(value) does it to show the value
```js
    // we can also call the String(value) function to convert a value to a string
    let value = true;
    alert(typeof value); // boolean

    value = String(value); // now value is a string true
    alert(typeof value); // string
```
* __ToNumber__: numeric conversion happens in mathematial functions and expressions automatically. for example, when division is applied to non-numbers 
```js
    // strings are converted to numbers
    alert("78" / "45");

    // we can use the Number(value) function to explicitly convrt a value to a number
    let str = "123456";
    alert(typeof str); // string

    let num = Number(str); // becomes number 123456
    alert(typeof num);
```
_Remark_: _explicit conversion is usually required when we read a value from a string-based source like a text form but expect a numner to be entered. if the string is not a valid number, the result if such conversion is NaN. for instance_
```js
    let age = Number("an arbitrary string intead of a number");
    alert(age); // NaN, conversion failed.
```
_Numeric Conversion rules:_
| Value | becomes|
|:--------:|:----------:|
undefined | NaN
true and false | 1 and 0
string | whitespaces from the start and end are removed. if the remaining string is empty, the result is 0. otherwise the number is "read" from the string. an error gives NaN
```js
    alert( Number(  "1233")); // 123
    alert( Number("123a")); // NaN
    alert( Number(true)); // 1
    alert( Number(false)); // 0
    alert( Number(undefined)); // NaN
    alert( Number(null)); // 0

```
* __Addition '+' concatenates strings__ almost all mathematical operations converts values to numbers.a notable exception is the addition "+". if one of the added values is a string, the other one is also converted to a string. then, it concatenates (join) them
```js
    alert("1" + 2); // 12
    alert(1 + "2"); // 12

    // this only happens if atleast one of the arguments is a string. otherwise values are converted to numbers
```
* __ToBoolean__: Boolean conversion is the simplest one. it happens in logical operations but can also be performed explicitlywith a call to Boolean(value). the conversion rules:
    * values that are intutively "empty", like 0, an empty string, null, undefined, and NaN becomes false
    * other values becomes true
    ```js
        alert(Boolean(1)); // true
        alert(Boolean(0)); // false

        alert(Boolean("hello")); // true
        alert(Boolean("")); // false

        // NOTE: a string with zero "0" is true. some languages like PHP treat "0" as false. but in JS, a non-empty string is always true
        alert(Boolean("0")); // true
        alert(Boolean(" ")); // spaces, is also true
    ```