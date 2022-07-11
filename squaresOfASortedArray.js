/**
 //* @param {number[]} nums
 //* @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let resultIdx = nums.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (leftVal < rightVal) {
      result[resultIdx] = rightVal;
      right--;
    } else {
      result[resultIdx] = leftVal;
      left++;
    }
    resultIdx--;
  }
  return result;
};

const input = [-4, -1, 0, 3, 10];
const input2 = [-7, -3, 2, 3, 11];

console.log(sortedSquares(input));
console.log(sortedSquares(input2));

//time complexity = O(n)
// space complexity = O(n)
