const { assert } = require('chai');

const Movers = require('../lib/Movers.js');
const Log = require('../lib/Log.js');
const Car = require('../lib/Car.js');

describe('Movers', function() {
  let log;
  let car;
  let movers;
  let array;

  beforeEach(() => {
    movers = new Movers();
    log = new Log(120, 280, 80, 40, 1);
    let logs = [];
    logs.push(log);
    car = new Car(280, 480, 40, 40, 1);
    let cars = [];
    cars.push(car);
    array = logs.concat(cars);
   })

  it('should be an object', () => {
    assert.equal(typeof(movers), 'object');
  })

  it('should move the objects', () =>{
    assert.equal(log.x, 120);
    assert.equal(car.x, 280);
    movers.move(array);
    movers.move(array);
    movers.move(array);
    movers.move(array);
    movers.move(array);
    assert.equal(log.x, 125);
    assert.equal(car.x, 285);
  })

});
