const ParkingGarage = require('./garage')

let garage = new ParkingGarage();

test('adds cars to lot', () => {
  garage.addCar('5W143R');
  garage.addCar('87FT3L');
  expect(garage.getCarCount()).toBe(2);
})

test('removes cars from lot', () => {
  garage.removeCar('5W143R');
  expect(garage.getCarCount()).toBe(1);
})

// console.log(garage.getCarCount());
// garage.calcFee(5);
// garage.calcFee(2);