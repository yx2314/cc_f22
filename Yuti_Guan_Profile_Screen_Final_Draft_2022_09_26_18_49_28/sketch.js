// Yuti Guan Profile Screen Final Draft
  
  // Declare images
  var img
  var img2
  var img3

function preload(){
  img = loadImage ("image/AlanTuring.jpg");
  img2 = loadImage ("image/Queen.jpg");
  img3 = loadImage ("image/Alan50.jpg");
}

function setup() {
  createCanvas(300, 400);
  
  // Basic info
  var name;
  var Birthday;
  var ID;
  var signature;

  // Post, followers, following
  var Postx;
  var Followersx;
  var Followingx;
  var Posty;
  
  // Educations
  var edu1;
  var edu2;
  
  // Text sizes
  var Size1;
  var Size2;
  var Size3;
  
  // follow, message
  var followX;
  var followY;
  var followW;
  var followH;
  var messageD;

  // seperation
  var sep1;
  var sep2;
  var sepX; 
  var sepY; 
    
  // posts
  var post1;
  var post2;
  var post1X;
  var post1Y;
  var post2Y;
  var date1;
  var date2;
  var dateX;
  var date1Y;
  var date2Y;
}

function draw() {
  background(240,248,255);
  
  // image1
  img.resize(70,70);
  image(img,115,15);
  // citation
  console.log('Encyclopædia Britannica. Alan Turing. https://www.britannica.com/biography/Alan-Turing#/media/1/609739/224086. Accessed 26 Sept 2022.');
  
  // image2 
  img2.resize(50,50);
  image(img2,110,250);
  // citation 
  console.log('BBC News. Queen Elizabeth II. 2022, https://www.bbc.com/news/uk-61585886. Accessed 26 Sept 2022.');
  
  // image3
  img3.resize(50,50);
  image(img3,110,320);
  // citation
  console.log('Treisman, Rachel. New U.K. Currency Honors Alan Turing, Pioneering Computer Scientist And Code-Breaker. 2022, https://www.npr.org/2021/03/25/981242121/new-u-k-currency-honors-alan-turing-pioneering-computer-scientist-and-code-break. Accessed 26 Sept 2022.');
  
  // shape: follow & message
  followX = 180;
  followY = 90;
  followW = 50;
  followH = 15;
  fill(240);
  rect(followX,followY,followW,followH);
  
  fill(190);
  messageD = 20;
  ellipse(followX + 70,followY + 7.5,messageD,messageD);
  
  // shape: main page & diagram
  fill(240);
  rect(0,200,width/2,30);
  fill(190);
  rect(150,200,width/2,30);
  
  // text: basic info
  textFont('Monaco');
  fill(50);
  
  Size1 = 14;
  name = 'Alan Turing';
  textSize(Size1);
  text(name,10,100);
 
  Size2 = 10;
  Size3 = 7.45
  textSize(Size3);
  ID = '@AlanT1912';
  text(ID,10,115);
  Birthday = 'June 23, 1912';
  text(Birthday,10,130);
  signature = 'There are plenty needs to be done! 💻 🌈';
  text(signature,10,175);
  
  // text: education
  edu1 = "@University of Cambridge 1934";
  text(edu1,10,145);
  edu2 = "@Prinston University 1938";
  text(edu2,10,160);
  
  // text: post, followers, following
  textSize(Size2);
  Postx = 10.5;
  Followersx = 55.5;
  Followingx = 145.5;
  Posty = 190;
  
  text('Post 2',Postx,Posty);
  text('Followers 777K',Followersx,Posty);
  text('Following 3',Followingx,Posty);
  
  // text: follow & message
  textSize(Size3);
  text('Follow +',187,100);
  text('✉️',followX + 65,followY + 9.5);
  
  // text: main page & diagram
  textSize(Size2);
  sep1 = 'Main Page';
  sepX = 50;
  sepY = 218.5;
  
  text(sep1,sepX,sepY);
  
  sep2 = 'Diagram';
  text(sep2,sepX + 152,sepY);
  
  // text: posts
  textSize(Size3);
  post1 = 'RIP🙏 Queen Elizabeth II';
  post2 = 'My face is on £50 😁😁!';
  post1X = 185.5
  post1Y = 280
  post2Y = 350
  date1 = 'Sep 08, 2022';
  date2 = 'June 23, 2021';
  dateX = 20.5
  date1Y = 280
  date2Y = 350
  
  text(date1,dateX,date1Y);
  text(date2,dateX,date2Y);
  text(post1,post1X,post1Y);
  text(post2,post1X,post2Y);
  
}
  
  


