/*
Staircase

Staircase detail:
   #
  ##
 ###
####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces. Write a program that prints a staircase of size n.

Function Description:
Complete the staircase function. staircase has the following parameters:
• int n: an integer

Input Format:
A sing integer, n, denoting the size of the staircase.

Constraints:
0 <= n <= 100

Output Format:
Print a right-aligned staircase of size n using # symbols and spaces. NOTE: the last line must have 0 spaces in it.

*/

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const space = n - i
    const stair = n - space
    console.log(' '.repeat(space) + '#'.repeat(stair))
  }
}