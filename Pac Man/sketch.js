// Pac Man
// Kati Kesur
// October 31, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// use 2d arrays in a different way then in class
// go beyond the basic means of the project

// defining global variables

let PacX;
let PacY;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function ShowPac(){
  let Pac ={
    x: PacX,
    y: PacY,
    colour: "yellow"
  };
}

function movePac(){
  if (keyIsDown(LEFT_ARROW)){
    PacX += -5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    PacX += 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    PacX += 5;
  }
  if (keyIsDown(LEFT_ARROW)){
    PacX += 5;
  }
}