class Board {
  constructor(canvas){
    this.width = 600;
    this.height = 680;
    this.context = canvas.getContext('2d');
  }

  drawLevel(){
    drawStartLine(){
      
    }
    drawStreet(){

    }
    drawRiver(){

    }
    drawMedian(){

    }
    drawGoal(){

    }
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