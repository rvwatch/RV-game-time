class Movers{
  constructor(context){
    this.unit = 40;
    this.context = context;
    this.boardWidth = 600;
  }

  drawThis(array, context){

      array.forEach((object) => {
        this.context.fillStyle = object.color;
        this.context.fillRect(object.x, object.y, object.width, object.height);
      });
  }

  move(array){
    array.forEach((object) => {
      object.x += object.velocity;
      //console.log(object.x);
    });
  };

  // loopMovers(array){
  //   if(object.x)
  // }
}



module.exports = Movers;