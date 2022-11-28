// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Button{
  constructor(x,y, width, height){
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = "black";
  }
  display(){
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}

let topButton = new Button(200, 100, 150, 74);
let botButton = new Button(200, 500, 150, 74);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  topButton.display();
  botButton.display();
}