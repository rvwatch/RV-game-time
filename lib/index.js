let style = require('./assets/css/style.css');
let Game = require('./Game.js');

let startBtn = document.getElementById('start-button');
let resetBtn = document.getElementById('reset-button')
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context);


// window.onload = function() {
//   game.board.drawLevel(context);
// };

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
canvas.addEventListener('keydown', game.frogger.move.bind(game.frogger));

let logArray = game.createLogArray();
let carArray = game.createCarArray();
let moversArray = logArray.concat(carArray);


function startGame(){
  startBtn.setAttribute('disabled', true);
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    game.board.drawLevel(context);
    game.displayLives(context);
    game.displayScore(context);
    game.movers.drawThis(moversArray);
    game.movers.move(moversArray);
    game.isFrogSafe();
    if(game.frogger.lives > 0){
      game.frogger.draw(context);
    } else {
      gameOver();
    }
    
    game.frogger.collisionDetection(logArray, carArray);

    requestAnimationFrame(gameLoop);
  });
};


function resetGame(){
  startGame();
}

function gameOver(){
   game.gameOverPrompt(context);
}

// multiple safe zones should be displayed on each level

// frogger needs to be able to land on a safe zone at the top of the level

// Game needs to detect when frogger lands in the safe zone

// Safe zone should change color or add image after frogger collides with it

// Points should be added to score when frogger lands in safe zone

// Frogger should respawn to his start position after landing in a safe zone

// After a variable amount of safe zones are filled send a congrats prompt

// Congrats prompt will allow the user to continue to next level with a button

// New level should add more safe zones to level

// New level should increase velocities to obstacles

// New level should change the obstacle patterns
