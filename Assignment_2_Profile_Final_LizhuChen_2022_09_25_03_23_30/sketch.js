let name = "Name: Adam Smith";
let age = "Age: "
let age_num = 67;
let master = "Master Works: "
let master1 = "    The Theory of Moral Sentiments";
let master2 = "    The Wealth of Nations";
let education = "Education:";
let education1 = "     University of Glasgow";
let education2 = "    Balliol College";
let education3 = "    Oxford";
let status1 = "Status: Economist, ";
let status2 = "Philosopher";
let zodiac = "Zoidac: Gemini";
let achieve = "Achievement: ";
let achieve1 = "    The Father of Economics";
let effect = "Effect: ";
let effect1 = "    US GDP in 2021 was $";
let effect_float1 = 22.9;
let effect2 = " trillion, accounting";
let effect3 = "for 23.93 percent of the global total. Among them, ";
let effect4 = "manufacturing accounted for 27.44 percent of GDP";
let effect5 = "in all industries. This proves that the labor theory of "
let effect6 = "value advocated by Adam Smith is still having an ";
let effect7 = "impact on the American economy society today.";
let x1 = 150;
let y = 30;

var img;
function preload(){
  img = loadImage("Images/Adam.png");  
  //Check if this works
  console.log("Image loaded."); 
  //citation
  //https://en.wikipedia.org/wiki/Adam_Smith
}

  // effects
function setup() {
 
  createCanvas(500, 510);
  imageMode(CENTER);
  
}

function draw() {
  background(220);
  
  img.resize(140,140);
  image(img,80,90);
  textSize(15);
  textFont("sans-serif", 15);
  text(name, x1, y+2);
  text(age+age_num, x1, y+20 );
  text(master, x1, y+40);
  text(master1, x1, y+60);
  text(master2, x1, y+80);
  text(education, x1+1, y+100);
  text(education1, x1-3, y+120);
  text(education2, x1+2, y+140);
  text(education3, x1+2, y+160);
  text(status1+status2, x1+2, y+180);
  text(zodiac, x1+2, y+200);
  text(achieve, x1+2, y+220);
  text(achieve1, x1+2, y+240);
  text(effect, x1,y+260);
  text(effect1+effect_float1+effect2,x1+2, y+280);
  text(effect3,x1,y+300);
  text(effect4,x1,y+320);
  text(effect5,x1,y+340);
  text(effect6,x1,y+360);
  text(effect7,x1,y+380);
  
  textFont("Bungee Spice");
  textSize(20);
  text("Profile of Adam Smith",10,17);
  
  
  
  
  
  
  
  
  
}