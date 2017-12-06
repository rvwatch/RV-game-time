class Board {
  constructor(){
    this.unit = 40;
    this.width = 600;
    this.height = 680;
    this.lilyPads = [];
  }



  drawLevel(context){
    //starting line
    context.fillStyle = 'grey';
    context.fillRect(0, this.unit * 14, this.width , this.unit);

    //street
    context.fillStyle = 'black';
    context.fillRect(0, this.unit * 9, this.width , this.unit * 5);

    //median
    context.fillStyle = 'magenta';
    context.fillRect(0, this.unit * 8, this.width , this.unit);

    //river
    context.fillStyle = 'blue';
    context.fillRect(0, this.unit * 3, this.width , this.unit * 5);

    //wall
    context.fillStyle = 'grey';
    context.fillRect(0, this.unit, this.unit * 7 , this.unit * 2);
    context.fillRect(this.unit * 8, this.unit, this.unit * 7, this.unit * 2);

    //goal
    context.fillStyle = 'Green';
    context.fillRect(30, 60, 60, this.unit * 1.5);
    context.fillRect(150, this.unit, 60, this.unit * 2);
    context.fillRect(270, this.unit, 60, this.unit * 2);
    context.fillRect(390, this.unit, 60, this.unit * 2);
    context.fillRect(510, this.unit, 60, this.unit * 2);

    context.fillStyle = 'blue';
  }

  drawSafeSpots() {
  for (let i = 0; i < 5; i++) {
    this.lilyArray.push(
      new LilyPad((i * 85) + 10, 68, 40, 40));
  }
};

}



module.exports = Board;