// Shiyu Yu 
// creating Steve Jobs' profile 

var img;

// variables for information
var name = "Steve Jobs";
var dob = "Feb 24, 1955 - Oct 5, 2011, Aged 56";
var email = "steve@apple.com";
var work = "co-founder and chief executive officer of Apple"
var educ = "Education:";
var innov = "Innovations:";
var award = "Awards:";
var following = "5 Following";
var followers = "10.8K Followers";
var educexp = "1968 - Homestead High School";
var educexp1 = "1972 - Reed College, withdrawing at the same year";
var innovexp = "1976 - Apple I Computer              1977 - Apple II Home Computer ";
var innovexp1 = "1978 - Apple Lisa                           1984 - Macintosh";
var innovexp2 = "1988 - NeXT Computer                1998 - iMac";
var innovexp3 = "2001 - iPod                                      2007 - iPhone";
var innovexp4 = "2010 - iPad                                      (450 patents in total)";
var awards = "1985 - National Medal of Technology";
var awards1 = "2004 to 2010 - Time 100 Most Influential People in the World";
var awards2 = "2012 - Grammy Trustees Award";
var awards3 = "2022 - Presidential Medal of Freedom";


// variables for x and y positions 
var xPos;
var xPos1;
var xPos2;
var yPos;
var yPos1;
var yPos2;

// variables for the profile back-screen
var r;
var g;
var b;
var size0;
var size1; 
var size2; 

function preload(){
  img = loadImage("images/image.png"); // Gillsater, C. (2017, October 17). The story behind the image - steve jobs. Profoto. Retrieved September 26, 2022, from https://profoto.com/int/profoto-stories/albert-watson-steve-jobs 
}

function setup() {
  createCanvas(400, 650);
  
    // assign values to variables
  xPos = width/2;
  yPos = 500.5;
  
  xPos1 = 135;
  yPos1 = 85;

  xPos2 = 300;
  yPos2 = 500;
  
  xPos3 = 15;
  yPos3 = 23;
  
  xPos4 = 370;
  yPos4 = 17;
  
  xPos5 = 390;
  yPos5 = 32;
  
  r = 18;
  g = 178;
  b = 252;
  a = 25;
  white = 255;
  gray = 100;
  
  size0 = 800;
  size1 = 700;
  size2 = 130;
}

function draw() {
  // profile background
  background(r, g, b, a);
  noStroke();
  fill(white);
  ellipse(xPos, yPos, size0, size1);
  
  // followers and following
  fill(gray);
  textStyle(NORMAL);
  textFont('Georgia');
  textSize(13);
  fill(white);
  stroke(r, g, b);
  ellipse(50, 225, 100, yPos5);
  ellipse(345, 225, 100, yPos5);
  fill(gray);
  noStroke();
  text(following, xPos3, 230);
  text(followers, xPos2, 230);
  
  // headshot 
  img.resize(size2,size2);
  image(img, xPos1, yPos1);
  
  // symbols
  stroke(white);
  line(xPos3, yPos3, a, 13);
  line(xPos3, yPos3, a, 33);
  line(xPos4, yPos4, xPos5, yPos4);
  line(xPos4, a, xPos5, a);
  line(xPos4, yPos5, xPos5, yPos5);
  
  // name 
  fill(gray);
  textSize(a);
  textStyle(BOLD);
  text(name, xPos1, 245);
  
  // information 
  textStyle(NORMAL);
  textSize(10);
  text(dob, 120, 265);
  text(email, 160, 280);
  text(work, 100, 295);
  
  textSize(14);
  textStyle(BOLDITALIC);
  text(educ, a, 330);
  text(innov, a, 410);
  text(award, a, 540);
  
  textSize(12);
  textStyle(NORMAL);
  
  text(educexp, a, 355);
  text(educexp1, a, 375);
  
  text(innovexp, a, 430);
  text(innovexp1, a, 450);
  text(innovexp2, a, 470);
  text(innovexp3, a, 490);
  text(innovexp4, a, 510);

  text(awards, a, 560);
  text(awards1, a, 580);
  text(awards2, a, 600);
  text(awards3, a, 620);
}