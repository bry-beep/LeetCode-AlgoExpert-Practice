const generateParentheses = require('./generateParentheses')

test('finds all combinations of parentheses', () => {
  expect(generateParentheses(1)).toEqual(["()"]);
  expect(generateParentheses(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
})
