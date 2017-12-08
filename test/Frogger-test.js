const { assert } = require('chai');

const Frogger = require('../lib/Frogger.js');
const Board = require('../lib/Board.js');
const Obstacles = require('../lib/Obstacles.js');
const LilyPad = require('../lib/LilyPad.js')
const Movers = require('../lib/Movers.js');



describe('Frogger', function() {
  let frogger;

  beforeEach(() => {
    frogger = new Frogger();
  })

  it('should be a object', () => {
    assert.equal(typeof(frogger), 'object');
  })

  it('should be in its start position', () => {
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
  })

  it('should move right when we hit right arrow', () =>{
    let event = {
      keyCode: 39
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 320);
    assert.equal(frogger.y, 560);
  })

  it('should move down when we hit down arrow', () => {
    let event = {
      keyCode: 40
    }
    frogger.y = 520;
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 520);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
  })

  it('should move left when we hit left arrow', () =>{
    let event = {
      keyCode: 37
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 240);
    assert.equal(frogger.y, 560);
  })


  it('should move up when we hit up arrow', () => {
    let event = {
      keyCode: 38
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 520);
  })

  it('should not move when you hit any other key', () => {
    let event = {
      keyCode: 36
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    assert.equal(frogger.move(event), null);
    })

  it('should know when it is hit by a car', () => {
    let car = new Obstacles(280, 480, 40, 40, 'red', 'car');
    let cars = []
    cars.push(car);
    let event = {
      keyCode: 38
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    assert.equal(frogger.hitByCar(cars), false);
    frogger.move(event);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 480);
    assert.equal(frogger.hitByCar(cars), true);
  })

  it('should know when it is safe', () => {
    let car = new Obstacles(480, 480, 40, 40, 'red', 'car');
    let cars = []
    cars.push(car);
    let event = {
      keyCode: 38
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 480);
    assert.equal(frogger.hitByCar(cars), false);
  })

  it('should know when it hops on a log', () => {
    let log = new Obstacles(280, 280, 80, 40, 'red', 'log');
    let logs = []
    logs.push(log);
    let event = {
      keyCode: 38
    }
    frogger.x = 280;
    frogger.y = 320;  // frog on median
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 280); // frog in river
    assert.equal(frogger.isOnLog(logs), true);
  })

  it('should know when it hops in the river', () => {
    let log = new Obstacles(120, 280, 80, 40, 'red', 'log');
    let logs = []
    logs.push(log);
    let event = {
      keyCode: 38
    }
    frogger.x = 280;
    frogger.y = 320;  // frog on median
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 280); // frog in river
    assert.equal(frogger.isOnLog(logs), false);
  })

  it('should die if it is hit by a car', () => {
    let log = new Obstacles(120, 280, 80, 40, 'red', 'log');
    let logs = [];
    logs.push(log);
    let car = new Obstacles(280, 480, 40, 40, 'red', 'car');
    let cars = [];
    let lily = new LilyPad(30, 60, 60, 60, 'green', 'lilypad');
    let pads = [];
    cars.push(car);
    let event = {
      keyCode: 38
    }
    assert.equal(frogger.lives, 3);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 480);
    assert.equal(frogger.hitByCar(cars), true);
    frogger.collisionDetection(logs, cars, pads);
    assert.equal(frogger.alive, false);
    assert.equal(frogger.lives, 2);
  })

  it('should die if it hops in the river', () => {
    let car = new Obstacles(480, 480, 40, 40, 'red', 'car');
    let cars = []
    cars.push(car);
    let log = new Obstacles(120, 280, 80, 40, 'red', 'log');
    let logs = []
    let lily = new LilyPad(30, 60, 60, 60, 'green', 'lilypad');
    let pads = [];
    logs.push(log);
    let event = {
      keyCode: 38
    }
    frogger.x = 280;
    frogger.y = 320;  // frog on median
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 280); // frog in river
    assert.equal(frogger.lives, 3);
    assert.equal(frogger.isOnLog(logs), false);
    frogger.collisionDetection(logs, cars, pads);
    assert.equal(frogger.alive, false);
    assert.equal(frogger.lives, 2);
  })

  it('should be able to respawn itself', () => {
    frogger.x = 280;
    frogger.y = 320;  // frog on median
    frogger.respawn();
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
  });

  it('should be able to tell when frogger is on LilyPad', () => {
    let lily = new LilyPad(30, 60, 60, 60, 'green', 'lilypad');
    let pads = [];
    pads.push(lily);
    frogger.x = 40;
    frogger.y = 120;
    assert.equal(frogger.isOnLilyPad(pads), false);
    frogger.x = 40;
    frogger.y = 100;
    assert.equal(frogger.isOnLilyPad(pads), true);
  });

})
  
