let GamePiece = require('./GamePiece.js');

class Car extends GamePiece {
  constructor(x, y, width, height, velocity, color){
    super(...arguments);
    this.type = 'car';
  }
}

module.exports = Car;