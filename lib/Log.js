var logArray = [];


class Log {
  constructor(x, y, width, height, velocity, color){
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
    this.type = 'log';
  }

  fillArray(){

    // for (let i = 0; i < 3; i++){
    //     logArray.push(new Log(i * 240, 120, 160, 40, .5, 'green'));
    // }

    // for (let i = 0; i < 4; i++){
    //     logArray.push(new Log(i * 180, 160, 80, 40, -.5, 'orange'));
    // }

    // for (let i = 0; i < 3; i++){
    //     logArray.push(new Log(i * 200, 200, 120, 40, .3, 'red'));
    // }

    // for (let i = 0; i < 4; i++){
    //     logArray.push(new Log(i * 100, 240, 40, 40, -.8, 'yellow'));
    // }

    for (let i = 0; i < 2; i++){
        logArray.push(new Log(i * 180, 280, 80, 40, 1, 'violet'));
    }
    
    return logArray;
  }
}

module.exports = Log;