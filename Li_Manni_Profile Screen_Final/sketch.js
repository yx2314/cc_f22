//variables
var img;
actualAge = 67.25

//cite: https://en.wikipedia.org/wiki/Tim_Berners-Lee#/media/File:Sir_Tim_Berners-Lee_(cropped).jpg
//source: Wikipedia


function preload(){
  img = loadImage("image/Tim Profile.jpeg");
  
  //check
  console.log('image loaded')
  
}



function setup() {
  createCanvas(350, 570);
  textFont('Georgia');
}

function draw() {
  background(252,248,179);
  
  //profile picture place holder
  fill(0);
  noStroke();
  rect(0,0,350,380);
  
  //resize image
  img.resize(350,380);
  image(img,0,0);
  
  //name and age
  stroke(255);
  fill(255);
  textSize(25);
  text('Tim, 67',20,320);
  
//   //verification symbol
//   stroke(34,133,240);
//   fill(34,133,240);
//   ellipse(116,312,17,17);
  
  //profession
  stroke(255);
  fill(255);
  textSize(13);
  text('Inventor',20,340);
  
  //reaction panel
  fill(61,61,59);
  stroke(61,61,59);
  ellipse(30,360,15,15);
  rect(30,352.5,70,15);
  ellipse(100,360,15,15);
  
  //text in reaction panel
  fill(255);
  stroke(255);
  textSize(9);
  text('React to photo',43,362.5);
  
  //emoji in reaction panel
  ellipse(33,360,9,9);
  fill(61,61,59);
  stroke(61,61,59);
  ellipse(30.5,359,1,1);
  ellipse(35,359,1,1);
  arc(33.21,362,3,3,0,PI);
  
  //bumble logo
  fill(247,196,87);
  stroke(247,196,87);
  ellipse(305,340,40,40);
  fill(255);
  stroke(255);
  ellipse(305,340,15,15);
  //upper angle
  triangle(305,330,299,335,311,335);
  //left angle
  triangle(294,340,299,335,299,345);
  //right angle
  triangle(316,340,311,335,311,345);
  //bottom left
  triangle(300,350,299,345,305,347);
  triangle(310,350,303,342,311,340);
  
  //accomplishments & intro
  textSize(13);
  stroke(87,86,81);
  fill(87,86,81);
  text('Inventor of www. A professor at MIT.',20,420);
  text(actualAge,20,440);
  text('years old precisely',60,440);
  text('Call me TimBL :)',20,460);
  
  //second emoji panel
  fill(191,191,187);
  stroke(191,191,187);
  ellipse(30,490,23,23);

  fill(255);
  stroke(255);
  ellipse(30,490,13,13);
  fill(191,191,197);
  stroke(191,191,187);
  ellipse(26,487,1,1);
  ellipse(34,487,1,1);
  arc(30.5,492,3,3,0,PI);
  
  //tag panels
  fill(252,228,131);
  stroke(252,228,131);
  
  ellipse(30,524,15,15);
  rect(30,516.5,70,15);
  ellipse(100,524,15,15);
  
  ellipse(140,524,15,15);
  rect(140,516.5,70,15);
  ellipse(210,524,15,15);
  
  ellipse(250,524,15,15);
  rect(250,516.5,70,15);
  ellipse(320,524,15,15);
  
  //tag text
  fill(255);
  stroke(255);
  textSize(10);
  text('Dog(s)',49,527);
  text('London',159,527);
  text('Married',269,527);
  
  //bottom panel
  fill(255);
  stroke(255);
  rect(0,540,350,40);
  
  //icon1
  fill(225);
  stroke(225);
  
  ellipse(20,550,8,8);
  arc(20,562,13,13,PI,TWO_PI);
  
  //icon2
  fill(180);
  stroke(180);
  
  rect(171,548,10,3);
  rect(168.5,554,15,3);
  rect(171,560,10,3);
  
  //icon3
  fill(225);
  stroke(225);
  
  rect(325,548,15,10);
  triangle(339,558,335,558,337,562);
  
  
}