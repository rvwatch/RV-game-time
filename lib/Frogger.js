class Frogger {
  constructor(board, canvas){
    this.board = board;
    this.x = board.width / 2 - 20;
    this.y = board.height - 120;
    this.width = 40;
    this.height = 40;
    this.context = canvas.getContext('2d');
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
}




module.exports = Frogger;