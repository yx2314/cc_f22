let b= 1912;// born year
let d=1954.6
let s= 100;//starting position
let a="Alan Turing";

var img; //assign image variable



function preload(){
img =loadImage("images/AlanTuring_HeadShot.jpeg");
//check if it works
  console.log("image good");
}

function setup() {
  createCanvas(600,400);
  background(240,248,255);
  textFont('Georgia');
  textWrap(WORD);
  
//cite the image
//https://www.nytimes.com/2019/06/05/obituaries/alan-turing-overlooked.html
  console.log("Godrey Argent Studio.Alan Turing in 1951.2019, The Royal Society.");
  
}

function draw() {
  //text Alan Turing setup
  textSize(30);
  textStyle(BOLD);
  text(a, s,100);
  
  
  //text description setup
  textStyle(NORMAL);
  textSize(20);
  text("· Born", s,140)
  text(b,155,140);
  text("· Died", s, 160)
  text(d,155,160)
  text("· The father of modern computer science", s, 170,230);
  text("· Famous for developing first modern computers", s, 220,220);
 
  //put the image
  img.resize(200,250);
  image(img,320,60);

}