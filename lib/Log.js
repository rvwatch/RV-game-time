let GamePiece = require('./GamePiece.js');


class Log extends GamePiece {
  constructor(x, y, width, height, velocity, color) {
    super(...arguments);
    this.type = 'log';
  }
}

module.exports = Log;