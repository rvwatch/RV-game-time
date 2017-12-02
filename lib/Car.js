var Movers = require('./Movers');

//let context = canvas.getContext('2d');

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
}

class Truck extends Car {
    constructor(){
        super()
    }
}

module.exports = Car;