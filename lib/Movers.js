class Movers{
  constructor(context, x, y, type){
    this.unit = 40;
    this.height = 40;
    this.width = 40;
    this.x = x;
    this.y = y;
    this.context = context;
    this.type = type;
  }
}

class Car extends Movers {
  constructor(height, width, x, y){
    super(this.height, this.width * 2, x, y);
    this.context.fillStyle = 'orange';
    this.x = this.x + 2;
  }
}

  



module.exports = Movers;