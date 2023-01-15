# Operators in JS

## Table Of Contents
- [Introduction to JS Operators](#Introduction-to-JS-Operators)
- [Operator Precendence](#Operator-Precendence)
- [typeof operator](#typeof-operator)
- [Comparisons Operators](#Comparisons-Operators)
- [Assignment Operator](#Assignment-Operator)
- [Remainder Operator](#Remainder)


# Introduction to JS Operators
* An __operand__ is what operators are applied to.
    ```js
        // unary operator - has a single operand
        let x = 1;
        x = -x; // reverses the sign of a number 
        console.log(x); // -1, unary negation was applied

        // binary operator - has two operands
        let y = 1, z = 6;
        console.log(x - y); // -5,  binary minus subtracts values

        // string concatenation, binary +
        let s = "my" + " string";
        console.log(s); // "my string"

        // note that if one operand is a string, the other one is converted to a string too
        console.log("1" + 2); // 12
        console.log(1 + "2"); // 12
    ```

* _Remarks_: 
    * _so it doesn't matter if the first or second operand is a string. the rule is simple: if either operand is a string, the other one is converted into a string too. however, note that operations runs from left to right: if there are two numbers followed by a string, the numbers will be added before converted to a string_
        ```js
            console.log(3 + 5 + "1"); // 81 and not 351
            console.log("1" + 3 + 5); // 135
        ```
* _string concatenation and conversion is a special feature of the binary plus +. other arithmetic operators work only with numbers and always convert their operands to numbers. for example:_
    ```js
        console.log(2 - '1'); // 1
        console.log(2 / '4'); // 0 .5
    ```

* __numeric conversion, unary +__: the plus + exist in two forms: the __binary form__ that we've used above and the __unary form__. the __unary plus__ or, in other words, the plus operator + applied to a single value doesn't do anything to numbers. but if the operand is not a number, the unary plus converts it into a number. _for example:_
    ```js
            // no effect on numbers 
        let v = 1;
        console.log(+v); // 1

        let w = -2;
        console.log(+w);  // -2
    ```

* _converts non-numbers_: it actually does the same thing as Number(...) but its shorter
    ```js
        console.log(+true); // 1
        console.log(+""); // 0
    ```

* _the need to convert strings to numbers arises very often . for example if we are getting values from HTML form fields, they are usually strings. what if we want to sum them? the binary plus would add them as strings:_
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

* _from the mathematician's standpoint, the abundance of pluses may seem strange but from the programer's standpoint, there's nothing special: __unary pluses__ are applied first, they convert strings to numbers and then the binary plus sums them up. why are unary pluses applied to values before the binary ones? as we are going to see, that's because of their higher precedence_

# Operator Precendence
* if an expression has more than one operator, the execution order is defined by their precedence, or in other words, the default priority order of operators. e.g., 
    - the multiplication (*) has a higher precedence than addition +
    - parentheses () overrides the precedence
 * there are many operators in JS. every operator has a corresponding precedence number. the one with the larger one executes first. if the precedence is the same, the execution is from left ro right.

# The typeof Operator
* the __typeof__ operator returns the type of an argument. it supports two types of syntax:
    ```js
        console.log(typeof 2); // Output: number
        console.log(typeof('2')); // Output: string
        console.log(typeof true); // Output: boolean
        console.log(typeof undefined); // Output: undefined
        console.log(typeof Math); // Output: object
        console.log(typeof Symbol("id")); // Output: symbol
        console.log(typeof null); // Output: object
        console.log(typeof alert); // Output: undefined
    ```

* _Remark_: 
    * _for null it retuns "__object__". this is an error in the language, it's not actually an object. it is an officially recognized error in __typeof__, kept for compatibility._ 
    * _of course, __null__ is not an object, it is a special value with a seperate type of its own._

# Comparisons Operators
* Like all other operators, a comparison returns a value. in this case, the value is a boolean
    ```js
        // Comparison Operators
        // Greater/less than: a > b, a < b
        console.log(4 > 2); // Output: true

        // Greater/less than or equals: a >= b, a <= b
        // Equals: a == b
        // Not equals: a != b 

        // string comparison
        console.log('Z' > 'A'); // Output: true
        console.log('Glow', > 'Glee'); // Output: true
        console.log('Z' > 'a'); // Output: false

        // comparison of different types - JS onverts the values to numbers
        console.log('2' > 1); // true, string '2' becomes number 2
        console.log( '01' == 1); // true, string '01' becomes number 1

        // For boolean values, true becomes 1 and false becomes 0
        console.log(true == 1); // true
        console.log(false == 0); // true
    ```

* _Remarks_:
    * _a comparison result can be assigned to a variable, just like any other value_
    * __String Comparison__ to see whether a string is greater than another, JS uses the so-called "dictionary" or "__lexicographical__" order. i.e., strings are compared letter-by-letter
    * case matters. a capital "A" is not equal to the lowercase "a". which one is greater? the lowercase "a". __Why?__ _because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode)_
    * __Comparison of different types__: when comparing values of different types, JS converts the values to numbers.
    * _A funny consequence_: if it's possible that at the same time: Two values are equal, one of them is __true__ as a boolean and the other one is __false__ as a boolean. for example:

        ```js
            let a = 0;
            console.log (Boolean(a)); // false

            let b = "0";
            console.log( Boolean(b)); // true

            console.log( a == b); // true

            // from JS standpoint, this result is quite normal
            // an equality check converts values using the numeric conversion (hence '0' becomes 0), while the explicit Boolean conversion uses another set of conversion 
        ```

* __Strict Equality__: a regular equality == has a problem, it cannot differentaite between 0 and false:
    ```js
        console.log( 0 == false); // true

        // the same thing happens with an empty string:
        console.log( '' == false); // true
    ```

* _this happens because the operands of different types are converted to numbers by the equality operator ==. an empty string, just like false becomes a zero. what to do if we want to differentiate 0 from false? A strict equality operator === checks equality without type conversion. i.e., if a and b are of different types, then a === b immediately returns false without an attempt to convert them_

    ```js
        console.log(0 === false); // false, because the types are different
    ```

* _there's also a "strict non-equality" operator !== analogous to !=. the strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less rom for errors_

* __Comparison with null and undefined__: there is non-intuitive behavior when null or undefined are compared to other values

* for a strict equality check ===. these values are different because each of them is a different types
    ```js
        console.log( null === undefined); // false
    ```

* for a non-strict check ==. there's a special rule. these two are the "sweet couple": they equal each other (in the sense of ==), but not any other value
    ```js
        console.log( null == undefined); // true
    ```
* __For maths and other comparisons <> <= >=__ null/undefined are converted to numbers: null becomes 0, while undefined become NaN

* Now let's see some funny things that happen when we apply these rules. And, what's more important, how to not fall a trap with them:
    ```js
        // Strange result: null vs 0
        // let's compare null with zero:
        console.log( null > 0); // false
        console.log( null == 0); // false
        console.log( null >= 0); // true
    ```

* mathematically, that's strange. - the last result states that "null" is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false. the reason is that an equality check == and comparisons > < >= <= work differently. comparisons convert null to a number, treating it as 0. that's why null > 0 is false. on the other hand, the equality check == for undefined and null is defined such that without any conversions, they equal each other and don't equal anything else. that's why null == 0 is false.

* __An incomparable undefined__ the value undefined shouldn't be compared to other values:
    ```js
        console.log( undefined > 0); // false
        console.log( undefined < 0); // false
        console.log( undefined == 0); // false
    ```

* why does it dislike zero so much? we get these results because: - the above comparisons return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons, the equality check returns false because undefined only equals null, undefined, and no other value.

# Assignment Operator
* __Assignment__: let's note that the assignment  (=) is also an operator. it's listed on the precedence table with a very low priority of 3. that's why when we assign a variable like x = 2 * 2 + 1, the calculations are done first and then = is evaliated, storing the result in x.
    ```js
        let h = 6 * 6 + 1;
        console.log(h); // 37

        // it is possible to chain assignments
        let a, b, c;
        a = b = c = 2 + 2;
        console.log(a); // 4
        console.log(b); // 4
        console.log(c); // 4

        // chained assignment evaluates from right to left:
        // firts the right most expression 2 + 2 is evaluated and then assigned to the variable c, b and a. at the end, all the variables share the same value
    ```

# Remainder
* __Remainder (%)__: the result of a % b is the remainder of integer division of a and b.

# Exponentiation
* __Exponentiation (**)__: exponentiation is a recent addition to the language.

# Increment/Decrement
* __Increment/Decrement__: increasing or decreasing a number is one among the most  common numerical operations. so, there are special operators for it 
    ```js
        // Increment ++ increases a variable by 1:
        let counter = 2;
        counter++; // works the same as counter = counter + 1 but shorter
        console.log(counter); // 3

        // Decrement -- decreases a variable by 1:
        let counter2 = 3;
        counter2--; // works the same as counter2 = counter2 - 1, but shorter
        console.log(counter2); // 2
    ```
* _Remarks_:
    * _Increment/Decrement can only be applied to variables. trying to use it on a value like 8++ causes an error_
    * _the opertor ++ and -- can be placed either before or after a variable._
    * _when the operator goes before a variable it is in the '__prefix form__': ++counre._
    * _when the operator goes after a variable it is the '__postfix form__': counter++._
    * _both of these stements do the same thing, increase counter by 1. is there any difference? Yes but we can only see it if we use the returned value of ++/--_
    * _let's clarify. as we all know, all operators return a value. Increment/Decrement is no exception. the prefix form returns the new value (prior to incemrnt/decrement). the postfix form returns the old value(prior to incemrnt/decrement)_

    ```js
        let counter3 = 1;
        let d = ++counter3; 
        console.log(d); // 2, the prefix form ++counter3 increments counter3 and returns the new value 2. so the alert shows 2

        // Now, let's use postfix form
        let counter4 = 1;
        let e = counter4++;
        console.log(counter4); // 1, the postfix form counter4++ also increments counter4 but returns the old value (prior to increment). so the alert shows 1

        // to summarize: if the result of increment/decrement is not used there is no differnce in which form to use
        let counter5 = 0;
        counter5++;
        ++counter5;
        console.log(counter5); // alert 2, the lines above did the same

        // if we'd like to increase a value and immediately use the result of the operator, we need the prfix form:
        let counter6 = 0;
        console.log( ++counter6 ); // 1

        // if we'd like to increment a value but use its previous value, we need the postfix form
        let counter7 = 0;
        console.log( counter7++); // 0 
    ```

* _increment/decrement among other operators_: _the operators +++/-- can also be used inside expressions. their precedence is higher than most other arithmetic operations. for instance:_
    ```js
        let counter8 = 1;
        console.log(2** ++counter8); // 4

        // compare with:
        let counter9 = 1;
        console.log(2 * counter9++); // 2, because counter9++ returns the old value

        // though technically okay, such notation usually makes code less readable. one line does multiple things- not good
        // while reading a code, a fast "vertical" eye-scan can easily miss something like counter++ and it won't be obvious that the variable increased
        // we advise a style of one-line one-action
        let counter10 = 1;
        console.log( 2 * counter10); // 2
        counter10++;  // 1
    ```

# Bitwise Operators
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
        console.log(n1); // 14

        // short "modify-and-assign" operators eixsts for all arithmetical and bitwise operators: /=, -=, e.t.c.
        // such operators have the same precedence as a normal assignment so they run after most other calculations
        let n2 = 2;
        n2 *= 3 + 5;
        console.log(n2); // 16 (right part evaluated first, same as n2 *= 8)
   ```

# Comma Operator
* __Comma__: the comma operator (,) is one of the rarest and most unusual operators. it is used to write a shorter code.the comma operator allows us to evaluate several expressions, dividing them with a comma ,. each one of them is evaluated but only the result of the last one is returned. for example:
    ```js
        let a1 = (1 + 2, 3 + 4);
        console.log(a1); // 7 (the result of 3 + 4)
        // here, the first expression 1 + 2 is evaluated and its result is thrown away.then, 3 + 4 is evaluated and returned as the result
    ```
* _Remarks_: 
    * _comma has a very low precedence.  lower than =, so parentheses are important in the example above. without them, a1 = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a1 = 3, 7 then the assignment operator = assigns  a1 = 3, and the rest is ignored_
    * _why do we need an operator that throws away everything except the last expression? sometimes, people use it in more complex constructs to put several actions in one line_
        ```js
            // for example:
            // three operations in one line
            for (a = 1, b = 3, c = a * b; a < 10; a++) {
                ...
            }
            // such tricks are used in JavaScript /
        ```

# Math Operations
* addition (+)
* subtraction ( - )
* multiplication (*)
* division (/)
* modulo (%)
* increment (++)
* decrement (--)

# Types Conversions
* Most of the time, operators and functions automatically converts the values given to them to the right type. for example, __alert__ automatically converts any value to a string to show it. mathematical operations converts values to numbers. there are also cases where we have to explicitly convert a value to an expected type.  

1. __ToString__ string conversion happens when we need the string form of a value. for example, alert(value) does it to show the value
    ```js
        // we can also call the String(value) function to convert a value to a string
        let value = true;
        console.log(typeof value); // boolean

        value = String(value); // now value is a string true
        console.log(typeof value); // string
    ```
2. __ToNumber__: numeric conversion happens in mathematial functions and expressions automatically. for example, when division is applied to non-numbers 
    ```js
        // strings are converted to numbers
        console.log("78" / "45"); // Output: 1.7333333333333334

        // we can use the Number(value) function to explicitly convrt a value to a number
        let str = "123456";
        console.log(typeof str); // Output: string

        let num = Number(str); // becomes number 123456
        alert(typeof num); // Output: 123456
    ```

* _Remarks_: 
    * _explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered._

    * _if the string is not a valid number, the result if such conversion is NaN. for instance_
        ```js
            let age = Number("an arbitrary string intead of a number");
            console.log(age); // NaN, conversion failed.
        ```

* _Numeric Conversion rules:_
    | Value | becomes|
    |:--------:|:----------:|
    undefined | NaN
    true and false | 1 and 0
    string | whitespaces from the start and end are removed. if the remaining string is empty, the result is 0. otherwise the number is "read" from the string. an error gives NaN

    ```js
        console.log( Number(  "1233")); // 123
        console.log( Number("123a")); // NaN
        console.log( Number(true)); // 1
        console.log( Number(false)); // 0
        console.log( Number(undefined)); // NaN
        console.log( Number(null)); // 0
    ```

* __Addition '+' concatenates strings__: _almost all mathematical operations converts values to numbers.a notable exception is the addition "+". if one of the added values is a string, the other one is also converted to a string. then, it concatenates (join) them_

    ```js
        console.log("1" + 2); // 12
        console.log(1 + "2"); // 12

        // this only happens if atleast one of the arguments is a string. otherwise values are converted to numbers
    ```
3. __ToBoolean__: Boolean conversion is the simplest one. it happens in logical operations but can also be performed explicitlywith a call to Boolean(value). the conversion rules:
    * values that are intutively "empty", like 0, an empty string, null, undefined, and NaN becomes false
    * other values becomes true

    ```js
        console.log(Boolean(1)); // true
        console.log(Boolean(0)); // false

        console.log(Boolean("hello")); // true
        console.log(Boolean("")); // false

        // NOTE: a string with zero "0" is true. some languages like PHP treat "0" as false. but in JS, a non-empty string is always true
        console.log(Boolean("0")); // true
        console.log(Boolean(" ")); // spaces, is also true
    ```