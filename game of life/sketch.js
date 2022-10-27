// Game of Life
// Kati Kesur
let ROWS = 40;
let COLS = 55;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function keyPressed(){
  if (key === "e"){
    grid = create2dArray(COLS, ROWS);
  }
  if (key === " "){
    grid = takeTurn(grid);
  }
}

function takeTurn(grid){
  let nextTurn = create2dArray(COLS,ROWS);

  for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){
      let neighbours = 0;

      for (let i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; j++){

          if (y+i >= 0 && y+i < ROWS && x +j >=0 && x+j < COLS){
            neighbours += grid[y+i][x+j];
          }
        }
      }

      neighbours -= grid[y][x];
      if (grid[y][x] === 1){
        if (neighbours === 2 || neighbours === 3){
          nextTurn[y][x] = 1;
        }
        else{
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0){
        if (neighbours === 3){
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  return nextTurn;
}
function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}