// Pac Man
// Kati Kesur
// October 31, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// use 2d arrays in a different way then in class
// go beyond the basic means of the project

// defining global variables

let pacX;
let pacY;
let pac;

let grid = [[1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function preLoad(){

  pac = loadImage("pac.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function showPac(){
  let pac ={
    x: pacX,
    y: pacY,
    colour: "yellow"
  };
}

function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("black");
      }
      else if (grid[y][x] === 2) {
        fill("blue");
      }
      else if(grid[y][x] === 1){
        image(pac, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function movePac(){
  if (keyIsDown(LEFT_ARROW)){
    pacX += -5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    pacX += 5;
  }
  if (keyIsDown(UP_ARROW)){
    pacY += -5;
  }
  if (keyIsDown(DOWN_ARROW)){
    pacY += 5;
  }
}