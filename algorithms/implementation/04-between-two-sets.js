/*
Between Two Set --EASY
There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
1. The elements of the first array are all factors of the integer being considered.
2. The integer being considered is a factor of all elements of the second array.

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example:
a = [2, 6]
b = [24, 36]

There are two numbers between the arrays: 6 and 12.
6%2 = 0, 6%6 = 0, 24%6 = 0, 36%6 = 0 for the first value.
12%2 = 0, 12%6 = 0, 24%12 = 0, 36%12 = 0 for the second value. Return 2.

Function Description:
Complete the getTotalX function in the editor below. It should return the number of integers that are between the sets.
getTotalX has the following parameters:
• int a[n]: an array of integers
• int b[m]: an array of integers

Returns:
int: the number of integers that are between the sets

Input Format:
The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
The second line contains n distinct space-separated integers a[i] where 0 <= i < n.
The third line contains m distinct space-separated integers b[j] where 0 <= j < m.

Constraints:
• 1 <= n, m < 10
• 1 <= a[i] <= 100
• 1 <= b[j] <= 100

Sample input:
2 3
2 4
16 32 96

Sample Output:
3

Explanation:
2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8, and 16 divide evenly intly 16, 32, 96.
4, 8 and 16 are the only three numbers for which each element of a is factor and each is a factor of all elements of b.


 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

/*
hi brysonsaman,

It took a while to understand it too.

You are given two arrays, A and b

and you are asked to find elements that

1) all elements of A are factors of (element % A[i] == 0)

3) the element is a factor of all elements of B (element % B[i] == 0)

the key here is that you are considering elements between the two sets

For instance A = 2 4 B = 16 32 96

You should test this for all elements between min(A + B) and max(A + B) ie between 2 and 96. So you have to check this between 2 and 96

or since elements are always between 1 and 100, you can use that range

*/



function getTotalX(a, b) {
  // Create empty array to push elements to  
  let total = 0
  // Find max so don't have to loop through every number <= 100
  let max = b[b.length-1]

  for (let i = 0; i <= max; i++) {
    // Find element that all elements of A are factors of (element % A[i] == 0)
    let firstArr = a.every(num => i % num === 0)
    // The element is a factor of all elements of B (element % B[i] == 0)
    let secondArr = b.every(num => num % i === 0)

    if (firstArr && secondArr) {
      return total++
    }
  }
  return total
}