// Annabella Lee
var title = "fun app;)";//String
var photo;
var post;
var verif;

var xname;
var yname;

var boxht = 20;//Integer/floats
var boxwid = 60;

let name = ["Sergey Brin", "Cofounder of Alphabet","Los Altos, CA"];
let infor = ["Marital Status:","Separated","Birthday:","August 21, 1973 (age 49 years)","Height:", "5′8″","Education:", "@Stanford"];

var following = 15;
var follower = 354.5;//floats

var xfollow = 100;//Integer
var yfollow = 250;
let follow = ["Following", "Followers","Follow+"];

var inforlocat = 62.5//floats

function preload() {
  photo = loadImage('images/profile.png');
  // The website didn't cite the photo, but the digital image of article citation is here:
  //Hartmans, Avery. “Inside the Wild and Successful Life of Sergey Brin, Who Helped Create Google over 20 Years Ago and Is Now Worth $97 Billion.” Yahoo! Movies, Business Insider, 22 Apr. 2022, https://uk.movies.yahoo.com/movies/inside-wild-successful-life-sergey-211050958.html?guce_referrer=aHR0cHM6Ly9sZW5zLmdvb2dsZS5jb20v&amp;guce_referrer_sig=AQAAAN7iLsv3H3KqylAWVUnbYK9CqloVVySC7F3kxhc4rjc4aEVYbbGL17PdF5SG7wRb58Us1I3x5pvpJq-Ggb0v-9lUMosC3oasw49q6qtsPZC8--Y0DHwTFW9HErmXaATW6--xTf8NDoi30dToSRvxuNPp30uUT_APr6IkqBunCx1R. Accessed 23 Sept. 2022. 
  
  post = loadImage('images/post.png');
  //Google's Sergey Brin Is Totally Obsessed With High-Adrenaline Exercise. 29 Aug. 2014.
  //Repost by business insider at this article -->
  //Stone, Madeline. “Google's Sergey Brin Is Totally Obsessed With High-Adrenaline Exercise.” Business Insider, Insider Inc, 29 Aug. 2014, https://www.businessinsider.com/sergey-brin-chooses-high-adrenaline-exercise-2014-8. Accessed 23 Sept. 2022. 
  
  verif = loadImage('images/verified.png');
  //Parvin. “Instagram Verified Badge Icon. VectorIllustration.” Adobe Stock, https://stock.adobe.com/images/instagram-verified-badge-icon-vectorillustration/350402828. Accessed 23 Sept. 2022.
  
  
}  
  
function setup() {
  createCanvas(400, 600);
  
}

function draw() {
  background(255, 190, 127);
  
  //top yellow
  fill(255,252,201);
  rect(0,0,400,30);//top
  
  //title fun app
  fill(0);
  textFont('Pacifico');
  textAlign(CENTER);
  textStyle(NORMAL);
  text(title,200,20);//app
  
  //white box for text
  noStroke();
  fill(250);
  rect(50,40,300,550);
  
  //profile
  image(photo,150, 50, 100, 100); //profile photo
  
  //location for name
  xname = 400/2;
  yname = 600/2;
  
  //name
  fill(0);//255, 152, 206
  textSize(20);
  textStyle(BOLD);
  textFont('Helvetica');
  textWrap(WORD);
  textAlign(CENTER);
  text(name[0],xname,yname-125);
  
  //profile description and location
  fill(0);
  textSize(13);
  textStyle(NORMAL);
  text(name[1],xname,yname-105);//description 
  text(name[2],xname,yname-90);//location
  
  //verified label
  imageMode(CENTER);
  image(verif,200, 225, 30, 26); 
  
  imageMode(CORNER);
  
  //follow sewction
  fill(0);//follower
  textAlign(CENTER);
  text(follow[0],xfollow,yfollow);//floats
  text(follow[1],xfollow+100,yfollow);

  fill(255, 192, 203);//functions pink box
  rect(270,235,boxwid,boxht);//Integer/floats
  rect(270,258,boxwid,boxht);
  
  fill(0);
  textFont('Pacifico'); //functions
  text(follow[2],xfollow+200,yfollow);
  text("Chat now",xfollow+200,yfollow+23);
  
  //number for follow section
  textFont('Helvetica'); //numbers
  text(following,xfollow,yfollow+15);
  text(follower,xfollow+100,yfollow+15);//floats
  text("k",xfollow+120,yfollow+15);//floats
  
  //information
  textAlign(LEFT);
  //bday
  text(infor[2],inforlocat,yfollow+50);
  text(infor[3],115,yfollow+50);
  //marital
  text(infor[0],inforlocat,yfollow+70);
  text(infor[1],145,yfollow+70);
  //ht
  text(infor[4],inforlocat,yfollow+90);
  text(infor[5],105,yfollow+90);
  //education
  text(infor[6],inforlocat,yfollow+110);
  fill(76, 139, 245);
  text(infor[7],125,yfollow+110);
  
  //post section
  fill(0);
  textAlign(LEFT);
  textStyle(BOLD);
  text("Recent Photo",inforlocat,yfollow+130);
  
  textStyle(NORMAL);
  fill(76, 139, 245);
  text("more>>",150,yfollow+130);
  
  //post
  image(post,115, 390, 170, 170);//post
  fill(0);
  textStyle(BOLD);
  text("sergeybrin:",115,570);//post caption
  textStyle(NORMAL);
  text("best day",190,570);

  
}

