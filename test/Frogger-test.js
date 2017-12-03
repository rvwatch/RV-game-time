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
    assert.isFunction(Frogger);
  })

  it('should be an instance of a Toad', () => {
    expect(frogger).to.be.an.instanceOf(Frogger)
  })

}

