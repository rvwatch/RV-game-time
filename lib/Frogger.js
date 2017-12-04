class Frogger {
  constructor(board, context){
    this.board = board;
    this.x = board.width / 2 - 20;
    this.y = board.height - 120;
    this.width = 40;
    this.height = 40;
    this.alive = true;
    this.lives = 3;
    this.context = context;
    this.color = 'green';
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  };

  move(event) {
    switch(event.keyCode) {
      case 39: // right arrow - x-axis
        if (this.x < this.board.width - this.width) {
           this.x += this.width;
        }
        break;
      case 37: // left arrow - x-axis
        if (this.x > 0) {
           this.x -= this.width;
        }
        break;
      case 38: // up arrow - y-axis
        if (this.y > this.height){
          this.y -= this.height;
        }
        break;
      case 40: //down arrow - y-axis
        if (this.y < this.board.height - 80) {
           this.y += this.height;
        }
        break;
      default:
        console.log('you hit a random other key')
        break;
    }
  };

  get top() { return this.y };
  get right() { return this.x + this.width };
  get bottom() { return this.y + this.height };
  get left() { return this.x };



  collisionDetection(logs, cars) {
    this.color = 'green';
    let dead = false;
    //let velocity = 0;
    if(!this.isOnLog(logs) && this.top < 320){
      this.color = 'red';
    } else {
      this.color = 'green';
      //this.x += velocity;
    }


    cars.forEach( (car) => {
      let carTop = car.y;
      let carRight = car.x + car.width;
      let carBottom = car.y + car.height;
      let carLeft = car.x;
      if(
        this.top + 1 > carBottom || 
        this.right < carLeft || 
        this.bottom - 1 < carTop || 
        this.left > carRight){

        return true;
      }  else { 
        this.color = 'red';
        return false;
      }
    });   
  }

    isOnLog(logs){
      let outPut = false;
      logs.forEach( (log) => {
      
      let logTop = log.y;
      let logRight = log.x + log.width;
      let logBottom = log.y + log.height;
      let logLeft = log.x;
      if ( this.top < logBottom && 
          this.right > logLeft &&
          this.bottom > logTop &&
          this.left < logRight
          ) {
        outPut = true;
        //velocity = log.velocity;
      };
     
    });
       
      return outPut;
  }

  


}

// this.top + 1 > logBottom || this.right < logLeft || this.bottom - 1 < logTop || this.left > logRight


module.exports = Frogger;