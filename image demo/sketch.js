// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cowImage;
let scalar = 3.5;

function preload(){
  cowImage = loadImage("cow.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    scalar = scalar * 1.5;
  }
  else if (keyCode === DOWN_ARROW){
    scalar = scalar * 0.75;
  }
}
function draw() {
  background(220);
  image(cowImage, mouseX, mouseY,cowImage.width*scalar,cowImage.height*scalar);
}
