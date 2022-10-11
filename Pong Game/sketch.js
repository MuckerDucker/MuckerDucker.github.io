// Pong Game
// Kati Kesur
// Date
//
// Extra for Experts:
// Added sound when ball is in contact with the board

// defining global variables
// let x = 0;
// let y = 0;
// let dx = 3;
// let dy = 2;
// let circleSize = 50;
// let paddleSize;

// let state = "start";
// let backgroundImg;

// function preload() {
//   backgroundImg = loadImage("Pong_start.jpg");
// }
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

function draw(){
  background("Pong_start.jpg");
}

// function draw() {
//   drawCircle();
//   moveCircle();
//   bounceIfNeeded(); 

//   if (state === "start"){
//     startScreen();
//   }
//   if (state === "main"){
//     backgroundImg = loadImage("Pong_main.png");
//     image(backgroundImg, 0,0,width,height);
//   }
// }

// function keyPressed(){
//   if (state === "start" && keyCode === 32){
//     state = "main";
//   }
// }

// function startScreen() {
//   image(backgroundImg, 0,0,width,height);
// }

// function drawCircle(){
//   fill("white");
//   circle(x, y, circleSize); 
  
// }

// function moveCircle(){
//   x += dx;
//   y += dy;
// }

// 
// function bounceIfNeeded() {
//   //bounce circle off right wall
//   if (x >= width - circleSize) {
//     dx *= -1;
//   }
//   //bounce circle off left wall
//   else if (x <= 0) {
//     dx *= -1;
//   }
//   //bounce circle off bottom wall
//   if (y >= height - circleSize) {
//     dy *= -1;
//   }
//   //bounce circle off top wall
//   if (y <= 0) {
//     dy *= -1;
//   }
// }

// // paddles
// // moving paddles

// function bounceOffRightPaddle() {
//   
//   if (x >= width - circleSize - paddleSize) {
//     dx *= -1;
//   }
//   //bounce circle off left wall
//   else if (x <= 0) {
//     dx *= -1;
//   }
//   //bounce circle off bottom wall
//   if (y >= height - circleSize) {
//     dy *= -1;
//   }
//   //bounce circle off top wall
//   if (y <= 0) {
//     dy *= -1;
//   }
// }