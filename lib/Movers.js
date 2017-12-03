const Log = require('./Log');
const Car = require('./Car');


class Movers{
  constructor(canvas, context){
    this.unit = 40;
    this.context = context;
    this.boardWidth = 600;
    this.log = new Log(canvas, context);
    this.car = new Car(canvas, context);
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
    });
    this.loopMovers(array);
  };

  loopMovers(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].x > this.boardWidth){
      array[i].x = -array[i].width;
      } else if (array[i].x + array[i].width < 0){
       array[i].x = this.boardWidth;
      }
    }
  }
}



module.exports = Movers;