let style = require('./assets/css/style.css');
let Game = require('./Game.js');

let startBtn = document.getElementById('start-button');
let resetBtn = document.getElementById('reset-button')
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(canvas, context);


window.onload = function() {
  game.board.drawLevel(context);
};

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetBtn);
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

    if(game.frogger.alive){
      game.frogger.draw(context);
    } 
    
    game.frogger.collisionDetection(logArray, carArray);

    requestAnimationFrame(gameLoop);
  });
};


function resetGame(){

}

function gameOver(){

}

