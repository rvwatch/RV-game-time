const { assert } = require('chai');

const Game = require('../lib/Game.js');
const Frogger = require('../lib/Frogger.js');
// const Board = require('../lib/Board.js');
// const Car = require('../lib/Car.js');
// const Log = require('../lib/Log.js');
// const LilyPad = require('../lib/LilyPad.js')
// const Movers = require('../lib/Movers.js');



global.document = {
  
  getElementById: function (){},
  querySelector: function () {
    return {
      removeAttribute: function() {},
      setAttribute: function() {
      }
    };
  }
};

const context = {};
const canvas = {};

// let game = new Game(canvas, context);
// describe('Game', ()=> {

//   it('should be a function', () => {
//     // assert.equal(game).shouldBeAFunction();
//   });
//   // create car / log / lily arrays ??
//   it('should check if pads are empty, then full', () =>{
//     assert.equal();
//   });
//   //

// })
