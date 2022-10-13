// Pong Game
// Kati Kesur
// Date
//
// Extra for Experts:
// Added sound when ball is in contact with the board

// defining global variables
let cx = 0;
let cy = 0;
let dx = 3;
let dy = 2;
let x = 0;
let y = 0;
let yp = 0;
let circleSize = 30;
let paddleSize;
let state = "start";
let backgroundImg;

// Setting up canvas and image
function preload() {
  backgroundImg = loadImage("Pong_start.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Calling on majority functions in a draw loop
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
    bounceOffPaddles();
    leftPaddle();
    rightPaddle();
    // bounceOffRightPaddle();
    // bounceOffLeftPaddle();
  }
}

// Starting the game when space is pressed
function keyPressed(){
  if (state === "start" && keyCode === 32){
    state = "main";
  }
}

function startScreen() {
  background(backgroundImg);
}

// circle physics
function drawCircle(){
  fill("white");
  circle(cx, cy, circleSize); 
}

function moveCircle(){
  cx += dx;
  cy += dy;
}


function bounceOffWall() {
  //bounce circle off right wall
  if (cx >= width - circleSize/2) {
    dx *= -1;
  }
  //bounce circle off left wall
  else if (cx <= 0) {
    dx *= -1;
  }
  //bounce circle off bottom wall
  if (cy >= height - circleSize/2) {
    dy *= -1;
  }
  //bounce circle off top wall
  if (cy <= 0) {
    dy *= -1;
  }
}

//circle and paddle collision
function bounceOffPaddles(){
    //bounce circle off right wall
    if (cx >= width - circleSize/2) {
      dx *= -1;
    }
    //bounce circle off left wall
    else if (cx <= 0) {
      dx *= -1;
    }
  //bounce circle off bottom wall
  if (cy >= height - circleSize/2) {
    dy *= -1;
  }
  //bounce circle off top wall
  if (cy <= 0) {
    dy *= -1;
  }
}

// moving paddles with W, S, up and down arrow keys
function leftPaddle(){
  rect(0, y, width/90, height/8);
  if (keyIsDown(87)){
    rect(0, y-= 3);
  }
  if (keyIsDown(83)){
    rect(0, y+= 3);
  }
}

function rightPaddle(){
  rect(width - width/90, yp, width/90, height/8);
  if (keyIsDown(38)){
    rect(0, yp-= 3);
  }
  if (keyIsDown(40)){
    rect(0, yp+= 3);
  }
}



// if (cx ===  + circleSize/2 && y )

// function bounceOffLeftPaddle() {
//   //bounce circle off left paddle
//   if (x <= width - width/80 - width/110 - circleSize) {
//     dx *= -1;
//   }
// }

// let hit = false;

// function draw() {
//     if (state === "main"){
//       rect(10, 5, 20, 150);
//       circle(cx, cy, circleSize);

//       hit = collideRectCircle(10, 5, 20, 150, mouseX, mouseY, 100);

//       // Use vectors as input:
//       // const mouse      = createVector(mouseX, mouseY);
//       // const rect_start = createVector(200, 200);
//       // const rect_size  = createVector(100, 150);
//       // const radius     = 100;
//       // hit = collideRectCircleVector(rect_start, rect_size, mouse, radius);

//       stroke(hit ? color('red') : 0);
//       print('colliding?', hit);
//   }
// }