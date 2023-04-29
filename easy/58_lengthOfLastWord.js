// 58. Length of Last Word

// https://leetcode.com/problems/length-of-last-word/

/*
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
 */

function lengthOfLastWord(s) {
  const str = s.trimEnd();
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") break;
    else count++;
  }
  return count;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
