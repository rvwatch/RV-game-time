const Frogger = require('./Frogger');
const Board = require('./Board');
const Movers = require('./Movers');
const Score = require('./Score')


class Game {
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.board = new Board(canvas, context);
    this.movers = new Movers(canvas, context);
    this.frogger = new Frogger(canvas, context);
    this.score = new Score();
  }

  displayLives(context){
    context.font = '32px serif';
    context.fillText('Lives:', 20, 640);
    context.fillText(this.frogger.lives, 120, 640);
  }

  displayScore(context){
    context.font = '32px serif';
    context.fillText('Score:', 20, 30);
    context.fillText(this.score.counter, 120, 30);
  }
}

module.exports = Game;