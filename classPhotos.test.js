const classPhotos = require('./classPhotos')

test('returns true for valid heights', () => {
  expect(classPhotos([6, 9, 2, 4, 5], [5, 8, 1, 3, 4])).toBe(true);
  expect(classPhotos([5, 6], [5, 4])).toBe(true);
  expect(classPhotos([126], [125])).toBe(true);
})

test('returns false for invalid heights', () => {
  expect(classPhotos([1, 1, 1, 1, 1, 1, 1, 1], [5, 6, 7, 2, 3, 1, 2, 3])).toBe(false);
  expect(classPhotos([2, 4, 7, 5, 1, 6], [3, 5, 6, 8, 2, 2])).toBe(false);
})
