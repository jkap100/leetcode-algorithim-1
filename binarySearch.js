/**
 //* @param {number[]} nums
 //* @param {number} target
 //* @return {number}
 */
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

const input = ([-1, 0, 3, 5, 9, 12], 9);
const input2 = ([-1, 0, 3, 5, 9, 12], 2);

console.log(search(input));
// console.log(search(input2));
