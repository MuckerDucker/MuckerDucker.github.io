// Square Around Edge
// Kati Kesur
// Sept 26

let x, y, squareSize,speed,state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  speed = 5;
  squareSize = 200;
  state = "right";
}

function drawSquare() {
  fill("black");
  square(x, y, squareSize);
}

function moveSquare(){
  if (state === "right"){
    x += speed;
    if (x + squareSize >= width){
      x = width - squareSize;
      state = "down";
    }
  }
  if (state === "down"){
    x += speed;
    if (x + squareSize >= width){
      x = width - squareSize;
      state = "left";
    }
  }
  if (state === "left"){
    x += speed;
    if (x + squareSize >= width){
      x = width - squareSize;
      state = "up";
    }
  }
  if (state === "up"){
    x += speed;
    if (x + squareSize >= width){
      x = width - squareSize;
      state = "right";
    }
  }
}

function draw() {
  background(220);
  moveSquare();
  drawSquare();
}