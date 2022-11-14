// Pac Man
// Kati Kesur
// October 31, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// use 2d arrays in a different way then in class
// go beyond the basic means of the project

// defining global variables

let cellWidth;
let cellHeight;
let pacX = 0;
let pacY = 0;
let pacRightImg;
let foodImg;
let B = 2;
let M = 3;

let grid = [
  [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
  [B, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, B],      
  [B, 0, B, B, 0, B, 0, B, B, B, B, B, B, 0, B, 0, B, B, 0, B],
  [B, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, B],
  [B, 0, B, 0, B, B, 0, B, B, 0, 0, B, B, 0, B, B, 0, B, 0, B],
  [0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0],
  [B, 0, B, 0, B, B, 0, B, B, B, B, B, B, 0, B, B, 0, B, 0, B],
  [B, 0, B, 0, 0, 0, 0, 0, 0, M, 0, 0, 0, 0, 0, 0, 0, B, 0, B],
  [B, 0, B, B, 0, B, 0, B, B, B, B, B, B, 0, B, 0, B, B, 0, B],
  [B, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, B],
  [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B]];

function preload(){

  pacRightImg = loadImage("pac_right.png");
  foodImg = loadImage("food.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}

// function showPac(){

// }

function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("black");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(foodImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === B) {
        fill("blue");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if(grid[y][x] === M){
        fill("black");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(pacRightImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}
 
function movePac(){
  if (keyIsDown(LEFT_ARROW)){
    if (grid[pacY][pacX-1] === 0) {
      //reset old location to white
      grid[pacY][pacX] = 0;
      
      //move
      pacX--;
    }
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
  
  
  if (pacX === [21][6] && keyIsDown(RIGHT_ARROW)){
     pacX = 0;
  }
  if (pacX === [0][6] && keyIsDown(LEFT_ARROW)){
     pacX = 21;
  }