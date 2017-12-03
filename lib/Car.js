var carArray = []

class Car {
  constructor(x, y, width, height, velocity, color){
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
  }


  fillArray(){

    for (let i = 0; i < 3; i++){
        carArray.push(new Car(i * 240, 360, 160, 40, .5, 'green'));
    }

    for (let i = 0; i < 4; i++){
        carArray.push(new Car(i * 180, 400, 80, 40, -.5, 'orange'));
    }

    for (let i = 0; i < 3; i++){
        carArray.push(new Car(i * 200, 440, 120, 40, .3, 'red'));
    }

    for (let i = 0; i < 4; i++){
        carArray.push(new Car(i * 100, 480, 40, 40, -.8, 'yellow'));
    }

    for (let i = 0; i < 4; i++){
        carArray.push(new Car(i * 180, 520, 80, 40, 1, 'violet'));
    }



    return carArray;
  }

}

module.exports = Car;