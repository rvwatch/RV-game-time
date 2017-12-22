/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	let Game = __webpack_require__(1);

	let startBtn = document.getElementById('start-button');
	let resetBtn = document.getElementById('reset-button');
	const canvas = document.getElementById('game');
	const context = canvas.getContext('2d');
	const game = new Game();
	let running = false;
	let started = false;

	window.onload = function () {
	  game.startGamePrompt(context);
	};

	startBtn.addEventListener('click', startGame);
	resetBtn.addEventListener('click', resetGame);
	canvas.addEventListener('keydown', game.frogger.move.bind(game.frogger));

	let logArray = game.createLogArray();
	let carArray = game.createCarArray();
	let lilyArray = game.createLilyPadArray();
	let moversArray = [...logArray, ...carArray];

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
	  array.forEach(object => {
	    if (object.velocity > 0) {
	      object.velocity += .5;
	    } else {
	      object.velocity += -.5;
	    }
	  });
	  game.leveledUp = false;
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	const Frogger = __webpack_require__(2);
	const Board = __webpack_require__(5);
	const Movers = __webpack_require__(6);
	const Obstacles = __webpack_require__(7);
	const LilyPad = __webpack_require__(3);

	class Game {
	  constructor() {
	    this.board = new Board();
	    this.movers = new Movers();
	    this.frogger = new Frogger();
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
	      lilyPadArray.push(new LilyPad(120 * i + 30, 60, 60, 60, 0, 'green', 'lilypad'));
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
	    context.fillText('and scored ' + this.score + ' points!', 105, 500);
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
	      lilyArray.forEach(lily => {
	        lily.color = "green";
	      });
	      this.lilyCounter = 0;
	      this.score += 1000;
	    }
	  }
	}

	module.exports = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	const LilyPad = __webpack_require__(3);

	class Frogger {
	  constructor() {
	    this.x = 280;
	    this.y = 560;
	    this.width = 40;
	    this.height = 40;
	    this.alive = true;
	    this.lives = 3;
	    this.onPad = false;
	    this.color = '#4bf442';
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }

	  move(event) {
	    switch (event.keyCode) {
	      case 39:
	        // right arrow - x-axis
	        if (this.x <= 600 - this.width) {
	          this.x += this.width;
	        }
	        break;
	      case 37:
	        // left arrow - x-axis
	        if (this.x >= 0) {
	          this.x -= this.width;
	        }
	        break;
	      case 38:
	        // up arrow - y-axis
	        if (this.y > this.height + 79) {
	          this.y -= this.height;
	        }
	        break;
	      case 40:
	        //down arrow - y-axis
	        if (this.y < 680 - 120) {
	          this.y += this.height;
	        }
	        break;
	      default:
	        return null;
	    }
	  }

	  get top() {
	    return this.y;
	  }
	  get right() {
	    return this.x + this.width;
	  }
	  get bottom() {
	    return this.y + this.height;
	  }
	  get left() {
	    return this.x;
	  }

	  collisionDetection(logs, cars, pads) {
	    if (this.isOnLilyPad(pads)) {
	      this.onPad = true;
	      this.respawn();
	    }
	    if (!this.isOnLog(logs) && this.top < 320 && this.top > 115) {
	      this.alive = false;
	    } else if (this.top < 320) {
	      this.alive = true;
	    }
	    if (this.hitByCar(cars) && this.top > 320) {
	      this.alive = false;
	    } else if (this.top > 320) {
	      this.alive = true;
	    }
	    if (!this.alive) {
	      this.lives -= 1;
	      this.respawn();
	    }
	  }

	  hitByCar(cars) {
	    let outPut = false;

	    cars.forEach(car => {
	      let carTop = car.y;
	      let carRight = car.x + car.width;
	      let carBottom = car.y + car.height;
	      let carLeft = car.x;

	      if (this.top + 1 > carBottom || this.right < carLeft || this.bottom - 1 < carTop || this.left > carRight) {
	        return null;
	      } else {
	        outPut = true;
	      }
	    });
	    return outPut;
	  }

	  isOnLog(logs) {
	    let outPut = false;

	    logs.forEach(log => {
	      let logTop = log.y;
	      let logRight = log.x + log.width;
	      let logBottom = log.y + log.height;
	      let logLeft = log.x;

	      if (this.top < logBottom && this.right > logLeft && this.bottom > logTop && this.left < logRight) {
	        this.x += log.velocity;
	        outPut = true;
	      }

	      if (this.x >= 560) {
	        this.x--;
	      }

	      if (this.x <= 0) {
	        this.x++;
	      }
	    });
	    return outPut;
	  }

	  isOnLilyPad(pads) {
	    let outPut = false;

	    pads.forEach(lily => {
	      let lilyRight = lily.x + lily.width;
	      let lilyBottom = lily.y + lily.height;
	      let lilyLeft = lily.x;

	      if (this.top < lilyBottom && this.left > lilyLeft && this.right < lilyRight) {
	        lily.hasFrog = true;
	        lily.color = 'red';
	        outPut = true;
	      }

	      if (!lily.hasFrog) {
	        lily.color = 'green';
	      }
	    });
	    return outPut;
	  }

	  respawn() {
	    this.x = 280;
	    this.y = 560;
	  }

	}

	module.exports = Frogger;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	let GamePiece = __webpack_require__(4);

	class LilyPad extends GamePiece {
	  constructor(x, y, width, height, velocity, color, type) {
	    super(x, y, width, height, velocity, color);
	    this.hasFrog = false;
	    this.type = 'lilypad';
	  }
	}

	module.exports = LilyPad;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	class GamePiece {
	  constructor(x, y, width, height, velocity, color) {
	    this.color = color;
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.velocity = velocity;
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }

	  move() {
	    this.x += this.velocity;
	  }

	}

	module.exports = GamePiece;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	class Board {
	  constructor() {
	    this.unit = 40;
	    this.width = 600;
	    this.height = 680;
	  }

	  drawLevel(context) {
	    //starting line
	    context.fillStyle = 'grey';
	    context.fillRect(0, this.unit * 14, this.width, this.unit);

	    //street
	    context.fillStyle = 'black';
	    context.fillRect(0, this.unit * 9, this.width, this.unit * 5);

	    //median
	    context.fillStyle = 'magenta';
	    context.fillRect(0, this.unit * 8, this.width, this.unit);

	    //river
	    context.fillStyle = 'blue';
	    context.fillRect(0, this.unit * 3, this.width, this.unit * 5);

	    //wall
	    context.fillStyle = 'grey';
	    context.fillRect(0, this.unit, this.unit * 15, this.unit * 2);
	  }
	}

	module.exports = Board;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	class Movers {
	  constructor() {
	    this.unit = 40;
	    this.boardWidth = 600;
	  }

	  drawThis(array, context) {
	    array.forEach(object => {
	      object.draw(context);
	    });
	  }

	  move(array) {
	    array.forEach(object => {
	      object.move();
	    });
	    this.loopMovers(array);
	  }

	  loopMovers(array) {
	    for (let i = 0; i < array.length; i++) {
	      if (array[i].x > this.boardWidth) {
	        array[i].x = -array[i].width;
	      } else if (array[i].x + array[i].width < 0) {
	        array[i].x = this.boardWidth;
	      }
	    }
	  }
	}

	module.exports = Movers;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	let GamePiece = __webpack_require__(4);

	class Obstacles extends GamePiece {
	  constructor(x, y, width, height, velocity, color, type) {
	    super(x, y, width, height, velocity, color);
	    this.type = type;
	  }
	}

	module.exports = Obstacles;

/***/ })
/******/ ]);