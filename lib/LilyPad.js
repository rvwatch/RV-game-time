let GamePiece = require('./GamePiece.js');

class LilyPad extends GamePiece {
  constructor(x, y, width, height, velocity, color) {
    super(...arguments);
    this.hasFrog = false;
    this.frogCount = false;
    this.type = 'LilyPad';
  }
}

module.exports = LilyPad;