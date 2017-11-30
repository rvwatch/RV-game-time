class Movers{
  constructor(canvas){
    this.unit = 40;
  }

  drawThis(){
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  createMoverArray(){
    var moverArray = [];
    for(let i = 0; i < this.amount; i++){
      var newObj = this;
      moverArray.push(newObj);
    }
    moverArray.forEach(function (obj) {
      console.log(obj);
      obj.drawThis();
    });
  }

 

  move(){
    this.x += this.velocity;
  }
}





  



module.exports = Movers;