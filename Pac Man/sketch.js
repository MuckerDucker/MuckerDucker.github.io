// Pac Man
// Kati Kesur
// October 31, 2022
//
// Extra for Experts: use 2d arrays in a different way then in class
// implemented sound effects for pac-man eating food and winning
// if pac-man and the ghost collide, the ghost wins
// code checks for how much food is left, if all is eaten, pac-man wins!
// if window is resized, refresh the page and it should adjust accordingly

// Small FYI - unfortunately I am unable to recieve eslint corrections at home so I apologize in advance if they occur throughout my code.

// defining global variables

let blockWidth;
let blockHeight;
let pacX = 9;
let pacY = 7;
let ghostX = 8;
let ghostY = 5;
let pacImg;
let ghostImg;
let foodImg;
let B = 2;
let M = 3;
let G = 4;
let state = "start";
let foodcounter;

let grid = [
  [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B],
  [B, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, B],      
  [B, 0, B, B, 0, B, 0, B, B, B, B, B, B, 0, B, 0, B, B, 0, B],
  [B, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, B],
  [B, 0, B, 0, B, B, 0, B, B, 1, 1, B, B, 0, B, B, 0, B, 0, B],
  [B, 0, 0, 0, 0, 0, 0, B, G, 1, 1, 1, B, 0, 0, 0, 0, 0, 0, B],
  [B, 0, B, 0, B, B, 0, B, B, B, B, B, B, 0, B, B, 0, B, 0, B],
  [B, 0, B, 0, 0, 0, 0, 0, 0, M, 0, 0, 0, 0, 0, 0, 0, B, 0, B],
  [B, 0, B, B, 0, B, 0, B, B, B, B, B, B, 0, B, 0, B, B, 0, B],
  [B, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, B],
  [B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B, B]];


//loading all images
function preload(){
  startImg = loadImage("pac_start.png");
  pacImg = loadImage("pac.png");
  foodImg = loadImage("food.png");
  ghostImg = loadImage("ghost.jpg");
  pacWinImg = loadImage("pac_win.png");
  ghostWinImg = loadImage("ghost_win.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid[pacY][pacX] = M;
  grid[ghostY][ghostX] = G;
}

function startScreen() {
  background(startImg);
}

function draw() {
  if (state === "start"){
    startScreen()
    }
  if (state === "main"){
    displayGrid(grid);
    foodchecker();
    ghostWin(); 
  }
}

function displayGrid(grid) {
  let blockWidth = width / grid[0].length;
  let blockHeight = height / grid.length;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("black");
        rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
        image(foodImg, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
      }
      else if (grid[y][x] === B) {
        fill("blue");
        rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
      }
      else if(grid[y][x] === M){
        fill("black");
        rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
        image(pacImg, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
      }
      else if(grid[y][x] === G){
        rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
        image(ghostImg, x * blockWidth, y * blockHeight, blockWidth, blockHeight);
      }
      else if(grid[y][x] === 1){
        fill("black");
        rect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
      }
    }
  }
}

// Checking how much food is left 
function foodchecker(){
  foodcounter = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 0){
        foodcounter++;        
      }
    }
  }
  if (foodcounter = 0){
    background(pacWinImg);
  } 
}

// checking if the ghost won
function ghostWin(){
  if(ghostX === pacX && ghostY === pacY){
    background(ghostWinImg);
  }
}

function keyPressed(){
  // initiating main screen
  if (state === "start" && keyCode === 32){
    state = "main";
  }
  // Pac movement
  if (keyCode === UP_ARROW) {
    if (grid[pacY-1][pacX] !== B){
      //sets spot to black(eats food if it exists)
      grid[pacY][pacX] = 1;
      
      //move
      pacY--;

      //changes pacs location
      grid[pacY][pacX] = M;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[pacY+1][pacX] !== B) {
      //setting trail to black
      grid[pacY][pacX] = 1;
      
      //move
      pacY++;

      //changes pacs location
      grid[pacY][pacX] = M;
    }
  }

  if (keyCode === RIGHT_ARROW) {
    if (grid[pacY][pacX+1] !== B) {
      //setting trail to black
      grid[pacY][pacX] = 1;
      
      //move
      pacX++;

      //changes pacs location
      grid[pacY][pacX] = M;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[pacY][pacX-1] !== B) {
      //setting trail to black
      grid[pacY][pacX] = 1;
      
      //move
      pacX-- ;

      //changes pacs location
      grid[pacY][pacX] = M;
    }
  }

    // Ghost movement
    if (keyCode === 87) {
      if (grid[ghostY-1][ghostX] !== B){
        // ensuring the ghost leaves no trail
        if(grid[ghostY-1][ghostX] === 1){
          grid[ghostY][ghostX] = 1;
        }
        if(grid[ghostY-1][ghostX] === 0){
          grid[ghostY][ghostX] = 0;
        }

        //move
        ghostY--;
  
        //changes ghost's location
        grid[ghostY][ghostX] = G;
      }
    }
  
    if (keyCode === 83) {
      if (grid[ghostY+1][ghostX] !== B){
        // ensuring the ghost leaves no trail
        if(grid[ghostY+1][ghostX] === 1){
          grid[ghostY][ghostX] = 1;
        }
        if(grid[ghostY+1][ghostX] === 0){
          grid[ghostY][ghostX] = 0;
        }
        //move
        ghostY++;
  
        //changes ghost's location
        grid[ghostY][ghostX] = G;
      }
    }
  
    if (keyCode === 68) {
      if (grid[ghostY][ghostX + 1] !== B){
        // ensuring the ghost leaves no trail
        if(grid[ghostY][ghostX + 1] === 1){
          grid[ghostY][ghostX] = 1;
        }
        if(grid[ghostY][ghostX + 1] === 0){
          grid[ghostY][ghostX] = 0;
        }
        
        //move
        ghostX++;
  
        //changes ghost's location
        grid[ghostY][ghostX] = G;
      }
    }
  
    if (keyCode === 65) {
      if (grid[ghostY][ghostX - 1] !== B){
        // ensuring the ghost leaves no trail
        if(grid[ghostY][ghostX - 1] === 1){
          grid[ghostY][ghostX] = 1;
        }
        if(grid[ghostY][ghostX - 1] === 0){
          grid[ghostY][ghostX] = 0;
        }
        
        //move
        ghostX-- ;
  
        //changes ghost's location
        grid[ghostY][ghostX] = G;
      }
    }
}


// Code for Final Project
//if (grid[21][6] && keyCode === RIGHT_ARROW){
//  pacX = 0;
//  grid[pacY][pacX] = M;

//}
//if (grid[0][6] && keyCode === LEFT_ARROW){
//  pacX = 21;
//  grid[pacY][pacX] = M;
//}