const Frogger = require('./Frogger');
const Board = require('./Board');
const Movers = require('./Movers');
const Obstacles = require('./Obstacles');
const LilyPad = require('./LilyPad');

class Game {
  constructor() {
    this.board = new Board ();
    this.movers = new Movers ();
    this.frogger = new Frogger ();
    this.level = 1;
    this.leveledUp = false;
    this.score = 0;
    this.lilyCounter = 0;
  }

  createLogArray() {
    let logArray = [];

    for (let i = 0; i < 3; i++) {
      logArray.push(new Obstacles(i * 240, 120, 160, 40, .5, 'green', 'log'));
    }

    for (let i = 0; i < 4; i++) {
      logArray.push(new Obstacles(i * 180, 160, 80, 40, -.5, 'orange', 'log'));
    }

    for (let i = 0; i < 3; i++) {
      logArray.push(new Obstacles(i * 200, 200, 120, 40, .3, 'red', 'log'));
    }

    for (let i = 0; i < 4; i++) {
      logArray.push(new Obstacles(i * 100, 240, 40, 40, -.8, 'yellow', 'log'));
    }

    for (let i = 0; i < 4; i++) {
      logArray.push(new Obstacles(i * 180, 280, 80, 40, 1, 'violet', 'log'));
    }
    return logArray;
  }

  createCarArray() {
    let carArray = [];

    for (let i = 0; i < 2; i++) {
      carArray.push(new Obstacles(i * 240, 360, 160, 40, .5, 'green', 'car'));
    }

    for (let i = 0; i < 2; i++) {
      carArray.push(new Obstacles(i * 180, 400, 80, 40, -.5, 'orange', 'car'));
    }

    for (let i = 0; i < 2; i++) {
      carArray.push(new Obstacles(i * 200, 440, 120, 40, .3, 'red', 'car'));
    }

    for (let i = 0; i < 3; i++) {
      carArray.push(new Obstacles(i * 100, 480, 40, 40, -.8, 'yellow', 'car'));
    }

    for (let i = 0; i < 2; i++) {
      carArray.push(new Obstacles(i * 180, 520, 80, 40, 1, 'violet', 'car'));
    }
    return carArray;
  }

  createLilyPadArray() {
    let lilyPadArray = [];

    for (let i = 0; i < 5; i++) {
      lilyPadArray.push(
        new LilyPad(120 * i + 30, 60, 60, 60, 0, 'green', 'lilypad'));
    }
    return lilyPadArray;
  }

  startGamePrompt(context) {
    context.fillStyle = 'blue';
    context.fillRect(0, 0, 600, 680);
    context.fillStyle = 'white';
    context.font = '50px Comic Sans MS';
    context.fillText('Let\'s Play Frogger!', 75, 200);
    context.fillText('Don\'t forget to use', 75, 350);
    context.fillText('the arrow keys!', 100, 420);
  }

  displayLives(context) {
    context.font = '32px serif';
    context.fillText('Lives: ' + this.frogger.lives, 20, 640);
  }

  displayScore(context) {
    context.font = '32px serif';
    context.fillText('Score: ' + this.score, 20, 30);
  }

  displayLevel(context) {
    context.font = '32px serif';
    context.fillText('Level: ' + this.level, 480, 640);
  }

  gameOverPrompt(context) {
    context.fillStyle = 'red';
    context.fillRect(0, 0, 600, 680);
    context.fillStyle = 'white';
    context.font = '40px Comic Sans MS';
    context.fillText('Game Over Bro!', 145, 680 / 2);
    context.fillText('You made it to Level ' + this.level, 100, 450);
    context.fillText('and scored ' + 
      this.score + ' points!', 105, 500);
  }
  
  arePadsFull(lilyArray) {
    if (this.frogger.onPad) {
      this.lilyCounter++;
      this.frogger.onPad = false;
      this.score += 500;
    } 

    if (this.lilyCounter === 5) {
      this.level += 1;
      this.leveledUp = true;
      lilyArray.forEach ((lily) => {
        lily.color = "green";
      });
      this.lilyCounter = 0;
      this.score += 1000;
    } 
  }
}

module.exports = Game;