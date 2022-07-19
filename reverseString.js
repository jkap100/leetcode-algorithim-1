/**
 //* @param {character[]} s
 //* @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function (s) {
//   return s.reverse();
// };

var reverseString = function (s) {
  reverse = [];
  while (s.length) {
    reverse.push(s.pop());
  }
  //   console.log(s);
  return (s = reverse);
};

const input = ["h", "e", "l", "l", "o"];

console.log(reverseString(input));
