// 26. Remove Duplicates from Sorted Array

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/* 
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    while (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
