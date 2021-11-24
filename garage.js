
class ParkingGarage {
  constructor() {
    this.carCount = 0;
    this.cars ={};
    this.HOURLY_RATE_IN_DOLLARS = 4;
    this.CAR_LIMIT = 5;
  }

  getCarCount() {
    return this.carCount;
  }

  addCar(lisencePlateNum) {
    if (this.carCount !== CAR_LIMIT) {
      let start = {start: new Date()};
      this.cars[lisencePlateNum] = start;
      this.carCount++;
    } else {
      console.log('Too many cars!');
    }
  }

  removeCar(lisencePlateNum) {
    if (this.carCount < 1) {
      console.log('It\'s empty!');
    } else {
      let endTime = new Date();
      this.cars[lisencePlateNum] = (endTime - this.cars[lisencePlateNum].start) / 3600000;
      console.log('here', this.cars[lisencePlateNum]);
      this.carCount--;
    }
  }

  calcFee(lisencePlateNum) {
    if (this.cars[lisencePlateNum].start !== undefined) {
      console.log('This car is still parked!');
    } else {
       return this.cars[lisencePlateNum] * HOURLY_RATE_IN_DOLLARS;
    }
  }

}

const garage = new ParkingGarage();
garage.addCar(5);
garage.addCar(2);
garage.removeCar(5);
console.log(garage.getCarCount());
garage.calcFee(5);
garage.calcFee(2);

module.exports = ParkingGarage;
