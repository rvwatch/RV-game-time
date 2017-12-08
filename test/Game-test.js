const { assert } = require('chai');

const Game = require('../lib/Game.js');
const Frogger = require('../lib/Frogger.js');
const Board = require('../lib/Board.js');
const Obstacles = require('../lib/Obstacles.js');
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
  let array;

  beforeEach( () => {
    game = new Game();
    frogger = new Frogger();
    array = [];
  })

  it('should be a function', () => {
    assert.equal(typeof(game), 'object');
  })

  it('should build out an array of logs', () => {
    assert.equal(array.length, 0);
    array = game.createLogArray();
    assert.equal(array.length, 18);
  })

  it('should build out an array of cars', () => {
    assert.equal(array.length, 0);
    array = game.createCarArray();
    assert.equal(array.length, 11);
  })

  it('should build out an array of lilypads', () => {
    assert.equal(array.length, 0);
    array = game.createLilyPadArray();
    assert.equal(array.length, 5);
  })
  
  it('should check to see if the lilypads are full and increase score and level', () => {
    let lily = new LilyPad(30, 60, 60, 60, 0, 'green');
    let padArray = [];
    padArray.push(lily);
    assert.equal(game.lilyCounter, 0);
    assert.equal(game.level, 1);
    assert.equal(game.score, 0)
    
    game.lilyCounter = 4;  
    game.frogger.onPad = true;         
    game.arePadsFull(padArray);
  
    assert.equal(game.level, 2);
    assert.equal(game.score, 1500);
    assert.equal(game.lilyCounter, 0);
  })

})