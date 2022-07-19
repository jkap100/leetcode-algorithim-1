/**
 //* @param {string} s
 //* @return {string}
 */
var reverseWords = function (s) {
  wordArr = s.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].split("").reverse().join("");
    console.log(wordArr[i].split("").reverse().join(""));
  }
  return wordArr.join(" ");
};

const input = "Let's take LeetCode contest";
console.log(reverseWords(input));
