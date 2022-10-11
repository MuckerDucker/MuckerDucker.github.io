// Project Title
// Kati Kesur
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let backgroundImg;

function preload() {
  backgroundImg = loadImage("background.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (state === "start"){
    startScreen();
  }
  if (state === "main"){
    image(backgroundImg, 0,0,width,height);
  }
}

function mousePressed(){
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)){
    state = "main";
  }
}

function startScreen() {
  image(backgroundImg, 0,0,width,height);
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill ("grey");
  }
  else {
    fill("black"); 
  }

  rect(400, 400, 300, 150);
}

function mouseInsideRect(left , right , top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}

