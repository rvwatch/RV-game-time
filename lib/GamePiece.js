class GamePiece{
  constructor(x, y, width, height, velocity, color){
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }

  draw(context){
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(){
    this.x += this.velocity;
  };
}

module.exports = GamePiece;