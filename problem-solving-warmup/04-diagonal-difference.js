/* Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1 + 5 + 9 = 15
The right-to-left diagonal = 3 + 5 + 9 = 17
Their absolute difference is |15 - 17| = 2

Function description:
Complete the diagonalDifference function.
diagonalDifference takes the following parameter:
• int arr[n][m]: an array of integers

Return
• int: the absolute diagonal difference

Input Format:
The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

Constraints:
-100 <= arr[i][j] <= 100

Output Format:
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input:
3
11 2 4
4 5 6
10 8 -12

Sample Output:
15

Note: |x| is the absolute value of x

*/

/* Notes
drop the first line
left-to-right = arr[0][0] + arr[1][1] + arr[2][2] == arr[i][i]
right-to-left = arr[0][2] + arr[1][1] + arr[2][0] == arr[i][(arr.length-1) - i]
absolute of left-to-right - right-to-left
*/
function diagonalDifference(arr) {
  let a = 0,
      b = 0
  
  for (let i=0; i < arr.length; i++) {
    a += arr[i][i]
    b += arr[i][arr.length-1 - i]
  }
  return Math.abs(a-b)
}