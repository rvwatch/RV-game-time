let style = require('./assets/css/style.css');
let Game = require('./game.js');

let startBtn = document.getElementById('start-button');
let resetBtn = document.getElementById('reset-button')
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(canvas, context);


window.onload = function() {
  game.board.drawLevel();
};

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetBtn);
canvas.addEventListener('keydown', game.frogger.move.bind(game.frogger));

let logArray = game.movers.log.fillArray();
let carArray = game.movers.car.fillArray();
let moversArray = logArray.concat(carArray);


function startGame(){
  startBtn.setAttribute('disabled', true);
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    game.board.drawLevel();
    game.displayLives(context);
    game.displayScore(context);
    game.movers.drawThis(moversArray);
    game.movers.move(moversArray);

    if(game.frogger.alive){
      game.frogger.draw();
    } 
    
    game.frogger.collisionDetection(logArray, carArray);

    requestAnimationFrame(gameLoop);
  });
};


function resetGame(){

}

function gameOver(){
  
}

