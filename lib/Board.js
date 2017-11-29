var board = [
  [ 'b','b','b','b','b','b','b','b','b','b','b','b','b','b','b'],
  [ 'w','l','w','w','l','w','w','l','w','w','l','w','w','l','w'],
  [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
  [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
  [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
  [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
  [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
  [ 'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'],
  [ 's','s','s','s','s','s','s','s','s','s','s','s','s','s','s'],
  [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
  [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
  [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
  [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
  [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
  [ 'r','r','r','r','r','r','r','r','r','r','r','r','r','r','r'],
  [ 's','s','s','s','s','s','s','s','s','s','s','s','s','s','s']
];

function Board (canvas) {
  this.width = 600;
  this.height = 680;
  this.context = canvas.getContext('2d');
}

Board.prototype.drawLevel = function (){
  //for each row
  for (row = 0; row < board.length; row++) {
    //var currentRow = board[row];
    //console.log('processing row ' + i);
    //do this on each column
    for (col = 0; col < board[row].length; col++) {
      if (board[row][col] == 'w'){
        this.context.fillStyle = 'brown';
        this.context.fillRect(40 * col, 40 * row, 40, 40);
      } else if (board[row][col] == 'l') {
      //console.log('lily');
      this.context.fillStyle = 'yellow';
      this.context.fillRect(40 * col, 40 * row, 40, 40);
      } else if (board[row][col] == 'a') {
      //console.log('lily');
      this.context.fillStyle = 'blue';
      this.context.fillRect(40 * col, 40 * row, 40, 40);
      } else if (board[row][col] == 's') {
      //console.log('lily');
      this.context.fillStyle = 'grey';
      this.context.fillRect(40 * col, 40 * row, 40, 40);
      } else if (board[row][col] == 'r') {
      //console.log('lily');
      this.context.fillStyle = 'black';
      this.context.fillRect(40 * col, 40 * row, 40, 40);
      }
    }
  }
}

module.exports = Board;