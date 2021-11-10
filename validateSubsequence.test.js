const isValidSubsequence = require('./validateSubsequence')

test('returns true for valid subsequences', () => {
  expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])).toBe(true);
  expect(isValidSubsequence([1, 2, 3, 4], [2])).toBe(true);
  expect(isValidSubsequence([1, 2, 2, 2, 2, 4], [2, 4])).toBe(true);
})

test('returns false for invalid subsequences', () => {
  expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 25, 22])).toBe(false);
  expect(isValidSubsequence([1, 2, 3, 4], [2, 3, 4, 5])).toBe(false);
  expect(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6])).toBe(false);
})
