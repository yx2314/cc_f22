var img;

function preload() {
  img=loadImage("Image/Pic2.png");
}

function setup() {
  createCanvas(414,650);
}


function draw() {
  background(254,254,254);
  noStroke();
  
  //where the picture will take place
  image(img,0,0);
  fill(255);
  rect(0,330,414,650);
  
  //person icon
  fill(98,192,195);
  let x=60;
  var y=600.5;
  ellipse(x,y,20);
  fill(81,147,179);
  arc(x,y+20,30,20,radians(180),radians(0));
  
  //add sign 
  fill(98,192,195);
  var iconx=360
  var icony=330
  ellipse(iconx,icony,50);
  fill(255);
  textSize(38);
  var addsign= "+"
  text(addsign,iconx-11,icony+13);
  
  //decoration
  fill(81,147,179);
  ellipse(x+350,640,150);
  fill(98,192,195);
  ellipse(x+280,640,150);
  fill(81,147,179);
  ellipse(x+210,640,150);
  fill(98,192,195);
  ellipse(x+140,640,150);
  fill(81,147,179);
  ellipse(x+70,640,150);
  fill(98,192,195);
  ellipse(x,640,150);
  fill(81,147,179);
  ellipse(x-70,640,150);
 
  
  //Name&dates
  fill(60);
  textSize(40);
  textFont("Arial");
  text("Marvin Minsky",x-40,icony+50);
  fill(81,147,179);
  textSize(20);
  text("1927/8/9 ~ 2016/1/24", x-40,icony+80);
  
  //intro of the person
  fill(100);
  textSize(15);
  textWrap(WORD,410,650);
  text('Marvin Minsky -- one of the fathers of computer science and cofounder of the Artificial Intelligence Laboratory at MIT -- gives a revolutionary answer to the age-old question: "How does the mind work?" Minsky brilliantly portrays the mind as a "society" of tiny components that are themselves mindless.',x-36, icony+105, 350);
  
  //citations
  console.log("MLA Citation");
  console.log("Personal Info: Minsky, Marvin. Society of mind. Simon and Schuster, 1988.");
  console.log("Picture: Patsy Sampson  |  Department of Electrical Engineering and Computer Science. “Marvin Minsky Selected for Dan David Foundation Prize.” MIT News | Massachusetts Institute of Technology, https://news.mit.edu/2014/marvin-minsky-selected-for-dan-david-foundation-prize.");
  
  
  
  
  
  
}