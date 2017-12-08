let GamePiece = require('./GamePiece.js');

class Obstacles extends GamePiece {
  constructor(x, y, width, height, velocity, color, type) {
    super(x, y, width, height, velocity, color);
    this.type = type;
  }
}

module.exports = Obstacles;