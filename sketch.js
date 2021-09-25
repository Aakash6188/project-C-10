var ship, ship_travelling;
function preload(){
ship_travelling= loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400, 200)
  sea.addImage(seaImg)
  sea.scale=0.3
  ship= createSprite(80, 180, 20, 20);
  ship.addAnimation("running",ship_travelling);
  ship.scale=0.3
}


function draw() {
  background("blue");
  sea.velocityX=-3
  if(sea.x<0){
    sea.x=width/8
  }
  drawSprites();
}