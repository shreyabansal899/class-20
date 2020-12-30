var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 50);
  movingrect=createSprite(300, 200, 50, 30);
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(isTouching()){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
     movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}
function isTouching(){
if(movingrect.x-fixedrect.x <= (fixedrect.width/2+movingrect.width/2)&&
  fixedrect.x-movingrect.x <( movingrect.width/2 + fixedrect.width/2)&&
  movingrect.y-fixedrect.y <= (fixedrect.height/2+movingrect.height/2)&&
  fixedrect.y-movingrect.y <( movingrect.height/2 + fixedrect.height/2) )
  {

    return true;
  }
  else
  {
    return false;
  }
}