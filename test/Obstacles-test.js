const { assert } = require('chai');

const Obstacles = require('../lib/Obstacles.js');

describe('Obstacles', function() {
  let car;
  let cars = [];
  let log;
  let logs = [];

  beforeEach(() => {
    car = new Obstacles(480, 480, 40, 4, .5, 'red', 'car');
    cars.push(car);

    log = new Obstacles(480, 480, 40, 4, .5, 'red', 'log');
    logs.push(log);
  })

  it('should be a car object', () => {
    assert.equal(typeof(car), 'object');
    assert.equal(car.type, 'car')
  })

  it('should be a log object', () => {
    assert.equal(typeof(log), 'object');
    assert.equal(log.type, 'log');
  })

  it('should be able to move like a car', () => {
    assert.equal(car.x, 480);
    car.move();
    assert.equal(car.x, 480.5);
  })

  it('should be able to move like a log', () => {
    assert.equal(log.x, 480);
    log.move();
    assert.equal(log.x, 480.5);
  })
})
  