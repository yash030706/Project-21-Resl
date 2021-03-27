var bullet;
var thickness;
var wall;
var speed 
var weight
var damage;

function setup() {
  createCanvas(1600,400);
  
  weight = Math.round(random(400,1500));
  speed = Math.round(random(55,90));
  thickness = Math.round(random(52,83));
  bullet = createSprite(100, 200, 50, 50);
  bullet.velocityX = speed
  
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,0,0);
 

}

function draw() {
  background (0);
  
  if(wall.x-bullet.x < (wall.width + bullet.width/2)){
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage > 10){
    bullet.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    bullet.shapeColor = color(0,255,0);
  }
}
drawSprites();
}