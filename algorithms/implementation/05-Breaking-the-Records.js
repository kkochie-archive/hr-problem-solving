/*
Breaking the Records --EASY

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there. 

Example:
scores = [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:

Game  Score Minimum Maxiumum  Count Min Count Max
0     12    12      12        0         0
1     24    12      24        0         1
2     10    10      24        1         1
3     24    10      24        1         1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description:
Complete the breakingRecords function.
breakingRecords has the following parameters:
• int scores[n]: points scored per game

Returns:
• int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points.

Input Format:
The first line contains an integer n, the number of games. The second line contains n space-separated integers describing the respective values of score0, score1.... scoren-1.

Constraints:
• 1 <= n <= 1000
• 0 <= scores[i] <= 10^8

Sample Input 0:
9
10 5 20 20 4 5 2 25 1

Sample Output 0:
2 4

Explanation:
She broke her best record twice (after games 2 and 7) and her worst record four times (after games 1, 4, 6, and 8) so we print 2 4 as our answer. Note that she did not break her record for best score during game 3, as her score during that game was not strictly greater than her best record at the time.

Sample Input 1:
10
3 4 21 36 10 28 35 5 24 42

Sample Output 1:
4 0

Explanation 1:
She broke her best record four times (after games 1, 2, 3, and 9) and her worst record zero times (no score during the season was lower than the one she earned during her first game), so we print 4 0 as our answer.

* Complete the 'breakingRecords' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts INTEGER_ARRAY scores as parameter.
*/

//Using for loop
function breakingRecords(scores) {
  let max = scores[0]
  let min = scores[0]
  let count = [0, 0]

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i]
      count[0]++
    }

    if (scores[i] < min) {
      min = scores[i]
      count[1]++
    }
  }
  return count 
}


//Using map()
function breakingRecords2(scores) {
  let max = scores[0]
  let min = scores[0]
  let count = [0, 0]

  scores.map((score) => {
    if (score > max) {
      max = score
      count[0]++
    } else if (score < min) {
      min = score
      count[1]++
    }
  })
  return count
}