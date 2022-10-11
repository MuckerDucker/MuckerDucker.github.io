// Pong Game
// Kati Kesur
// Date
//
// Extra for Experts:
// Added sound when ball is in contact with the board

let state = "start";
let backgroundImg;

function preload() {
  backgroundImg = loadImage("Pong_start.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start"){
    startScreen();
  }
  if (state === "main"){
    backgroundImg = (Pong_main.png)
    image(backgroundImg, 0,0,width,height);
  }
}

function keyPressed(){
  if (state === "start" && keyCode === SPACE){
    state = "main";
  }
}

function startScreen() {
  image(backgroundImg, 0,0,width,height);
}
