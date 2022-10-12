// Pong Game
// Kati Kesur
// Date
//
// Extra for Experts:
// Added sound when ball is in contact with the board

// defining global variables
let x = 0;
let y = 0;
let dx = 3;
let dy = 2;
let circleSize = 30;
let paddleSize;
let state = "start";
let backgroundImg;

function preload() {
  backgroundImg = loadImage("Pong_start.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(backgroundImg);

  if (state === "start"){
    startScreen();
    drawCircle();
    moveCircle();
    bounceOffWall();
  }
  if (state === "main"){
    backgroundImg = loadImage("Pong_main.jpg");
    drawCircle();
    moveCircle();
    bounceOffBottomTop();
    leftPaddle();
    // bounceOffRightPaddle();
    bounceOffLeftPaddle();
  }
}

function keyPressed(){
  if (state === "start" && keyCode === 32){
    state = "main";
  }
}

function startScreen() {
  background(backgroundImg);
}

function drawCircle(){
  fill("white");
  circle(x, y, circleSize); 
}

function moveCircle(){
  x += dx;
  y += dy;
}

function bounceOffWall() {
  //bounce circle off right wall
  if (x >= width - circleSize/2) {
    dx *= -1;
  }
  //bounce circle off left wall
  else if (x <= 0) {
    dx *= -1;
  }
  //bounce circle off bottom wall
  if (y >= height - circleSize/2) {
    dy *= -1;
  }
  //bounce circle off top wall
  if (y <= 0) {
    dy *= -1;
  }
}

//circle physics
function bounceOffBottomTop(){
  //bounce circle off bottom wall
  if (y >= height - circleSize/2) {
    dy *= -1;
  }
  //bounce circle off top wall
  if (y <= 0) {
    dy *= -1;
  }
}
// paddles

// moving paddles
function leftPaddle(){
  rect(width/80, y, width/110, height/8);
}

function bounceOffLeftPaddle() {
  //bounce circle off left paddle
  if (x <= width - width/80 - width/110 - circleSize) {
    dx *= -1;
  }
}