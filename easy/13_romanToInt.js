// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Example: 
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
*/

function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  let i = 0;
  while (i < s.length) {
    const cur = map[s[i]];
    const next = map[s[i + 1]];
    (cur < next && (sum += next - cur) && (i += 2)) || ((sum += cur) && i++);
  }
  return sum;
}

console.log(romanToInt("MCMXCVI"));
