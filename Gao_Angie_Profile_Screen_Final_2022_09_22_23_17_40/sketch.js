//define variables 
let x = 20;
let y = 1.0;
var img;
var img2;
var img3;

function preload(){
  img = loadImage('images/GVR.jpeg')
  //Photo credit: Michael Cavotta. License: CC BY-NC-ND 4.0
  img2 = loadImage('images/idle.png')
  //photo credit to Oojrsbaihz and was granted for personal use
  img3 = loadImage('images/lic.jpeg')
  //photo credit to Guido Van Rosseum's websitehttps://gvanrossum.github.io/
}

function setup() {
  createCanvas(600, 600);  
  
}

function draw() {
  background(250);
  
  //background decoration
  strokeWeight(1)
  fill(178, 190, 181)
  rect(50,0,y,600)
  fill(0);
  rect(0,0,x,600);
  rect(0,0,600,x);
  rect(580,0,20,600)
  rect(0,580,600,20)   
  

  //Highlight
  noStroke()
  fill(255, 255, 0)  
  //rect(54,38,155,16)
  rect(219,250,48,18)
  fill(120,150)
  rect(83,425,47,15)
  
  //Profile Text
  textFont('courier')
  fill(2)
  textSize(12)
  fill(0,154,23)
  text("'''",55,210)
  text('Guido van Rossum',55,220)
  text("'''",55,235)
  fill(0)
  text('>>> The Creator of the        Language',55,265)
  text('>>> Date of Birth: 31 January 1956',55,280)
  text('>>> Born and raised in Netherland',55,295)
  text('>>> Education: University of Amsterdam',55,310)
  text('>>> I own the official',290,365)
  text('>>> Current Distinguished Engineer at Microsoft',55,420)
  text('>>> Former Engineer at: ',55,435)
  text('Dropbox, Google, Elemental Security, Zope Corporation, ',83,450)
  text('BeOpen.com, CNRI, CWI, and SARA',83,465)
  fill(210, 43, 43)
  text('Python',222,265) 
  text('# About Me:',55,250)
  text('# Fun Fact: ',290,350)
  text('# Professional Experience',55,405)
  
  //image of GVR
  img.resize(190,150)
  image(img,180,50)
  //image of idle
  img2.resize(20,20)
  image(img2,0,0)
  image(img2,0,575)
  image(img2,580,0)
  image(img2,580,575)
  image(img2,0,280)
  image(img2,580,280)
  //image of his license
  img3.resize(100,50)
  image(img3,460,335)
  
  //flag of Netherland
  fill(169,31,50)
  rect(285,2,20,5.0)
  rect(285,580,20,5.0)
  fill(255,255,255)
  rect(285,7,20,5.0)
  rect(285,585,20,5.0)
  fill(0, 61, 165)
  rect(285,12,20,5)
  rect(285,590,20,5)
  
}