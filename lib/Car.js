let GamePiece = require('./GamePiece.js');

var carArray = []


class Car extends GamePiece {
  constructor(x, y, width, height, velocity, color){
    super(...arguments);
    this.type = 'car';
  }


  fillArray(){

    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 240, 360, 160, 40, .5, 'green'));
    }

    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 180, 400, 80, 40, -.5, 'orange'));
    }

    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 200, 440, 120, 40, .3, 'red'));
    }

    for (let i = 0; i < 3; i++){
        carArray.push(new Car(i * 100, 480, 40, 40, -.8, 'yellow'));
    }

    for (let i = 0; i < 2; i++){
        carArray.push(new Car(i * 180, 520, 80, 40, 1, 'violet'));
    }

    return carArray;
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