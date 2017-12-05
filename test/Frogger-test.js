const { expect } = require('chai');
const { assert } = require('chai');

const Frogger = require('..lib/Frogger.js');
const Board = require('..lib/Board.js');
const Car = require('..lib/Car.js');
const Log = require('..lib/Log.js');
const Movers = require('..lib/Movers.js');

describe('Frogger', function() {
  var frogger = new Frogger();
  var board = new Board();


  it('should be a function', () => {
    expect(true, true);
  })

  it.skip('should be an instance of a Toad', () => {
    expect(frogger).to.be.an.instanceOf(Frogger);
  })

  // it('should have moved by x and y', () => {

// frogger.move(event.keyCode) check that this.x has incremented by the width
//   }

}
//event object with keycode and give that to move()
//test every interaction
//test every key code
//need to create new frog and new car and with same x, y 
