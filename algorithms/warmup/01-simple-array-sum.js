/*
Simple Array Sum

Given an array of integers, find the sum of its elements.
For example: 
array ar=[1, 2, 3] so 1+2+3=6

Complete the simpleArraySum function. It must return the sum of the array elements as an integer. simpleArraySum has the following parameter(s):
• ar: an array of integers

*/
// Using reduce()
// reduce((accumulator, currentValue) => { /* … */ }, initialValue)
function simpleArraySum(ar) {
  return ar.reduce((sum, num) => sum + num, 0);
}

// alternate with iteration
function simpleArraySum2(ar) {
  // Create a sum
  let sum = 0;
  // Loop through array and add each element to the sum
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}
