const Movers = require('./Movers');
const Sprite = require('./Sprite');

const sprImage = document.getElementById('source');
const shortLogImage = new Sprite(1663, 1023, 140, 34);
const mediumLogImage = new Sprite(1557, 1611, 193, 33);
const longLogImage = new Sprite(1397, 1717, 300, 33);

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
    for (let i = 0; i < 3; i++){
        logArray.push(new Log(i * 200, 240, 120, 40, .3));
    }
    return logArray;
  }
}

module.exports = Log;