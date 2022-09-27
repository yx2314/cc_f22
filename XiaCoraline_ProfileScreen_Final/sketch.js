var x = 40;
var textX = 19.5;
var rectx = 80;
var recty = 300;
var numberY = 75;
var followY = 90;
var highlightY = 277;
var profilepic;
var title = "alanmturing";
var post1;
var post2;
var post3
var post4;
var highlight1;
var hightlight2;
var highlight3;
var highlight4;
var highlight5;
var highlight6;

function preload(){
  profilepic = loadImage("images/alanturing_profile.png");
  post1 = loadImage("images/alanturing_age15.jpeg");
  post2 = loadImage("images/alanturing_club.jpeg");
  post3 = loadImage("images/alan-turing-runner.jpeg");
  post4 = loadImage("images/ru-1enzvtevrbz656.jpeg");
  highlight1 = loadImage("images/alan_math.png");
  highlight2 = loadImage("images/turingmachine.png");
  highlight3 = loadImage("images/logiv.png");
  highlight4 = loadImage("images/alanturing_crypto.png");
  highlight5 = loadImage("images/mind.png");
  highlight6 = loadImage("images/alan_bio.png");
  
}

function setup() {
  createCanvas(350, 500);
  textFont("Helvetica");
}

function draw() {
  background(240); 
  //create title
  textSize(22);
  textStyle(BOLD);
  text(title,textX,35)
  //intro
  textSize(12)
  text("Alan Mathison Turing 🇬🇧",textX,130);
  textStyle(NORMAL);
  text("🕯️6.23.1912 - 6.7.1954",textX,150);
  text("🏫University of Cambridge | Princeton University",textX,165);
  text("👨🏻Father of theoretical CS and AI",textX,180);
  text("💻Inventor of Turing Machine",textX,195);
  //profile pic
  ellipse(45,80,60,60);
  //create highlights
  for(var x=40;x < 340;x+=55){
    ellipse(x,240,40,40);
  }
  //post grind
  line(textX,330,160,330);
  rect(rectx,recty,20,20);
  line(rectx+20/3,recty,rectx+20/3,recty+20);
  line(rectx+40/3,recty,rectx+40/3,recty+20);
  line(rectx,recty+20/3,rectx+20,recty+20/3);
  line(rectx,recty+40/3,rectx+20,recty+40/3);
  //post tag
  line(rectx+170,recty,rectx+177,recty);
  line(rectx+177,recty,rectx+180,recty-5);
  line(rectx+180,recty-5,rectx+183,recty);
  line(rectx+183,recty,rectx+190,recty);
  line(rectx+190,recty,rectx+190,recty+20);
  line(rectx+190,recty+20,rectx+170,recty+20);
  line(rectx+170,recty+20,rectx+170,recty);
  ellipse(rectx+180,recty+7,8,8);
  line(rectx+174,recty+20,rectx+175,recty+14);
  line(rectx+175,recty+14,rectx+185,recty+14);
  line(rectx+185,recty+14,rectx+186,recty+20);
  //followers
  textStyle(BOLD);
  text("8",160,numberY);
  text("5.3K",210,numberY);
  text("100",271,numberY);
  textStyle(NORMAL);
  text("Posts",150,followY);
  text("Followers",197,followY);
  text("Following",260,followY);
  //highlight text
  textSize(10)
  text("Math",28,highlightY);
  text("CS",88,highlightY);
  text("Logic",138,highlightY);
  text("Cryto",193,highlightY);
  text("Philos",248,highlightY);
  text("Bio",307,highlightY);
  
  //images
  profilepic.resize(60,60);
  image(profilepic,15,50);
  post1.resize(175,100);
  image(post1,0,430);
  post2.resize(175,100);
  image(post2,0,331);
  post4.resize(175,100);
  image(post4,175,410);
  post3.resize(175,100);
  image(post3,175,331);
  highlight1.resize(40,40);
  image(highlight1,20,220);
  highlight2.resize(40,40);
  image(highlight2,75,220);
  highlight3.resize(40,40);
  image(highlight3,130,220);
  highlight4.resize(40,40);
  image(highlight4,185,220);
  highlight5.resize(40,40);
  image(highlight5,240,220);
  highlight6.resize(40,40);
  image(highlight6,295,220);
  
  //citation
  //profilepic:https://pixels.com/featured/alan-turing-the-enigma-john-springfield.html      
 //highlight1:https://www.pinterest.com/pin/16395986120249519/?nic_v3=1a5S4eqdd 
  //highlight2:https://en.wikipedia.org/wiki/Bombe              //highlight3:https://twitter.com/springernature/status/1142764305030537216    //highlight4:https://commons.wikimedia.org/wiki/File:Alan_Turing_Statue_at_Bletchley_Park_-_geograph.org.uk_-_1591025.jpg
  //highlight5:https://www.turing.org.uk/scrapbook/test.html   
//highlight6:https://www.sciencedirect.com/science/article/pii/S0315086015000397
  //post1:https://www.turing.org.uk/book/update/part6.html
  //post2:https://kottke.org/18/04/alan-turing-was-an-  excellent-runner
  //post3:https://www.bbc.co.uk/teach/alan-turing-creator-of-modern-computing/zhwp7nb
  //post4:https://www.denverpost.com/2020/02/02/alan-turing-medal-diploma-colorado/
}