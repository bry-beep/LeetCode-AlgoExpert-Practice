const greaterValues = require('./greaterValues');

test('returns number of values greater than target', () => {
  expect(greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5)).toBe(4);
  expect(greaterValues([1, 2, 3, 4, 4, 7, 9, 10, 11], 5)).toBe(4);
  // expect(greaterValues([11, 1, 5, 2, 3, 10, 9, 5, 7], 5)).toBe(4);
})

test('returns 0 if no values are greater than target', () => {
  expect(greaterValues([1, 2, 3, 5, 5, 5, 5, 5, 5], 5)).toBe(0);
  expect(greaterValues([1, 2, 3, 4, 3, 2, 1, 0, 4], 5)).toBe(0);
})
