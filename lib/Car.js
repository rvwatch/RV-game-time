let GamePiece = require('./GamePiece.js');

class Car extends GamePiece {
  constructor(x, y, width, height, velocity, color){
    super(...arguments);
    this.type = 'car';
  }
}


//  fillArray(x, y, w, h, v, color){
//     let array = [];
//     for (let i = 0; i < amount; i++){
//         array.push(new Car(x, y, w, h, v, color));
//     }
//     return array;
// };
    

// let trucks = [];

// trucks.push(...fillArray(i * 240, 360, 160, 40, .5, 'green'));


module.exports = Car;