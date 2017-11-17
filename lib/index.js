require('./assets/css/style.css')

var Block = require('./Block');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var blocks = [];
var blockOne = new Block(100, 50, 10, 10, context);

blocks.push(new Block(50, 50, 10, 10, context));
blocks.push(blockOne);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  blocks.forEach(function(block){
    block.draw()
    block.move()
  })

  requestAnimationFrame(gameLoop);
});