// Walker

class Walker {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 2;
  }

  display(){
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  move(){
    let choice = random(100);

    if (choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //right
      this.x += this.speed;
    }
    else {
      //left
      this.x -= this.speed;
    }
  }

}

let micheal;
let katherine;
let cheese;

function setup() {
  createCanvas(windowWidth, windowHeight);
  micheal = new Walker(400, 500);
  katherine = new Walker(800, 500);
  cheese = new Walker(600,500);
  katherine.color = "blue";
  cheese.color = "green";
}

function draw() {
  micheal.display();
  katherine.display();
  cheese.display();
  micheal.move();
  katherine.move();
  cheese.move();
}
