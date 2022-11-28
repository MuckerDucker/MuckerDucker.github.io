// Project Title
// Your Name

class Bullet {
  constructor(theImage){
    this.x = 200;
    this.y = 400;
    this.dx = 5;
    this.radius = 3;
    this.image = theImage;
  }
  display(){
    image(this,image, this.x, this.y);
  }
  move(){
    this.x += this.dx;
  }
  isDead(){
    return this.x > width;
  }
}

let bullets = [];
let bulletImg;

function preload(){
  bulletImg = loadImage("bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  for(let someBullet of bullets){
    someBullet.move();
    someBullet.display();
  }

  //delete
  for ( let i = bullets.length - 1; i >= 0; i--){
    if(bullets[i].isDead()){
      bullets.splice(i, 1);
    }
  }
}

function keyPressed(){
  let someBullet = new Bullet(bulletImg);
  bullets.push(someBullet);
}