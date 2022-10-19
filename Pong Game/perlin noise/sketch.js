// Perlin Noise
// KTI
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let radius;
let time = 0;

let allCircles = [];

function keyPressed(){
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000),
  };
  allCircles.push(theBall);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black");
  for (let i = 0; i < allCircles.length; i++){
    allCircles[i].x = noise(time) * width;
    allCircles[i].y = noise(time + 5000) * height;
  
    allCircles[i].x = noise(time) * width;
    allCircles[i].y = noise(time + 5000) * height;

    // increase time along noise
    time += 0.01;
    time += 0.01;

    circle(allCircles[i].x, allCircles[i].y, allCircles[i].radius*2);
  }
}