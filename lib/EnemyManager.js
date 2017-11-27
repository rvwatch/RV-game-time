function EnemyManager(context){
  this.context = context;
  this.enemyArray = [];
}

EnemyManager.prototype.addEnemy = function(enemy){
  this.enemyArray.push(enemy);
}


EnemyManager.prototype.drawEnemies = function (){
  for(i = 0; i < this.enemyArray.length; i++){
    //check if I am in bounds, if so, draw, if not, remove me
    this.enemyArray[i].drawEnemy();
  }  


};



module.exports = EnemyManager;