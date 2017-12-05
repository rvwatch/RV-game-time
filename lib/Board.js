class Board {
  constructor(){
    this.unit = 40;
    this.width = 600;
    this.height = 680;
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
    context.fillStyle = 'blue';
    context.fillRect(this.unit * 7, this.unit, this.unit, this.unit * 2);
  }

}



module.exports = Board;