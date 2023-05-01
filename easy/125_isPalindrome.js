// 125. Valid Palindrome

// https://leetcode.com/problems/valid-palindrome

/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

var isPalindrome = function (s) {
  // using regex to keep the chars only
  const lowerCaseStr = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  // taking two pointer, left as first and right as last index
  let left = 0;
  let right = lowerCaseStr.length - 1;
  // loop will break left index is equal to right index
  //  coz both indices will point towards the same element
  while (left < right) {
    // comparing two opposite elements if the are equal or not
    // if equal, then moving the left pointer forward and right pointer backword
    // repeating the process until element at left === to element at right
    // returning false if element at left  !== element at element right
    if (lowerCaseStr[left] === lowerCaseStr[right]) {
      left++;
      right--;
    } else return false;
  }

  return true;
};
