// Pong Game
// Kati Kesur
// Date
//

// defining global variables
let cx = 15; // circle diameter/2
let cy = 15; // circle diameter/2
let dx = 3;
let dy = 2;
let x = 0;
let y = 0;
let yp = 0;
let circleSize = 30;
let paddleSize;
let state = "start";
let backgroundImg;
let hit = false;
let score1 = 0;
let score2 = 0;

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
    bounceOffTopAndBottom();
    leftPaddle();
    rightPaddle();
    bounceOffLeftPaddle();
    bounceOffRightPaddle();
    winner();
  }
}

// Starting the game when space is pressed
function mousePressed(){
  if (state === "start"){
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
  else if (cx <= circleSize/2) {
    dx *= -1;
  }
  //bounce circle off bottom wall
  if (cy >= height - circleSize/2) {
    dy *= -1;
  }
  //bounce circle off top wall
  if (cy <= circleSize/2) {
    dy *= -1;
  }
}

//top and bottom collision with circle
function bounceOffTopAndBottom(){
  //bounce circle off bottom wall
  if (cy >= height - circleSize/2) {
    dy *= -1;
  }
  //bounce circle off top wall
  if (cy <= circleSize/2) {
    dy *= -1;
  }
}

// moving left paddle with "W" and "S"
function leftPaddle(){
  rect(0, y, width/90, height/8);
  if (keyIsDown(87)){
    rect(0, y-= 3);
  }
  if (keyIsDown(83)){
    rect(0, y+= 3);
  }

  // preventing left paddle from going off-screen
  if (y > height - height/8){
    y = height - height/8;
  }
  if (y < 0){
    y = 0;
  }
}

// moving right paddle with up and down arrow key
function rightPaddle(){
  rect(width - width/90, yp, width/90, height/8);
  if (keyIsDown(38)){
    rect(0, yp-= 3);
  }
  if (keyIsDown(40)){
    rect(0, yp+= 3);
  }

  // preventing right paddle from going off-screen
  if (yp > height - height/8){
    yp = height - height/8;
  }
  if (yp < 0){
    yp = 0;
  }
}

// bounce circle off paddles - code used from collide2D
function bounceOffLeftPaddle() {
  rect(0, y, width/90, height/8);
  circle(cx, cy, circleSize);

  hit = collideRectCircle(0, y, width/90, height/8, cx, cy, circleSize);

  if(hit === true){
    dx *= -1;
    
  }
}

function bounceOffRightPaddle() {
  rect(width - width/90, yp, width/90, height/8);
  circle(cx, cy, circleSize);

  hit = collideRectCircle(width - width/90, yp, width/90, height/8, cx, cy, circleSize);

  if(hit === true){
    dx *= -1;
  }
}

function winner(){
  if (cx === width - circleSize/2) {
    textSize(width/14);
    text("Player one Wins!", width/5, height/5);
    noLoop();
  }
  else if (cx === 0) {
    textSize(width/14);
    text("Player Two Wins!", width/5, height/5);
    noLoop();
  }
}



// attempt at having a score instead of first to one wins
// // score keeping
// function scoreText(){
//   textSize(width/16);
//   text(score1 + "  " + score2, width/2.25, height/7);
// }
// function score(){
//   if (cx === width - circleSize/2) {
//       score1 += 1;
//     }
//     else if (cx === 0) {
//       score2 += 1;
//     }
// }