'use strict';

var img;
var img2;
var img3;
var img4;
var img5;
var img6;

function preload() {
  img = loadImage('assets/0012.jpg');
  img2 = loadImage('assets/0019.jpg');
  img3 = loadImage('assets/0020.jpg');
  img4= loadImage('assets/0021.jpg');
  img5 = loadImage('assets/0026.jpg');
  img6 = loadImage('assets/0027.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  image(img3, 100, 250, 624, 412);
  image(img4, 724, 250, 624, 412);
 
}

function draw() {
  var x1 = floor(random(width));
  var y1 = 50;

  var x2 = round(x1 + random(-7, 7));
  var y2 = round(y1 + random(-5, 5));

  var w = floor(random(10, 40));
  var h = height - 100;

  set(x2, y2, get(x1, y1, w, h));
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    background(0);
    image(img, 100, 250, 624, 412);
    image(img2, 724, 250, 624, 412);
  }
}