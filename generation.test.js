const generation = require('./generation')

test('returns correct name based on ancestors', () => {
  expect(generation(2, 'f')).toBe('granddaughter');
  expect(generation(-3, 'm')).toBe('great grandfather');
  expect(generation(3, 'f')).toBe('great granddaughter');
  expect(generation(1, 'f')).toBe('daughter');
  expect(generation(0, 'f')).toBe('me!');
  expect(generation(0, 'm')).toBe('me!');
})
