
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var scores
var bananaGroup, obstaclesGroup
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  //createCanvas(600, 600) 
  
   monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,390,900,10)
  ground.velocityX = -6
  ground.x = ground.width/2
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
}

  




function draw() {
  background("lightblue")

 monkey.collide(ground);  
 
 spawnObstacles();
 spawnBanana();
 
  if(ground.x<0) { 
  ground.x=ground.width/2; }

  if(keyDown("space")){
  monkey.velocityY = -12
}
  
monkey.velocityY = monkey.velocityY + 0.8


  if(monkey.isTouching(obstaclesGroup)){
    monkey.velocityX = 0;
    monkey.velocityY = 0;
    ground.velocityX = 0;
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  
  survivalTime = Math.ceil(frameCount/frameRate())
  textSize(20)
  fill("orange")
  text("Survival Time: "+survivalTime, 150,50)

  if(keyDown("space")&& monkey.y >=540 ){
     monkey.velocityY = -12;}
  
  
  
  drawSprites();
}

function spawnBanana(){
  if (frameCount% 60 === 0) {
    var banana = createSprite(600, 345, 20, 20);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200
    bananaGroup.add(banana)
    
  }
}

function spawnObstacles(){
  if (frameCount% 120 === 0) {
    var obstacle = createSprite(600, 360, 20, 20);
   obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200
    obstaclesGroup.add(obstacle)
}

}




