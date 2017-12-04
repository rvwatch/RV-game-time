let style = require('./assets/css/style.css');
let Game = require('./game.js');

let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let game = new Game(canvas, context);

// var car = new Car();
// var log = new Log();
// var movers = new Movers(context);
// var frogger = new Frogger(board, context);

window.onload = function() {
  game.board.drawLevel();
};


canvas.addEventListener('keydown', game.frogger.move.bind(game.frogger));

let logArray = game.movers.log.fillArray();
let carArray = game.movers.car.fillArray();
let moversArray = logArray.concat(carArray);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  game.board.drawLevel();
  game.movers.drawThis(moversArray);
  game.movers.move(moversArray);

  game.frogger.draw();
  game.frogger.collisionDetection(logArray, carArray);

  requestAnimationFrame(gameLoop);
});




