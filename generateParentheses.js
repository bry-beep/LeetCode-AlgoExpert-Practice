/* given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 1 <= n <= 8 */

 var generateParentheses = function(n) {
  let answer = [];

  const strBuilder = (str, openCount, closeCount, canCloseCount) => {
      if (openCount === 0 && closeCount === 0) {
          answer.push(str);
      }
      if (openCount) {
        strBuilder(str + "(", openCount-1, closeCount, canCloseCount+1);
      }
      if (canCloseCount) {
        strBuilder(str + ")", openCount, closeCount-1, canCloseCount-1);
      }
  }
  strBuilder("" , n, n, 0);
  return answer;
};

module.exports = generateParentheses;
