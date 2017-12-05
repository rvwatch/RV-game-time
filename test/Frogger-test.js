const { expect } = require('chai');
const { assert } = require('chai');

const Frogger = require('../lib/Frogger.js');
const Board = require('../lib/Board.js');
const Car = require('../lib/Car.js');
const Log = require('../lib/Log.js');
const Movers = require('../lib/Movers.js');



describe('Frogger', function() {
  let frogger;
  let car;

  beforeEach(() => {
    frogger = new Frogger();
    car = new Car();
  })

  it('should be a object', () => {
    assert.equal(typeof(frogger), 'object');
  })

  it('should be in its start position', () => {
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
  })

  it('x should increment when we hit right arrow', () =>{
    let event = {
      keyCode: 39
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 320);
    assert.equal(frogger.y, 560);
  })

  it('y should increment when we hit down arrow', () => {
    let event = {
      keyCode: 40
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 600);
  })

  it('x should decrement when we hit left arrow', () =>{
    let event = {
      keyCode: 37
    }
    assert.equal(frogger.x, 280);
    assert.equal(frogger.y, 560);
    frogger.move(event);
    assert.equal(frogger.x, 240);
    assert.equal(frogger.y, 560);
  })


  it('y should decrement when we hit up arrow', () => {
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

})
  

//event object with keycode and give that to move()
//test every interaction
//test every key code
//need to create new frog and new car and with same x, y 

// const canvas = class Canvas {
//   constructor(){
//     this.width = 600;
//     this.height = 680;
//   }
// }