// 136. Single Number

// https://leetcode.com/problems/single-number/

/*

Input: nums = [4,1,2,1,2]
Output: 4

 */

// Linear time complexity

function singleNumber(nums) {
  const map = {};
  for (let num of nums) map[num]++ || (map[num] = 1);
  for (let key in map) if (map[key] === 1) return Number(key);
}

console.log(singleNumber([4, 1, 2, 1, 2]));
