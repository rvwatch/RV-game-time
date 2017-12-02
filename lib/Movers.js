class Movers{
  constructor(context){
    this.unit = 40;
    this.context = context;
  }

  drawThis(array, context){
    console.log(array);
    array.forEach((object) => {
      this.context.fillStyle = object.color;
      this.context.fillRect(object.x, object.y, object.width, object.height);
    });
    
  }

}



module.exports = Movers;