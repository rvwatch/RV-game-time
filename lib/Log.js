var Movers = require('./Movers');

var logArray = [];

class Log extends Movers {
  constructor(x, y, width, height, velocity){
    super();
    this.color = 'orange';
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
    this.amount = 5;
  }

  fillArray(){
    for (let i = 0; i < 5; i++){
        logArray.push(new Log(i * 160, 280, 80, 40, 1));
    }
    return logArray;
  }

}

module.exports = Log;