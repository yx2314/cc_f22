//Marc Velten-Lomelin
//Coding:
//At least float, integer, string, and image (properly cited)
// textFont()


var img;
//loading images before program starts
function preload(){
// assign value to our variable

 img = loadImage('Images/Charles.png'); 
  //image citation
  //“Babbage in 1860.” Charles Babbage, https://en.wikipedia.org/wiki/Charles_Babbage. 
  
  console.log('imageloaded');
}
//float for size of photo circle

//integer variable
var username = 30;
var numb = 20;
var post = 15;


function setup() {
  createCanvas(450, 850);
}

function draw() {
  background(255);
  
  //use resize to see image fits
  img.resize(100,100);
  //put image in sketch'
  imageMode(CENTER);
  image(img,75,150);
  
  //string
  let handle = 'fatherbabbage';
  strokeWeight(1);
  textSize(username);
  textAlign(LEFT);
  fill(0);
  textFont('Roboto');
  textStyle(NORMAL);
  text(handle,25,35);
  
  stroke(0);
  strokeWeight(3);
  line(360,25,370,25);
  line(365,20,365,30);
  
  rectMode(CENTER);
  stroke(0);
  strokeJoin(BEVEL); 
  noFill();
  rect(365, 25,20,20);
  
  
  stroke(0);
  strokeWeight(3);
  line(405,15,430,15);
  line(405,25,430,25);
  line(405,35,430,35);
  
  stroke(220)
  ellipse(75, 150, 100,100);
  
  stroke(220);
  strokeWeight(1);
  noFill();
  ellipse(75, 150, 115,115);
  
  strokeWeight(1);
  textSize(numb);
  textAlign(CENTER);
  fill(0);
  textFont('Roboto');
  textStyle(BOLD);
  text('0',205,150);
  
  strokeWeight(0);
  textSize(post);
  textAlign(CENTER);
  textFont('Roboto');
  textStyle(NORMAL);
  text('Posts',205,170);
  
  strokeWeight(1);
  textSize(numb);
  textAlign(LEFT);
  fill(0);
  textFont('Roboto');
  textStyle(BOLD);
  text('100M',275,150);
  
  strokeWeight(0);
  textSize(post);
  textAlign(CENTER);
  textFont('Roboto');
  textStyle(NORMAL);
  text('Followers',300,170);
  
  strokeWeight(1);
  textSize(numb);
  textAlign(LEFT);
  fill(0);
  textFont('Roboto');
  textStyle(BOLD);
  text('0',400,150);
  
  strokeWeight(0);
  textSize(post);
  textAlign(CENTER);
  textFont('Roboto');
  textStyle(NORMAL);
  text('Following',405,170);
  //name
  strokeWeight(1);
  textSize(numb);
  textAlign(LEFT);
  fill(0);
  textFont('Roboto');
  textStyle(BOLD);
  text('Charles Babbage',25,230);
  
  //bio
   strokeWeight(1);
  textSize(post);
  textAlign(LEFT);
  fill(0);
  textFont('Roboto');
  textStyle(NORMAL);
  text('The father of computing, im kind of a big deal.',25,250);
  

  textAlign(LEFT);
  fill(0);
  textFont('Roboto');
  textStyle(NORMAL);
  textWrap(CHAR);
  text('"As soon as an Analytical Engine exists, it will neccessarily guide the future of science."',225,265,400);
  
  
  rectMode(CORNER);
  stroke(240);
  strokeWeight(2)
  strokeJoin(BEVEL); 
  fill(240);
  rect(20,350,370,30);
  
  strokeWeight(2);
  textSize(post);
  textAlign(CENTER);
  fill(0);
  textFont('Roboto');
  textStyle(BOLD);
  text('Edit Profile',210,370);
  
  rectMode(CORNER);
  stroke(240);
  strokeWeight(2)
  strokeJoin(BEVEL); 
  fill(240);
  rect(397, 350,30,30);
  
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(415, 361, 4,4);
  
  stroke(0);
  strokeWeight(1);
  line(411,370,413,365);
  line(413,365,417,365);
  line(417,365,419,370);

  stroke(0);
  strokeWeight(1);
  line(403,363,409,363);
  line(406,360,406,366);
  
  stroke(0);
  strokeWeight(.1);
  line(0,390,450,390);
  
  
  stroke(0);
  strokeWeight(2);
  strokeJoin(MITER);
  line(100,405,130,405);
  line(100,405,100,435);
  line(100,415,130,415);
  line(110,405,110,435);
  line(100,425,130,425);
  line(120,405,120,435);
  line(130,405,130,435);
  line(100,435,130,435);

  stroke(0);
  strokeWeight(2);
  strokeJoin(MITER);
  line(300,405,330,405);
  line(300,435,330,435);
  line(300,405,300,435);
  line(330,405,330,435);

   stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(315, 417, 12,12);
  
   stroke(0);
  strokeWeight(1.7);
  line(305,430,310,425);
  line(310,425,320,425);
  line(320,425,325,430);
  
  stroke(0);
  strokeWeight(.1);
  line(0,450,450,450);
  
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(225, 650, 115,115);
  
  noFill();
  beginShape();
  vertex(195,630);
  vertex(205,630);
  vertex(205,620);
  vertex(245,620);
  vertex(245,630);
  vertex(255,630);
  vertex(255,680);
  vertex(195,680);
  endShape(CLOSE);
  
  //float for circle size
let str = '35';
let circlesize = float(str);
  
  stroke(0);
  strokeWeight(1);
  noFill();
  ellipse(225, 655, circlesize,circlesize);
  
  
  strokeWeight(0);
  textSize(30);
  textAlign(CENTER);
  fill(0);
  textFont('Roboto');
  textStyle(BOLD);
  text('No posts yet',225,750);
  
  
}