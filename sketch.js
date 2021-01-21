var bullet,wall,thickness;
var speed,weight;
var bT;
function setup() {
  createCanvas(1350,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bT = random(10,100);

  bullet = createSprite(50,200,bT,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  if (hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }


    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}