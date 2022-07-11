/**
// * @param {number} x
// * @return {boolean}
 */
// var isPalindrome = function (x) {
//   let reverse = x.toString().split("").reverse().join("");

//   return x.toString() === reverse;
// };

var isPalindrome = function (x) {
  let reversed = "";

  let xStr = x.toString();

  for (let i of xStr) {
    reversed = i + reversed;
  }

  return reversed === xStr;
};
