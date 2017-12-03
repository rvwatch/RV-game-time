const Frogger = require('./Frogger');
const Board = require('./Board');
const Movers = require('./Movers');


class Game{
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.board = new Board(canvas, context);
    this.movers = new Movers(canvas, context);
    this.frogger = new Frogger(canvas, context);
  }
}

module.exports = Game;