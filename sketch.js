var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 200, 50, 70);
  movingrect = createSprite(100,400,100,20);
}

function draw() {
 
  background(0);
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

 if( movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 
  &&  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2
  ){
  movingrect.shapeColor = "lime";
  fixedrect.shapeColor = "lime";
}
 else{
   movingrect.shapeColor = "blue";
   fixedrect.shapeColor = "blue";
 } 
  
   drawSprites();
}