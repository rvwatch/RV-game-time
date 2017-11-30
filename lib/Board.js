class Board {
  constructor(canvas){
    this.unit = 40;
    this.width = 600;
    this.height = 680;
    this.context = canvas.getContext('2d');
  }

  drawLevel(){
    //starting line
    this.context.fillStyle = 'grey';
    this.context.fillRect(0, this.unit * 14, this.width , this.unit);

    //street
    this.context.fillStyle = 'black';
    this.context.fillRect(0, this.unit * 9, this.width , this.unit * 5);

    //median
    this.context.fillStyle = 'magenta';
    this.context.fillRect(0, this.unit * 8, this.width , this.unit);

    //river
    this.context.fillStyle = 'blue';
    this.context.fillRect(0, this.unit * 3, this.width , this.unit * 5);

    //wall
    this.context.fillStyle = 'grey';
    this.context.fillRect(0, this.unit, this.unit * 7 , this.unit * 2);
    this.context.fillRect(this.unit * 8, this.unit, this.unit * 7, this.unit * 2);

    //goal
    this.context.fillStyle = 'blue';
    this.context.fillRect(this.unit * 7, this.unit, this.unit, this.unit * 2);
  }

}



module.exports = Board;

// var board = [
//   [ 'b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'],
//   [ 'w','l','w','w','l','w','w','l','w','w','l','w','w','l','w'],
//   [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
//   [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
//   [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
//   [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
//   [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
//   [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
//   [ 's','s','s','s','s','s','s','s','s','s','s','s','s','s','s'],
//   [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
//   [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
//   [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
//   [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
//   [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
//   [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
//   [ 's','s','s','s','s','s','s','s','s','s','s','s','s','s','s']
// ];