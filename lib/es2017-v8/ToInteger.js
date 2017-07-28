/**
 * ECMAScript 2017 (8th Edition): `ToInteger` Abstract Operation.
 *
 * The abstract operation ToInteger converts argument to an integral numeric
 * value. This abstract operation functions as follows:
 *
 * (Abridged Steps:)
 *
 * 1.  Let number be ? ToNumber(argument).
 * 2.  If number is NaN, return +0.
 * 3.  If number is +0, -0, +∞, or -∞, return number.
 * 4.  Return the number value that is the same sign as number and whose
 *     magnitude is floor(abs(number)).
 *
 * **NOTE:** This module substitutes:
 *
 * -   [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
 *     for
 *     [`ToNumber(argument)`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-tonumber)
 *     to perform type coercion / conversion.
 * -   The following logic for `same sign as number and whose magnitude is
 *     floor(abs(number))`
 *     -   If number < 0
 *         -   Return
 *             [ceil(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
 *     -   Else
 *         -   Return
 *             [floor(number)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
 */
function ToInteger(arg) {
  var number = Number(arg)
  if (Number.isNaN(number)) {
    return 0
  }
  if (
    1 / number === Infinity || // Positive Zero
    1 / number === -Infinity || // Negative Zero
    number === Infinity ||
    number === -Infinity
  ) {
    return number
  }
  /*
   * Effectively:
   * sign = number < 0 || 1 / number === -Infinity ? -1 : 1
   * magnitude = Math.floor(Math.abs(number))
   * return sign * magnitude
   */
  return number < 0 ? Math.ceil(number) : Math.floor(number)
}

module.exports = ToInteger
