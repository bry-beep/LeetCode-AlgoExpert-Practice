const toArray = require('./toArray')

test('returns array of arrays maintaining object key value pairs', () => {
  expect(toArray({ shrimp: 15, tots: 12 })).toEqual([["shrimp", 15], ["tots", 12]]);
  expect(toArray({ a: 1, b: 2 })).toEqual([["a", 1], ["b", 2]]);
  expect(toArray({ a: null, b: true })).toEqual([["a", null], ["b", true]]);
})

test('returns empty array if object is empty', () => {
  expect(toArray({})).toEqual([]);
})
