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
        logArray.push(new Log(i * 200, 240, 120, 40, .3));
    }

    //console.log(logArray[1].x);
    return logArray;
  }

}

module.exports = Log;