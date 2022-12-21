/*
Time Conversion

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
NOTE: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example:
• s = '12:01:00PM' // return '12:01:00'
• s = '12:01:00AM' // return '00:01:00'

Function Description:
Complete the timeConversion function. It should return a new string representing the input time in 24 hour format. 
timeConversion has the following parameter:
• string s: a time in 12 hour format

Returns:
string: the time in 24-hour format

Input Format:
A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM)

Constraints:
• All input times are valid

Sample Input 0:
07:05:45PM

Sample Output 0:
19:05:45PM
*/

function timeConversion(s) {
  if (s.endsWith("AM")) return (Number(s.slice(0, 2)) < 12) 
    ? s.slice(0, s.length - 2)
    : `00${s.slice(2, s.length - 2)}`

  if (s.endsWith("PM")) return (Number(s.slice(0, 2) < 12))
    ? `${Number(s.slice(0, 2)) + 12}${s.slice(2, s.length - 2)}`
    : s.slice(0, s.length - 2)
}
console.log(timeConversion("12:00:00AM"))
