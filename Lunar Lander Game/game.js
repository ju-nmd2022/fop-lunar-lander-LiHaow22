let ufoX = 100;
let ufoY = 100;
let speedY = 0;
let yVal = 30;
let velocity = 0;
let acceleration;
let mass;
let startingGame = true;
let playingGame = false;
let endGame = false;

let state = "start";

// Gravity thanks to https://editor.p5js.org/dansakamoto/sketches/S1J_MEXYm
function setup() {
  createCanvas(800, 600);
  background(0);
  mass = 100;
  acceleration = mass * 0.01;
}

function startScreen() {
  fill(255, 255, 255);
  textFont("futura");
  textSize(15);
  text(
    "Start the game by clicking. Control the ufo by pressing the spacebar, try to land as smoothly as possible! Good luck (:",
    100,
    100
  );
}
function startScreen() {
  background(255, 255, 0);
}
function playingScreen() {
  background(0, 0, 255);
}
function succeedScreen() {
  background(0, 255, 0);
}
function failedScreen() {
  background(255, 0, 0);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "playing") {
    playingScreen();
    startingGame = false;
    playingGame = true;
    endGame = false;
  } else if (state === "end") {
    if (end === "failed") {
      text(
        "If you expect that harsh landing to work, hate to break it to you, it won't. Press 'S' to start over.",
        100,
        100
      );
    }
    if (end === "succeed") {
      ufoShip(200, 550, keyIsDown(32));

      text("Congratulations! You landed safely.", 200, 240);
    }
  }
  if (playingScreen)
    if (state === "playing" && yVal >= 550 && speedY <= 5) {
      yVal = 590;
      state = "end";
      result = "succeed";
    } else if (state === "playing" && yVal >= 550 && speedY > 5) {
      state = "end";
      result = "crashed";
      yVal = 590;
    } else if (state === "playing" && yVal <= 0);
  {
    text("You flew too far!", 100, 100);
  }
}
function keyTyped() {
  if (key === "s")
    if (state === "start") {
      state = "playing";
      speedY = 0;
      yVal = 30;
      velocity = 0.1;
    } else if (state === "playing") {
      state = "end";
    } else if (state === "end") {
      state = "playing";
      speedY = 0;
      yVal = 30;
      velocity = 0.1;
    }
}

function ufoShip(x, y) {
  //Landing gear (triangles)
  //left
  fill(217, 240, 255);
  noStroke();
  triangle(x - 50, y + 10, x - 80, y + 10, x - 75, y + 70);
  //right
  triangle(x + 50, y + 10, x + 80, y + 10, x + 75, y + 70);
  //middle
  triangle(x - 15, y + 10, x + 15, y + 10, x, y + 80);

  //Landing gear (circles/balls)
  //left
  fill(255, 255, 255);
  ellipse(x - 75, y + 70, 10);
  //right
  ellipse(x + 75, y + 70, 10);
  //middle
  ellipse(x, y + 80, 10);

  //Glass dome
  fill(255, 255, 255);
  stroke(217, 240, 255);
  ellipse(x, y, 90);

  //"metal" body/hull
  fill(167, 187, 236);
  stroke(255, 255, 255);
  ellipse(x, y + 20, 200, 50);
  ellipse(x, y + 15, 200, 50);
  fill(255, 255, 255);
  strokeWeight(2);
  stroke(217, 240, 255);
  ellipse(x, y, 110, 20);

  //lines on top of hull
  stroke(255, 255, 255);
  line(x, y + 15, x, y + 30);
  line(x - 40, y + 12, x - 60, y + 25);
  line(x + 40, y + 12, x + 60, y + 25);
  line(x - 60, y, x - 80, y + 2);
  line(x + 60, y, x + 80, y + 2);

  if (keyIsDown(32)) {
    stroke(246, 246, 211);
    line(x - 50, y + 60, x - 60, y + 120);
    line(x + 50, y + 60, x + 60, y + 120);
    line(x, y + 100, x, y + 170);
    line(x - 25, y + 80, x - 30, y + 200);
    line(x + 25, y + 80, x + 30, y + 200);
  }

  stroke(255, 255, 255);
  strokeWeight(1);
  textFont("futura");
  text("Velocity: " + velocity, 100, 100, 100, 100);
  text("Acceleration: " + acceleration, 100, 120, 100, 100);
}
function draw() {
  clear();
  velocity += acceleration; //gravity thanks to https://editor.p5js.org/dansakamoto/sketches/S1J_MEXYm
  yVal += velocity;
  ufoShip(width / 2, yVal, mass, mass);
  if (keyIsDown(32)) {
    //velocity = 3;
    velocity = velocity - 2;
  }
  if (state) {
  }
}
function mousePressed() {
  yVal = 0;
  velocity = 0;
}

console.log(velocity);
