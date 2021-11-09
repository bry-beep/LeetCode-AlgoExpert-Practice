const twoNumberSum = require('./twoNumberSum')

test('finds two integers in array that add up to the given target', () => {
  expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1]);
  expect(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).toEqual([8, 9]);
})

test('returns empty array if no solution', () => {
  expect(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)).toEqual([]);
  expect(twoNumberSum([3], 3)).toEqual([]);
})
