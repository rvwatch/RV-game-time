let GamePiece = require('./GamePiece.js');

class LilyPad extends GamePiece {
  constructor(x, y, width, height, velocity, color, type) {
    super(x, y, width, height, velocity, color);
    this.hasFrog = false;
    this.type = 'lilypad';
  }
}

module.exports = LilyPad;