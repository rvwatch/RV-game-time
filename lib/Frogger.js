var frogSize = 40;

function Frogger (board, canvas){
  this.board = board;
  this.x = board.width / 2 - 20;
  this.y = board.height - 80;
  this.width = frogSize;
  this.height = frogSize;
  this.context = canvas.getContext('2d');
  var self = this;

  document.addEventListener('keyup', function(event) {
    self.move(event.keyCode); 
  }, false);
}

Frogger.prototype.draw = function () {
  this.context.fillStyle = 'green';
  this.context.fillRect(this.x, this.y, this.width, this.height);
};



Frogger.prototype.move = function (dir) {
  switch (dir) {
  case 39:
    if (this.x < this.board.width - this.width) {
      this.x += this.width;
    }
    break;
  case 37:
    if (this.x > 0) {
      this.x -= this.width;
    }
    break;
    // up
  case 38:
    if (this.y > 40) {
      this.y -= this.height;
    }
    break;
    // down
  case 40:
    if (this.y < this.board.height - this.height - frogSize) {
      this.y += this.height;
    }
    break;
  
 
  default:
    console.log('Sorry, we are out of ' + dir + '.');
}
}



module.exports = Frogger;