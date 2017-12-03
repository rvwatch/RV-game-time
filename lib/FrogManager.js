class FrogManager {
  constructor(context){
  this.context = context;
  this.enemyArray = [];
  }

  addEnemy(enemy){
    this.enemyArray.push(enemy);
  }

  drawEnemies(){
  for(i = 0; i < this.enemyArray.length; i++){
    //check if I am in bounds, if so, draw, if not, remove me
    this.enemyArray[i].drawEnemy();
    }  
  };
};


module.exports = FrogManager;