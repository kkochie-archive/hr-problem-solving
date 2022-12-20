/*
Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example:
arr = [1, 3, 5, 7, 9]
The minimum sum is 1 + 3 + 5 + 7 = 16 and the max sum is 3 + 5 + 7 + 9 = 24.
The function prints: 16 24

Function Description:
Complete the miniMaxSum function. 
miniMaxSum has the following parameters:
• arr: an array of 5 integers

Print:
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

Input Format:
A single line of five space-separated integers.

Constraints:
1 <= arr[i] <= 10^9

Output Format:
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (the output can be greater than a 32 bit ingeter.)

Hints: Beware of integer overflow! Use 64-bit integer.
*/

// Sort the array, add the first 4 elements for minimum. Add the last 4 elements for maximum. Return space-separated integers.

function miniMaxSum(arr) {
  const newArr = arr.sort()
  const min = parseInt(newArr.slice(0, -1).reduce((acc, el) => acc + el, 0))
  const max = parseInt(newArr.slice(1).reduce((acc, el) => acc + el, 0))
  
  console.log(min + " " + max)
}