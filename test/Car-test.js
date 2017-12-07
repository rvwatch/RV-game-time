
const { assert } = require('chai');

const Car = require('../lib/Car.js');



describe('Car', function() {
  let car;
  let cars = [];

  beforeEach(() => {
    car = new Car(480, 480, 40, 4, .5, 'red');
    cars.push(car);
  })

  it('should be a car object', () => {
    assert.equal(typeof(car), 'object');
    assert.equal(car.type, 'car')
  })

  it('should be able to move', () => {
    assert.equal(car.x, 480);
    car.move();
    assert.equal(car.x, 480.5);
  })
})
  