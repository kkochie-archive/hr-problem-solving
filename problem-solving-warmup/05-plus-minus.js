/* Plus Minus

Given an array of integers, calcuate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: this challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

Example:
arr = [1, 1, 0, -1, -1]

There are n = 5 elements, two positive, two negative, and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:
0.400000
0.400000
0.200000
*/

/* Notes
Make an array of filtered numbers into positive, negative and zeroes. Divide each one by arr.length. Return each as afloat with 6 decimals.
*/

function plusMinus(arr) {
  [ arr.filter(n => n > 0).length / arr.length,
    arr.filter(n => n < 0).length / arr.length,
    arr.filter(n =>n === 0).length / arr.length
  ]
  .forEach((num) => console.log(num.toFixed(6)))
}