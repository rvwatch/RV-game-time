require('./assets/css/block.css')

function Block(x, y, width, height, context) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.context = context;
}

Block.prototype.draw = function () {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Block.prototype.move = function () {
  this.y++;
};

module.exports = Block;