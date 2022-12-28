/*
Number Line Jumps --EASY

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e. toward positive infinity).
• The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
• The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example:
x1 = 2
v1 = 1
x2 = 1
v2 = 2

After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is YES.

Function Description:
Complete the function kangaroo.
kangaroo has the following parameters:
• int x1, int v1: starting position and jump distance for kangaroo 1
• int x2, int v2: starting position and jump distance for kangaroo 2

Returns:
• string: either YES or NO

Input Format:
A single line of four space-separated integers denoting the respective values of x1, v1, x2, v2.

Constraints:
• 0 <= x1 < x2 <= 10000
• 1 <= v1 <= 10000
• 1 <= v2 <= 10000

Sample Input 0:
0 3 4 2

Sample Output 0:
YES

Explanation 0:
The kangaroos meet at location number 12 on the number line after same number of jumps (4). YES.

Sample Input 1:
0 2 5 3

Sample Output 1:
NO

Explanation 1:
The second kangaroo starts ahead of the first kangaroo. Because the second kangaroo moves at a faster rate and is already ahead, the first kangaroo will never catch up. NO.

*/

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

// Using If Else
function kangaroo(x1, v1, x2, v2) {
  let meet = 0

  if (v2 < v1) {
    if ((x2 - x1) % (v1 - v2) === 0) {
      meet = 'YES'
    } else {
      meet = 'NO'
    }
  } else {
    meet = 'NO'
  }
  return meet
}

// Reformat as almost one-liner
function kangaroo2(x1, v1, x2, v2) {
  if (v2 < v1) return (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
  return "NO";
}