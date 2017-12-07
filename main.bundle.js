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

	let style = __webpack_require__(1);
	let Game = __webpack_require__(5);
	const Frogger = __webpack_require__(6);

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
	      };
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
	};

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

	// function checkLevel(){
	//   if(game.level === 2){
	//     increaseVelocity(moversArray);
	//   }
	// }

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  overflow: hidden;\n}\n\ncanvas {\n  border: 5px solid blue;\n  display: block;\n  margin: auto;\n}\n\n.gameButtons {\n  width:600px;\n  text-align: right;\n  margin: auto;\n  position: relative;\n  z-index: 50;\n}\n\n\nbutton {\n  position: absolute;\n  top: 15px;\n}\n\n.start {\n  right: 200px;\n  top: 500px;\n  border: none;\n  font-size: 40px;\n  line-height: 55px;\n  padding: 10px 25px 15px 25px;\n}\n\n.reset {\n  right: 10px;\n  display: none;\n}", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	const Frogger = __webpack_require__(6);
	const Board = __webpack_require__(8);
	const Movers = __webpack_require__(9);
	const Log = __webpack_require__(10);
	const Car = __webpack_require__(12);
	const LilyPad = __webpack_require__(13);
	const GamePiece = __webpack_require__(11);

	class Game {
	  constructor() {
	    this.board = new Board();
	    this.movers = new Movers();
	    this.frogger = new Frogger();
	    this.level = 1;
	    this.leveledUp = false;
	  }

	  createLogArray() {
	    let logArray = [];

	    for (let i = 0; i < 3; i++) {
	      logArray.push(new Log(i * 240, 120, 160, 40, .5, 'green'));
	    }

	    for (let i = 0; i < 4; i++) {
	      logArray.push(new Log(i * 180, 160, 80, 40, -.5, 'orange'));
	    }

	    for (let i = 0; i < 3; i++) {
	      logArray.push(new Log(i * 200, 200, 120, 40, .3, 'red'));
	    }

	    for (let i = 0; i < 4; i++) {
	      logArray.push(new Log(i * 100, 240, 40, 40, -.8, 'yellow'));
	    }

	    for (let i = 0; i < 4; i++) {
	      logArray.push(new Log(i * 180, 280, 80, 40, 1, 'violet'));
	    }

	    return logArray;
	  }

	  createCarArray() {
	    let carArray = [];

	    for (let i = 0; i < 2; i++) {
	      carArray.push(new Car(i * 240, 360, 160, 40, .5, 'green'));
	    }

	    for (let i = 0; i < 2; i++) {
	      carArray.push(new Car(i * 180, 400, 80, 40, -.5, 'orange'));
	    }

	    for (let i = 0; i < 2; i++) {
	      carArray.push(new Car(i * 200, 440, 120, 40, .3, 'red'));
	    }

	    for (let i = 0; i < 3; i++) {
	      carArray.push(new Car(i * 100, 480, 40, 40, -.8, 'yellow'));
	    }

	    for (let i = 0; i < 2; i++) {
	      carArray.push(new Car(i * 180, 520, 80, 40, 1, 'violet'));
	    }

	    return carArray;
	  }

	  createLilyPadArray() {
	    let lilyPadArray = [];
	    for (let i = 0; i < 5; i++) {
	      lilyPadArray.push(new LilyPad(120 * i + 30, 60, 60, 60, 0, 'green'));
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
	    context.fillText('Score: ' + this.frogger.score.counter, 20, 30);
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
	    context.fillText('Game Over Bro!', 125, 680 / 2);
	    context.fillText('You made it to Level ' + this.level, 40, 400);
	    context.fillText('and scored ' + this.frogger.score.counter + ' points!', 25, 475);
	  }

	  arePadsFull(lilyArray) {

	    if (this.frogger.pads === 5) {
	      this.level += 1;
	      this.leveledUp = true;
	      lilyArray.forEach(lily => {
	        lily.color = "green";
	      });
	      this.frogger.pads = 0;
	      this.frogger.score.counter += 1000;
	    }
	  }

	}

	module.exports = Game;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	const Score = __webpack_require__(7);

	class Frogger {
	  constructor() {
	    this.x = 280;
	    this.y = 560;
	    this.width = 40;
	    this.height = 40;
	    this.alive = true;
	    this.pads = 0;
	    this.lives = 3;
	    this.color = '#4bf442';
	    this.score = new Score();
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.x, this.y, this.width, this.height);
	  }

	  move(event) {
	    switch (event.keyCode) {
	      case 39:
	        // right arrow - x-axis
	        if (this.x < 600 - this.width) {
	          this.x += this.width;
	        }
	        break;
	      case 37:
	        // left arrow - x-axis
	        if (this.x > 0) {
	          this.x -= this.width;
	        }
	        break;
	      case 38:
	        // up arrow - y-axis
	        if (this.y > this.height) {
	          this.y -= this.height;
	        }
	        break;
	      case 40:
	        //down arrow - y-axis
	        if (this.y < 680 - 80) {
	          this.y += this.height;
	        }
	        break;
	      default:
	        return null;
	        break;
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
	      this.pads++;
	      this.score.counter += 500;
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
	      if (this.top + 1 > carBottom || this.right < carLeft || this.bottom - 1 < carTop || this.left > carRight) {} else {
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
	      };
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(5);
	const Frogger = __webpack_require__(6);

	class Score {
	  constructor() {
	    this.counter = 0;
	  }

	}

	module.exports = Score;

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	let GamePiece = __webpack_require__(11);

	class Log extends GamePiece {
	  constructor(x, y, width, height, velocity, color) {
	    super(...arguments);
	    this.type = 'log';
	  }
	}

	module.exports = Log;

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	let GamePiece = __webpack_require__(11);

	class Car extends GamePiece {
	  constructor(x, y, width, height, velocity, color) {
	    super(...arguments);
	    this.type = 'car';
	  }
	}

	module.exports = Car;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	let GamePiece = __webpack_require__(11);

	class LilyPad extends GamePiece {
	  constructor(x, y, width, height, velocity, color) {
	    super(...arguments);
	    this.hasFrog = false;
	    this.type = 'LilyPad';
	  }
	}

	module.exports = LilyPad;

/***/ })
/******/ ]);