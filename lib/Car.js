var Movers = require('./Movers');

//let context = canvas.getContext('2d');

var carArray = []

class Car extends Movers {
  constructor(context){
    super();
    this.context = context;
    this.color = 'orange';
    this.x = -this.unit;
    this.y = this.unit * 13;
    this.width = this.unit;
    this.height = this.unit;
    this.velocity = 2;
  }


  fillArray(){
    for (let i = 0; i < 5; i++){
        carArray.push(new Car(i * 160, 540, 40, 40, 1));
    }
    return carArray;
  }


}

class Truck extends Car {
    constructor(){
        super()
    }
}

module.exports = Car;