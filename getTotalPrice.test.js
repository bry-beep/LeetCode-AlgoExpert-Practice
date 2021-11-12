const getTotalPrice = require('./getTotalPrice')

test('returns reduced float answer', () => {
  expect(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
  ])).toBe(4.5);
  expect(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
  ])).toBe(.3);
  expect(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ])).toBe(10.4);
})
