let GamePiece = require('./GamePiece.js');

class LilyPad extends GamePiece {
  constructor(x, y, width, height, velocity, color){
    super(...arguments);
    this.type = 'LilyPad';
  }
}

module.exports = LilyPad;