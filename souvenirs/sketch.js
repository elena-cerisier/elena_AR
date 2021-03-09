
//
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/** 
 * */



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