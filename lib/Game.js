const Frogger = require('./Frogger');
const Board = require('./Board');
const Movers = require('./Movers');
const Log = require('./Log');
const Car = require('./Car');
const LilyPad = require('./LilyPad');
const GamePiece = require('./GamePiece');

class Game {
  constructor(canvas, context){
    this.canvas = canvas;
    this.context = context;
    this.board = new Board(canvas, context);
    this.movers = new Movers(canvas, context);
    this.frogger = new Frogger();
    this.level = 1;
    this.leveledUp = false;
  }

  createLogArray(){
    let logArray = [];
    for (let i = 0; i < 3; i++){
        logArray.push(new Log(i * 240, 120, 160, 40, .5, 'green'));
    }
    for (let i = 0; i < 4; i++){
        logArray.push(new Log(i * 180, 160, 80, 40, -.5, 'orange'));
    }
    for (let i = 0; i < 3; i++){
        logArray.push(new Log(i * 200, 200, 120, 40, .3, 'red'));
    }
    for (let i = 0; i < 4; i++){
        logArray.push(new Log(i * 100, 240, 40, 40, -.8, 'yellow'));
    }
    for (let i = 0; i < 4; i++){
        logArray.push(new Log(i * 180, 280, 80, 40, 1, 'violet'));
    }
    return logArray;
  }

  createCarArray(){
    let carArray = []
    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 240, 360, 160, 40, .5, 'green'));
    }
    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 180, 400, 80, 40, -.5, 'orange'));
    }
    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 200, 440, 120, 40, .3, 'red'));
    }
    for (let i = 0; i < 3; i++){
        carArray.push(new Car(i * 100, 480, 40, 40, -.8, 'yellow'));
    }
    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 180, 520, 80, 40, 1, 'violet'));
    }
    return carArray;
  }

  createLilyPadArray() {
    let lilyPadArray = [];
    for (let i = 0; i < 5; i++) {
      lilyPadArray.push(
        new LilyPad(120 * i + 30, 60, 60, 60, 0, 'green'));
    }
    return lilyPadArray;
  };

  startGamePrompt(context){
    context.fillStyle = 'blue';
    context.fillRect(0, 0, 600, 680);
    context.fillStyle = 'white';
    context.font = '50px Comic Sans MS';
    context.fillText('Let\'s Play Frogger!', 75, 200);
    context.fillText('Don\'t forget to use', 75, 350);
    context.fillText('the arrow keys!', 100, 420);
  }

  displayLives(context){
    context.font = '32px serif';
    context.fillText('Lives: ' + this.frogger.lives, 20, 640);
  }

  displayScore(context){
    context.font = '32px serif';
    context.fillText('Score: ' + this.frogger.score.counter, 20, 30);
  }

  displayLevel(context){
    context.font = '32px serif';
    context.fillText('Level: ' + this.level, 480, 640);
  }

  gameOverPrompt(context){
    context.fillStyle = 'red';
    context.fillRect(0, 0, 600, 680);
    context.fillStyle = 'white';
    context.font = '40px Comic Sans MS';
    context.fillText('Game Over Bro!', 125, 680 / 2);
    context.fillText('You made it to Level ' + this.level, 40, 400);
    context.fillText('and scored ' + this.frogger.score.counter + ' points!', 25, 475)
  }

  arePadsFull(lilyArray){
    if(this.frogger.pads === 5){
      this.level += 1;
      this.leveledUp = true;
      lilyArray.forEach ((lily) => {
        lily.color = "green"
      });
      this.frogger.pads = 0;
      this.frogger.score.counter += 1000;
    } 
  }
}

module.exports = Game;