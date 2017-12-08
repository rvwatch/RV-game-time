const { assert } = require('chai');

const Movers = require('../lib/Movers.js');
const Obstacles = require('../lib/Obstacles.js');

describe('Movers', function() {
  let log;
  let car;
  let movers;
  let array;

  function moveMore(num, array) {
      for(var i = 0; i < num; i++) {
        movers.move(array);
      };
    };

  beforeEach(() => {
    movers = new Movers();
    log = new Obstacles(120, 280, 80, 40, 1, 'red', 'log');
    let logs = [];
    logs.push(log);
    car = new Obstacles(280, 480, 40, 40, -1, 'red', 'car');
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
    moveMore(5, array);
    assert.equal(log.x, 125);
    assert.equal(car.x, 275);
  })


  it('should loop objects after they cross the canvas width', () =>{
    assert.equal(log.x, 120);
    assert.equal(car.x, 280);
    moveMore(481, array);
    assert.equal(log.x, -80);
    assert.equal(car.x, 440);
  })

});
