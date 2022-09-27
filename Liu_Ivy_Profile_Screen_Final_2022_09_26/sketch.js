//Ivy Liu
let startRow=290;//integer
let startRow2=549.5;//float
let Title="The Author of The Python Language.";//string
let motto='"Gawky and proud of it."';
var dob='Date of Birth';
let DoB='January 31, 1956';//1956
var Edu="Master's degree in Math & CS from the University of Amsterdam.";//1982
let EduY="1982";
var P1='Designing and implementing ABC, a programming language and for non- expert users.';//1982-1986
let y1="1982-1986";
var P2='Amoeba project, a distributed operating of Free Universe of Amsterdam.';//1986-1991
let y2="1986-1991";
var P3="Working at a multimedia group at CWI, most of the group's implementation work was done in Python.";//1991-1995
let y3='1991-1995';
var P4="Guest researcher at NIST, working on Python. And organized the first python workshop.";//1994-1998
let y4='1994-1998';
var P5="Worked for BeOpen.com as Director of PythonLabs.";//2000
let y5='2000';
var P6= "Worked for Zope Corporation as Director of PythonLabs.";//2000-2003
let y6='2000-2003';
var P7="Worked for Elemental Security, and built a Python version of pgen.";//2003-2005
let y7='2003-2005';
var P8="Worked for Google on 'Mondrian', an internal code review tool,the Admin Console of 'the App Engine project', 'the Appstats library', 'the NDB library', and created an open-source code review tool, 'Rietveld'.";//2005-2012
let y8='2015-2012';
var P9="Worked for Dropbox, migrating over 5 million lines of server-side code from Python 2 to Python 3.";//2013-2019
let y9='2013-2019';
var P10='Distinguished Engineerat Microsoft.';//2020
let y10='2020 til now';
var img;
function preload(){
  img=loadImage("img/Guido.jpeg");
  //Photo credit: Michael Cavotta. License: CC BY-NC-ND 4.0
  console.log("Image loaded");
}

function setup() {
  createCanvas(800, 500);
  console.log(P1+y1);
  console.log(P2+y2);
}

function draw() {

  //framing
  background(148,172,198);//Color 1
  stroke(156,177,197);
  strokeWeight(5);
  rect(5,5,790,490); 
  
  //left side:name+photo
  textFont('Georgia');//font
  textSize(80);
  fill(83,117,194);//color 2
  text('Guido',10,startRow);
  text('van',10,startRow+80);
  text('Rossum',10,startRow+160);
  
  //right size captions
  textSize(12);
  strokeWeight(3);
  fill(59,68,79);
  text(dob,375,67,220);
  text(Edu,580,90,220);//right
  text(P1,345,102,220);//left
  text(P2,580,142,210);
  text(P3,345,194,210);
  text(P4,580,236,210);
  text(P5,345,298,210);
  text(P6,580,305,210);
  text(P7,345,340,210);
  text(P8,580,364,210);
  text(P9,345,437,210);
  text(P10,580,477,210);
  strokeWeight(5);
  
  // motto, title, etc.
  fill(111,142,171,200);//color 3
  textSize(30);
  rotate(PI+PI/2);
  text(Title,-495, 330);
  rotate(PI/2);
  text(motto,460,35);
  
  //right side timeline: 
  line(startRow+270,50,startRow+270,483);
  textSize(16);

  line(startRow2+10,52,startRow+260,52);//left
  line(startRow2+10,80,startRow+280,80);//right
  rect(startRow2,80,10,41.5);//left
  rect(startRow2+10,121.5,10,52);//right
  rect(startRow2,173.5,10,41.5);
  rect(startRow2+10,215,10,41.5);
  line(startRow2+10,288.5,startRow+260,288.5);
  rect(startRow2+10,288.5,10,31);
  rect(startRow2,320,10,22);
  rect(startRow2+10,344,10,73);
  rect(startRow2,417,10,55);
  line(startRow2+10,480,startRow+280,480);

  fill(83,117,194);
  text(DoB,420,57);
  text(EduY,580,85);
  text(y1,465,92);
  text(y2,580,132);
  text(y3,465,184);
  text(y4,580,226.5);
  text(y5,495,288.5);
  text(y6,580,295);
  text(y7,463,330);
  text(y8,580,354);
  text(y9,463,427);
  text(y10,580,472);
  fill(111,142,171,200);
  
  //image
  img.resize(250,200);
  image(img,10,10);

//Photo credit: Michael Cavotta. License: CC BY-NC-ND 4.0
}