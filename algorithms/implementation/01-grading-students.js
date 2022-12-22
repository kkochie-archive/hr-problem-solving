/*
Grading Students -- EASY

HackerLand University has the following grading policy:
• Every student receives a grad in the inclusive range from 0 to 100.
• Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:
• If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
• If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples:
• grade = 84 round to 85 (85 - 84 is less than 3)
• grade = 29 do not round (result is less than 40)
• grade = 57 do not round (60 - 57 is 3 or higher)

Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

Function Description:
Complete the function gradingStudents.
gradingStudents has the following parameters:
• int grades[n]: the grades before rounding

Returns:
• int[n]: the grades after rounding as appropriate

Input Format:
The first line contains a single integer, n, the number of students.
Each line i of the n subsequent lines contains a single integer, grades[i].

Constraints:
• 1 <= n <= 60
• 0 <= grades[i] <= 100

Sample Input:
4
73
67
38
33

Sample Output:
75
67
40
33

* Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
*/


/*

if n < 38 return n
otherwise, round to nearest 5 and if n5 - n < 3, set n = n5.
return n

round to next 5:
Math.ceil(n/5)*5
*/

function gradingStudents(grades) {
  return grades.map((el) => {
    if (el < 38) {
      return el
    }
    let n = Math.ceil(el/5)*5
    let diff = n - el
    return diff < 3 ? n : el
  })
}

console.log(gradingStudents([73, 67, 38, 33])) // [75, 67, 40, 33]
console.log("hello")

/*
One Liners:

const gradingStudents = grades => {
  return grades.map(grade => {
      return grade < 38 ? grade : grade % 5 < 3 ? grade : grade + 5 - grade % 5;
  });
}
//
function gradingStudents(grades) {
  const finalGrades = grades.map((grade) => {
    return (grade < 38) ? grade : ((grade % 5 >= 3) ? (Math.ceil(grade / 5) * 5) : grade)
  })
  return finalGrades
}

*/
