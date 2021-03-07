
'use strict';

var img;
var img2;

function preload() {
  img = loadImage('ettore2.jpg');
  img2 = loadImage('ettore3.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  image(img, 0, 0);
}

function draw() {
  var x1 = random(width);
  var y1 = random(height);

  var x2 = round(x1 + random(-10, 10));
  var y2 = round(y1 + random(-10, 10));

  var w = 150;
  var h = 50;

  set(x2, y2, get(x1, y1, w, h));
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    image(img2, 0, 0);
  }
}
