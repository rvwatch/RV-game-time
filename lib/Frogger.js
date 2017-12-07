class Frogger {
  constructor(canvas){
    this.canvas = canvas;
    this.x = 280;
    this.y = 560;
    this.width = 40;
    this.height = 40;
    this.alive = true;
    this.pads = 0;
    this.lives = 3;
    this.color = '#4bf442';
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);  
  };

  move(event) {
    switch(event.keyCode) {
      case 39: // right arrow - x-axis
        if (this.x < 600 - this.width) {
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
        if (this.y < 680 - 80) {
           this.y += this.height;
        }
        break;
      default:
        return null;
        break;
    }
  };

  get top() { return this.y };
  get right() { return this.x + this.width };
  get bottom() { return this.y + this.height };
  get left() { return this.x };


  collisionDetection(logs, cars, pads) {

    if(this.isOnLilyPad(pads)){
      this.pads++;
      console.log(this.pads);
      this.respawn();
    }
    if(!this.isOnLog(logs) && this.top < 320 && this.top > 115){
      this.alive = false;
    } else if (this.top < 320){
      this.alive = true;
    }
    if(this.hitByCar(cars) && this.top > 320 ){
      this.alive = false;
    } else if (this.top > 320){
      this.alive = true; 
    }
    if(!this.alive){
      this.lives -= 1;
      this.respawn();
    }

  }

  hitByCar(cars) {
    let outPut = false;
    cars.forEach( (car) => {
      let carTop = car.y;
      let carRight = car.x + car.width;
      let carBottom = car.y + car.height;
      let carLeft = car.x;
      if(this.top + 1 > carBottom || 
        this.right < carLeft || 
        this.bottom - 1 < carTop || 
        this.left > carRight) {
      }  else { 
        outPut = true; }
    });
    return outPut;
  };
      

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
        this.x += log.velocity;
        outPut = true;
      };
    });
    return outPut;
  }

  isOnLilyPad(pads){
    let outPut = false;
    pads.forEach ((lily) => {

      let lilyRight = lily.x + lily.width;
      let lilyBottom = lily.y + lily.height;
      let lilyLeft = lily.x;

      if(this.top < lilyBottom && 
        this.left > lilyLeft && 
        this.right < lilyRight){
        console.log('winning!')
        lily.hasFrog = true;
        lily.color = 'red';
        outPut = true;
      }
      if(!lily.hasFrog){
        lily.color = 'green'
      }
    });
    return outPut;
  }

  respawn(){
    this.x = 280;
    this.y = 560;
  }

}


// this.top + 1 > logBottom || this.right < logLeft || this.bottom - 1 < logTop || this.left > logRight


module.exports = Frogger;