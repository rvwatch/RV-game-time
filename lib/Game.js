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
    this.frogger = new Frogger(canvas);
    this.score = new Score();
    this.level = 1;
  }

  displayLives(context){
    context.font = '32px serif';
    context.fillText('Lives: ' + this.frogger.lives, 20, 640);
  }

  displayScore(context){
    context.font = '32px serif';
    context.fillText('Score: ' + this.score.counter, 20, 30);
  }

  winLevel(){
    

  }
}

module.exports = Game;