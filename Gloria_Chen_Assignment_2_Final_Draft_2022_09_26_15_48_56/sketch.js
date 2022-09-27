//declaring our image variable
  var img;


//load in the images before th eprogram starts 
  function preload() {

//assign a 'value' to our variable, which basically means were going to get the image and connect it to our variable
  img = loadImage("susan kare/SusanKare.jpeg");


//check if this work
  console.log("image loaded");
  
}

function setup() {
  createCanvas(400, 400);
  
  //use the function imageMode () to change where the image is generated from
  imageMode(CENTER);
}

{
//variables for texts
  var xPos1;
  var xPos2;
  var xPos3;
  var xPosT;

  var yPos;
  var yPos2;
  var yPosT;

//variables for width and height of the rectangulars
  var Height;
  var Weight;

//variables for colors
  var r;
  var g;
  var b;

}

function setup() {
  createCanvas(410, 510);

 //assign values to all of the variables
  xPos1 = 5;
  xPos2 = 15.5;
  xPos3 = 300;
  xPosT = 30;
  xPosT2 = 40;
  xPosT3 = 60;

  yPos = 5;
  yPos2 = 15.5;
  yPosT = 50;
  yPosT2 = yPosT+20;
  yPosT3 = yPosT2+20;
  yPosT4 = yPosT3+20;
  yPosT5 = yPosT4+20;
  yPosT6 = yPosT5+15;
  yPosT7 = yPosT4+75;
  yPosT8 = yPosT7+20;
  yPosT9 = yPosT8+33.5;
  yPosT10 =yPosT8+65;
  yPosT11 =yPosT10+20;
  yPosT12 =yPosT11+20;
  yPosT13 =yPosT12+20;
  yPosT14 =yPosT13+20;
  
  Height = 490;
  Weight = 390;

  r=220;
  r2=255;
  r3=0;
  g=50;
  g2=100;
  g3=200;
  h=0;
  h2=100;
  h3=200;

  name = "Susan Kare";
  birth = "- born in Ithaca,  New York in 1984";
  school = "- New York University fine arts M.A. and Ph.D.(1978)";
  experience = "- Work Experience:";
  apple = "·Apple (1982-1985)";
  macintosh = "Known for interface elements and font contributions to the first Apple Macintosh";
  next = "·left NeXT, become an independent designer(1986)";
  windows = "·Microsoft Corporation (1988)";
  playcard = "designed playcards for Solitaire in Windows 3.0 system";
  facebook = "·Facebook (2007)";
  gift = "designed 'gifts' that could be purchased for $1";
  partner = "·Partner in Susan Kare LLP (2008-Now)";
  award = "- Award:";
  award1 = "·the Chrysler Design Award (October, 2001)";
  award2 = "·National Design Award for Lifetime Achievement";
  
  //use the function imageMode () to change where the image is generated from
  imageMode(CENTER);
  
}


function draw() {
  background(255);
  
  fill(155, 0, 255);
  //rectangular 1
  rect(xPos1, yPos, Weight, Height);
  
  //rectangular 2
  fill(255);
  rect(xPos2, yPos2, Weight, Height);
  
  //text
  fill(0);
  textFont("Bungee Spice");
  textSize(20);
  text(name, xPosT, yPosT);
  textFont('Georgia');
  textSize(15);
  text(birth, xPosT2, yPosT2);
  text(school, xPosT2, yPosT3);
  text(experience, xPosT2, yPosT4);
  fill(r, g, h);
  text(apple, xPosT3, yPosT5);
  fill(0);
  textSize(13);
  textWrap(CHAR);
  text("Known for interface elements and font contributions to the first Apple Macintosh", 60, 138, 340);
  textSize(15);
  fill(r2, g2, h);
  text(next, xPosT3, yPosT7);
  fill(r2, g3, h);
  text(windows, xPosT3, yPosT8);
  fill(0);
  textSize(13);
  textWrap(CHAR);
  text(playcard, 60, 210, 340);
  textSize(15);
  fill(r3, g2, h);
  text(facebook, xPosT3, yPosT9);
  textSize(13);
  textWrap(CHAR);
  fill(0);
  text(gift, 60, 243, 340);
  textSize(15);
  fill(r3, g3, h3);
  text(partner, xPosT3, yPosT10);
  fill(0);
  textSize(15);
  text(award, xPosT2, yPosT11);
  text(award1, xPosT3, yPosT12);
  text(award2, xPosT3, yPosT13);
  
    //use resize to make sure the pic fits
  img.resize(335, 160);

  
  
//   //put the image in the sketch
  image(img, 210, 417);

  
}