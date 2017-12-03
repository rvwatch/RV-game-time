const Sprite = require('./Sprite');

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
        //console.log(object.velocity)
      });


     
  }

  move(array){
    array.forEach((object) => { 
      object.x += object.velocity;
    });
    this.loopMovers(array);
  };

  loopMovers(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].x > this.boardWidth){
      array[i].x = -array[i].width;
      }  
    }
  }
}



module.exports = Movers;