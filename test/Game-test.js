const { assert } = require('chai');

const Game = require('../lib/Game.js');
const Frogger = require('../lib/Frogger.js');
const Board = require('../lib/Board.js');
const Car = require('../lib/Car.js');
const Log = require('../lib/Log.js');
const LilyPad = require('../lib/LilyPad.js')
const Movers = require('../lib/Movers.js');

global.document = { 
  getElementById: function (){},
  querySelector: function () {
    return {
      removeAttribute: function() {},
      setAttribute: function() {}
    };
  }
};

const context = {};
const canvas = {};


describe('Game', () => {
  let game;
  let frogger;
  let padArray;

  beforeEach( () => {
    game = new Game(canvas, context);
    frogger = new Frogger();
    padArray = [];
  })

  it('should be a function', () => {
    assert.equal(typeof(game), 'object');
  })
  
  it('should check to see if the lilypads are full and increase score and level', () => {
    let lily = new LilyPad(30, 60, 60, 60);
    padArray.push(lily);
    assert.equal(frogger.pads, 0);
    assert.equal(frogger.level, 1);
    assert.equal(frogger.score, 0)
    frogger.pads = 5;            
    arePadsFull(padArray);
    assert.equal(frogger.level, 2);
    assert.equal(frogger.score, 1000);
  })

})




