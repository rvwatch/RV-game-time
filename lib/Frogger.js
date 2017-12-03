class Frogger {
  constructor(board, context){
    this.board = board;
    this.x = board.width / 2 - 20;
    this.y = board.height - 120;
    this.width = 40;
    this.height = 40;
    this.context = context;
  }

  draw() {
    this.context.fillStyle = 'green';
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