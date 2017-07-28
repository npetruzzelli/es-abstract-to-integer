# ToInteger

Per the ECMAScript 2017 (8th Edition) specification

## [5.2 Algorithm Conventions](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-algorithm-conventions)

> Calls to abstract operations return Completion Records. Abstract operations
> referenced using the functional application style and the method 
> application style that are prefixed by **?** indicate that ReturnIfAbrupt 
> should be applied to the resulting Completion Record. For example, 
> ? operationName() is equivalent to ReturnIfAbrupt(operationName()). 
> Similarly, ? someValue.operationName() is equivalent to 
> ReturnIfAbrupt(someValue.operationName()).

## Abstract Operation: [7.1.4 `ToInteger`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-tointeger)

> The abstract operation ToInteger converts argument to an integral numeric
> value. This abstract operation functions as follows:
> 
> 1.  Let number be ? ToNumber(argument).
> 2.  If number is NaN, return +0.
> 3.  If number is +0, -0, +∞, or -∞, return number.
> 4.  Return the number value that is the same sign as number and whose
>     magnitude is floor(abs(number)).

**NOTE:** This module substitutes:

-   [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
    for
    [`ToNumber(argument)`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-tonumber)
    to perform type coercion / conversion.
-   The following logic for `same sign as number and whose magnitude is 
    floor(abs(number))`
    -   If number < 0
        -   Return 
            [ceil(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
    -   Else
        -   Return
            [floor(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
