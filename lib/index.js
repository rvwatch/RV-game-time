require('./assets/css/style.css');
var Frogger = require('./Frogger');
var Board = require('./Board');
var Enemy = require('./Enemy');
var EnemyManager = require('./EnemyManager');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var board = new Board(canvas);
var frogger = new Frogger(board, canvas);
var manager = new EnemyManager(); 
manager.addEnemy(new Enemy(context, 0, 400, 'car'));
manager.addEnemy(new Enemy(context, 0, 360, 'semi'));
manager.addEnemy(new Enemy(context, 0, 440, 'racecar'));




requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  board.drawLevel();
  manager.drawEnemies();
  frogger.draw();
  requestAnimationFrame(gameLoop);
});