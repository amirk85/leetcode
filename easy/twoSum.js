//
// https://leetcode.com/problems/two-sum/

/* 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const currentVal = arr[i];
    let required = target - currentVal;
    if (map[required] !== undefined) return [map[required], i];
    else map[currentVal] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
