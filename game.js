// keyTyped function inspired by: https://p5js.org/reference/p5/keyTyped/ Retrieved: March 2023
// Game inspiration: https://creative-coding.decontextualize.com/making-games-with-p5-play/ Retrieved: March 2023
// Game states inspired by: https://editor.p5js.org/mbardin/sketches/lSYhg5Xr Retrieved: March 2023
// Gravity thanks to: https://editor.p5js.org/dansakamoto/sketches/S1J_MEXYm Retrieved: March 2023
// Centered Canvas: https://github.com/processing/p5.js/wiki/Positioning-your-canvas Retrieved: 22/12-2024
// Code has also been reworked with Thomas Halvarsson 22-12/2024

let ufoX = 100;
let ufoY = 100;
let speedY = 0;
let yVal = 30;
let velocity = 0; // Speed
let acceleration;
let mass; // Weight

let startingGame = true;
let playingGame = false;
let endGame = false;
let bg;
let end;
let state = "start";
let fuel;

function setup() {
  bg = loadImage("LunarLander.png");
  createCanvas(972, 600);
  background(0);
  mass = 100;
  acceleration = mass * 0.005;
}
// ------ Starting screen with instructions
function startScreen() {
  background(bg);
  fill(255, 255, 255);
  textFont("arial");
  textSize(20);
  text("Welcome! Control the ufo by pressing the spacebar,", 100, 150);
  text("try to land as smooth as possible. Don't run out of fuel!", 100, 175);
  text("Press 'S' to start, good luck! :)", 100, 200);
  fuel = 300; // Fuel starts at 300 (is later removed by 10)
  //console.log("fuel new");
}
// ------ Function to display image
function playingScreen() {
  background(bg);
}
function succeedScreen() {
  background(bg);
}
function failedScreen() {
  background(bg);
}
// ------ When pressing S player will...
function keyTyped() {
  if (key === "s")
    if (state === "start") {
      state = "playing";
      speedY = 0;
      yVal = 30;
      velocity = 0.1;
    } else if (state === "start") {
      state = "end"; // Makes sure that the game stops flying too far
    } else if (state === "end") {
      // When pressing S and game has ended the player restarts
      state = "start";
      speedY = 0;
      yVal = 30;
      velocity = 0.1;
    }
}
// ------ All element for UFO
function ufoShip(x, y) {
  //Landing gear (triangles)
  //left
  background(bg);
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
  // When pressing space AND fuel is more than 1 the thrust beams show, if the fuel is out, the beams are hidden
  if (keyIsDown(32) && fuel >= 1) {
    stroke(246, 246, 211);
    line(x - 50, y + 60, x - 60, y + 120);
    line(x + 50, y + 60, x + 60, y + 120);
    line(x, y + 100, x, y + 170);
    line(x - 25, y + 80, x - 30, y + 200);
    line(x + 25, y + 80, x + 30, y + 200);
    //console.log(fuel);
  }
}
// ------ If state
function draw() {
  if (state === "start") {
    // If state is = start, the start screen is visable
    startScreen();
  } else if (state === "playing") {
    // If state is = playing, the playing screen is visable
    playingScreen();
    startingGame = false;
    playingGame = true;
    endGame = false;
    velocity += acceleration; // Gravity
    yVal += velocity;
    ufoShip(width / 2, yVal); // Controlling the UFO's position
    if (keyIsDown(32) && fuel >= 1) {
      // When pressing spacebar, the UFO speeds up AND the fuel loses 10
      velocity = velocity - 2;
      fuel = fuel - 10;
      //console.log(fuel);
    }
  } else if (state === "end") {
    // If state is = end, the end screens are visable
    startingGame = false;
    playingGame = false;
    endGame = true;
    if (end === "failed") {
      // If the player crashes too harshly
      failedScreen();
      text("If you expect that harsh landing to work,", 100, 150);
      text("hate to break it to you, it won't.", 100, 175);
      text("Press 'S' to start over.", 100, 200);
    }
    if (end === "succeed") {
      // If the player succeeds to land smoothly
      ufoShip(width / 2, 500); // Seems to generate double text if removed?
      noStroke();
      textSize(20);
      textFont("arial");
      text("Congratulations! You landed safely.", 100, 150);
    }
  }
  if (playingScreen) {
    // During playing screen
    textSize(20);
    textFont("arial");
    noStroke();
    if (state === "playing" && fuel >= 1) {
      // Fuel in the top left corner
      text(`Fuel: ${fuel}`, 30, 40);
    }
    if (state === "playing" && fuel === 0) {
      // When fuel is out
      text("Fuel is out", 30, 40);
    }
    if (state === "playing" && yVal >= 500 && velocity <= 5) {
      // If landing with 5 or less velocity the succeed screen shows
      yVal = 550;
      state = "end";
      end = "succeed";
    } else if (state === "playing" && yVal >= 500 && velocity >= 6) {
      // If landing with 6 or more velocity the failed screen shows
      state = "end";
      end = "failed";
      yVal = 550;
    } else if (state === "playing" && yVal <= -100) {
      // If UFO goes outside the top of the screen the game ends
      text("You flew too far! Try again by pressing 'S'.", 100, 100);
      state = "end";
    }
    //console.log(velocity);
  }
}
