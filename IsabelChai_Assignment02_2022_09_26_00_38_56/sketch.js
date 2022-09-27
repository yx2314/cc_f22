let headImg;
let diameter, diameter1;
let w, h;
let fontRegular, fontBold;
let post, follower, follwing;
let img1,img2,img3,img4;


function preload(){
  
  //load font
  fontRegular = loadFont("regular.ttf");
  fontBold = loadFont("bold.ttf");
  // load headImg
  headImg = loadImage("alan.png");
  img1 = loadImage("alan1.jpeg");
  img2 = loadImage("alan2.jpeg");
  img3 = loadImage("alan3.png");
  img4 = loadImage("alan4.jpeg");
}

function setup() {
  createCanvas(500, 800);
  post = int(4);
  follower = int(500);
  following = int(50);
  diameter = float(PI); 
  diameter1 = float(PI+HALF_PI);
  w = int(10);
  h = int(10);
}

function draw() {
  background(255);
  fill(0);
  noStroke();
  //id
  textFont(fontBold);
  textSize(15);
  text('alanTuring0623',width/3+50,60);
  
  //draw the image 'headImg' on the top left corner
  image(headImg,45 ,70, 23.81*5,32.42*5);
  
  //text 'ID', 'name','education','job',etc.
  textFont(fontBold);
  textWrap(WORD);
  textSize(10);
  text("Alan Turing", 65, 175);
  textFont(fontRegular);
  text("Cambridge BA,MA",65,187);
  text("Princeton PhD",65,199);
  text("Mathmatician / Computer Scientist", 65, 211);
  text("Inventor of Turing's Proof, Turing Pattern, Turing Machine, Turing Test, etc.", 65, 223);
  
  //right part--follower
  textFont(fontBold);
  textSize(13);
  text(post,230,110);
  text(follower+"M", 275,110);
  text(following, 350,110);
  textFont(fontRegular);
  textSize(10);
  text("Posts",225,122);
  text("Followers",272,122);
  text("Following",340,122);
  
  //button "follow" + "message"
  fill(43, 156, 255);
  noStroke();
  rect(65,240,175,20);
  fill(240);
  rect(247,240,175,20);
  rect(430,240,20,20);
  fill(255);
  textFont(fontBold);
  textSize(12);
  text("Follow",130,253);
  fill(0);
  text("Message",300,253);
  stroke(255);
  fill(0,0);
  strokeWeight(3);
  arc(69,244, w,h,diameter, diameter1);
  arc(69,256,w,h,diameter1-PI,diameter);
  arc(250,244, w,h,diameter, diameter1);
  arc(250,256,w,h,diameter1-PI,diameter);
  arc(236,244, w,h,diameter1, 0);
  arc(236,256,w,h,0,diameter1-PI);
  arc(418,244, w,h,diameter1, 0);
  arc(418,256,w,h,0,diameter1-PI);
  
  //navigation bar
  stroke(225);
  strokeWeight(1);
  line(65,280,450,280);
  
  //gallery
  image(img1, 65, 300, 125, 125);
  image(img2, 195, 300, 125, 125);
  image(img3, 325, 300, 125, 125);
  image(img4, 65, 430, 125, 125);
  
  
  //citation
  line(65,580,450,580);
  fill(0);
  noStroke();
  textSize(8);
  textFont(fontRegular);
  text("Image Citations:", 65,600);
  text("1.“Alan Turing in His Younger Years.” AUTODESK, https://www.autodesk.com/products/eagle/blog/alan-turing-cracking-code-modern-computing/.",65,610,450);
  text("2.“Alan Turing, Aged 15, at Westcott House, Sherborne School.” BBC, https://www.bbc.co.uk/teach/alan-turing-creator-of-modern-computing/zhwp7nb.",65,630,450);
  text("3.“The Manchester Mark I at Manchester University’s Computer Machine Laboratory.” IEEE Spectrum, https://spectrum.ieee.org/alan-turing-how-his-universal-machine-became-a-musical-instrument.",65,650,450);
  text("4. “Alan_Turing_Aged_16.” Wikipedia, https://en.wikipedia.org/wiki/Alan_Turing#/media/File:Alan_Turing_Aged_16.jpg.",65,670,450);

}