background(0, 7, 45);
// noStroke();
let x = 200;
let y = 200;

triangle(150, 210, 120, 210, 125, 270);
ellipse(125, 270, 10);

triangle(250, 210, 280, 210, 275, 270);
ellipse(275, 270, 10);

triangle(185, 210, 215, 210, 200, 290);
ellipse(200, 290, 10);

ellipse(x, y + 20, 200, 50);

ellipse(x, y + 15, 200, 50);

ellipse(x, y, 110, 20);

push();

translate(200, 200);
rotate(3.14);
translate(-200, -200);
arc(x, y - 5, 90, 90, 0, PI);

pop();

line(x, y + 15, x, y + 30);
line(x - 40, y + 12, x - 60, y + 25);
line(x + 40, y + 12, x + 60, y + 25);
line(x - 60, y, x - 80, y + 2);
line(x + 60, y, x + 80, y + 2);
