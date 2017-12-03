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



  collisionDetection(array) {
    this.color = 'green';
    
    array.forEach( (block) => {
      let blockTop = block.y;
      let blockRight = block.x + block.width;
      let blockBottom = block.y + block.height;
      let blockLeft = block.x;
      if(this.top + 1 > blockBottom || this.right < blockLeft || this.bottom - 1 < blockTop || this.left > blockRight){

        return false;
      }  else { 
        
        block.type === 'car' ? this.color = 'red' : this.x += block.velocity;
        return true;
      }




    })
    
  }
//||  
// collisionDetection(cars, logs) {
//       if (this.status == 'safe') {
//         autos.forEach(function(car) {
//           if ((this.yCoordinate - 5 == car.yCoordinate) &&
//         ((this.xCoordinate < car.xCoordinate + car.width && this.xCoordinate > car.xCoordinate) ||
//         (this.xCoordinate + this.width > car.xCoordinate && this.xCoordinate + this.width < car.xCoordinate + car.width))) {
//             this.status = 'dead';
//           }
//         }, this);
//         let onRiverPlatform = river.filter(function(platform) {
//           if (platform.constructor.name == 'Turtle') {
//             return !platform.submerged &&
//             this.yCoordinate - 5 == platform.yCoordinate &&
//             this.xCoordinate > platform.xCoordinate - this.margin &&
//             this.xCoordinate + this.width < platform.xCoordinate + platform.width + this.margin
//           } else if (platform.constructor.name == 'Platform') {
//             return (this.yCoordinate - 5 == platform.yCoordinate) &&
//               this.xCoordinate > platform.xCoordinate - this.margin &&
//               this.xCoordinate + this.width < platform.xCoordinate + platform.width + this.margin
//           }
//         }, this)

//         if (onRiverPlatform.length > 0) {
//           this.velocity = onRiverPlatform[0].velocity;
//         }
//         if (!onRiverPlatform.length) {
//           this.velocity = 0;
//         }
//         if (onRiverPlatform.length == 0 && this.yCoordinate < 412.5) {
//           this.status = 'dead';
//         }
//       }
//     }


}




module.exports = Frogger;