class Movers {
  constructor() {
    this.unit = 40;
    this.boardWidth = 600;
  }

  drawThis(array, context) {
    array.forEach((object) => {
      object.draw(context);
    });     
  }

  move(array) {
    array.forEach((object) => {
      object.move(); 
    });
    this.loopMovers(array);
  }

  loopMovers(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].x > this.boardWidth) {
        array[i].x = -array[i].width;
      } else if (array[i].x + array[i].width < 0) {
        array[i].x = this.boardWidth;
      }
    }
  }
}


module.exports = Movers;