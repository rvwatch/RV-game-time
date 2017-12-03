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
let array = logArray.concat(carArray);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  game.board.drawLevel();
  game.movers.drawThis(array);
  game.movers.move(array);

  game.frogger.draw();

  requestAnimationFrame(gameLoop);
});



//Pseudo stuff!

// Build out the background elements of the frogger level.

// Create a new Frogger instance.

// Generate Cars, Racecars and Semi trucks with different velocities and directions per Vehicle type.

// Generate logs with different lenghts, velocities and directions based on the row they are in. 

// Generate a row of turtles. Randomly set a group of turtles to "sink" at random intervals. 

// Move Frogger 1 Frogger length on keydown of up/down/right/left arrow keys. 

// Detect collisions with moving vehicles. Kill frogger upon interaction. 

// Detect Collisions with Logs/turtles and have frogger inherit the veleocity in x of the log/turtle.

// Allow Frogger to "jump" off a log and die.

// Detect collisions with water. Kill frogger upon interaction. 

// Detect collision with each goal. Reset frogger at start of level, update points total. 

// Detect when all 5 goals have been filled. Launch some sort of "congrats!" and change level state. 

// Detect when player is out of lives. Launch "game over!" and reset button. 

// Have a timer bar, counting down during gameplay. When it reaches the end, KILL THE FROG!

// Number of lives in border bar - so like 2 EXTRA FROG LIVES.

// Countdown number of player lives whenever we kill the frog

//MVP
//frogs should be killed by cars
// at least 1 level
//GAME OVER is when frog loses all of its lives
// frogs should be able to jump on logs and inherit their velocity
//MVP is yogo frog, GAME OVER when you die
//logs turtles cars goal 
//mvp WIN is 1 goal, 1 frog reaches safety = YOU WIN!

//EXTENSIONS
//more than 1 frog life that counts down
//timer that counts down - can also make you lose the game
//points for getting a frog to safety
//armadillos
//female frog
//gators
//snakes
//turtles that disappear






