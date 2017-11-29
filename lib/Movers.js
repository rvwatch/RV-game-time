function Movers(context, x, y, type) {
  this.height = 40;
  this.width = 40;
  this.x = x;
  this.y = y;
  this.context = context;
  this.type = type;
};

Movers.prototype.drawEnemy = function (){
  if (this.type == 'car'){
    this.context.fillStyle = 'orange';
    this.x = this.x + 2;
  } 
  if (this.type == 'semi'){
    this.context.fillStyle = 'grey';
    this.x = this.x + 1;
  } 
  if (this.type == 'racecar'){
    this.context.fillStyle = 'blue';
    this.x = this.x + 3;
  } 
  this.context.fillRect(this.x, this.y, this.width, this.height);
}



module.exports = Movers;