# Modules in `ES6`

# Modules
* it's a good practice to divide your related code into modules. before `ES6`, there were some libraries which made this possible (e.g., `Require JS`, `Common JS`). `ES6` is now supporting this feature natively.

# Considerations when using modules:
* _the first consideration is maintainability_: a module is independent of other modules, making improvements and expansion possible without any dependancy on code or other modules.
  
* _the second consideration is namespacing_:. as we know `vars` are globally declared, so it's common to have namespace pollution where unrelated variables are accessible all over our code. modules solve this problem by creating a private space for variables.
  
* _another important consideration is reusability._: when we write code that can be used in other projects, modules make it possible to easily reuse the code without having to rewrite it in a new project

    ```js
        // example: lib/math.js
        export let sum = (x, y) => {return x + y; }
        export let pi = 3.14;

        // app.js
        import * as math from "lib/math"
        console.log('2p = + ${math.sum(math.pi, math.pi)}')
    ```
* _Remarks_:
  * here, we are exporting the sum function and the pi variable so we can use them in different files


  * `ES6` supports modules officially, however, some browsers are not supporting modules natively yet.so, we should use bundlers (builders) such as Webpack or Browserify to run our code