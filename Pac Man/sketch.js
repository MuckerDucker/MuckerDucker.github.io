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

let grid = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function ShowPac(){
  let Pac ={
    x: PacX,
    y: PacY,
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
      else if (grid[y][x] === 1) {
        fill("blue");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function movePac(){
  if (keyIsDown(LEFT_ARROW)){
    PacX += -5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    PacX += 5;
  }
  if (keyIsDown(UP_ARROW)){
    PacY += -5;
  }
  if (keyIsDown(DOWN_ARROW)){
    PacY += 5;
  }
}