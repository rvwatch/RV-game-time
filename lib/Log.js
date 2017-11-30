var Movers = require('./Movers');

//let context = canvas.getContext('2d');

class Log extends Movers {
  constructor(context){
    super();
    this.context = context;
    this.color = 'green';
    this.x = -this.unit;
    this.y = this.unit * 5;
    this.width = this.unit * 3;
    this.height = this.unit;
    this.velocity = 1;
    this.amount = 5;
  }
}

module.exports = Log;