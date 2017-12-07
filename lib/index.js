let Game = require('./Game.js');

let startBtn = document.getElementById('start-button');
let resetBtn = document.getElementById('reset-button');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game();
let running = false;
let started = false;

window.onload = function() {
  game.startGamePrompt(context);
};

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
canvas.addEventListener('keydown', game.frogger.move.bind(game.frogger));

let logArray = game.createLogArray();
let carArray = game.createCarArray();
let lilyArray = game.createLilyPadArray();
let moversArray = logArray.concat(carArray);


function startGame() {
  startBtn.style.display = "none";
  resetBtn.style.display = "block";

  requestAnimationFrame(function gameLoop() {
    if (!running && !started) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      game.board.drawLevel(context);
      game.displayLives(context);
      game.displayScore(context);
      game.displayLevel(context);
      if (game.leveledUp) {
        increaseVelocity(moversArray);
      }
      game.movers.drawThis(lilyArray, context);
      game.movers.drawThis(moversArray, context);
      game.movers.move(moversArray);
      game.arePadsFull(lilyArray);
      if (game.frogger.lives > 0) {
        game.frogger.draw(context);
      } else {
        gameOver();
      }
      game.frogger.collisionDetection(logArray, carArray, lilyArray);
      requestAnimationFrame(gameLoop);
    } 
  });
}

function resetGame() {
  location.reload();
}

function gameOver() {
  game.gameOverPrompt(context);
}

function increaseVelocity(array) {
  array.forEach( (object) => {
    if (object.velocity > 0) {
      object.velocity += .5;
    } else {
      object.velocity += -.5;
    }
  });
  game.leveledUp = false;
}
