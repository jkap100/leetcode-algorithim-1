/**
// * @param {number[]} numbers
// * @param {number} target
// * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       console.log(`index i ${numbers[i]}`);
//       console.log(`index j ${numbers[j]}`);
//       console.log(`sum i + j ${numbers[i] + numbers[j]}`);
//       if (numbers[i] + numbers[j] == target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
// };

//two pointers
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (target > sum) {
      left++;
    } else {
      right--;
    }
  }
};

// const input = [2,7,11,15]
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));
