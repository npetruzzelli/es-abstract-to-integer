# ToInteger

A method to convert the argument to an integral numeric value. This method
follows ECMAScript's specification for the 'ToInteger' abstract operation.

Currently, this module only supports the ES2017 (ES8) specification.

## Installation Using [npm](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```
npm install es-abstract-to-integer
```

## Example Usage

```javascript
var toInteger = require('es-abstract-to-integer')

console.log(toInteger(-3.14))  // =>   -3
console.log(toInteger(3.14))   // =>    3
console.log(toInteger(42))     // =>   42
console.log(toInteger("9001")) // => 9001
console.log(toInteger(null))   // =>    0
console.log(toInteger(false))  // =>    0
console.log(toInteger(true))   // =>    1

console.log(toInteger("foo"))  // =>    0
console.log(toInteger({}))     // =>    0
console.log(toInteger([]))     // =>    0

var d = new Date(2015, 3, 14, 0, 0, 0, 0)
console.log(toInteger(d)) // => 1428984000000
```

## Documentation

-   [API](#api)
-   [ECMAScript Specification References](./docs/ToInteger-es2017.markdown)

## API

### ToInteger ( argument )

The abstract operation ToInteger converts argument to an integral numeric value.

A Number value is returned.

A `TypeError` exception may be thrown for arguments that are Symbols or Objects
that lack a `valueOf` method or a `toString` method capable of returning a 
non-object value.

#### argument

Type: `*`

The value to convert.

## Related Projects

-   **[es-abstract](https://github.com/ljharb/es-abstract)**: a single library
    for multiple ECMAScript abstract operations.
