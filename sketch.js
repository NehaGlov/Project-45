var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacles1,obstacles2,obstacles3,obstacles4,obstacles5
var gameoverImg,restartImg,jumpsound,diesound

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obstacles1 = loadImage("assets/obsTop1.png");
obstacles2 = loadImage("assets/obsTop2.png");
obstacles3 = loadImage("assets/obsBottom1.png");
obstacles4 = loadImage("assets/obsBottom2.png");
obstacles5 = loadImage("assets/obsBottom3.png");
diesound = loadSound("assets/die.mp3");
jumpsound = loadSound("assets/jump.mp3");
restartImg = loadImage("assets/restart.png");
gameoverImg = loadImage("assets/gameOver.png");
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   spawnobstaclestop();
   bar();
        drawSprites();
        
}
function spawnobstaclestop(){
  if(World.frameCount%60===0){
    obstacletop = createSprite(400,50,40,50)
    obstacletop.scale = 0.1;
    obstacletop.velocityX = -4
    obstacletop.y = Math.round(random(10,100))
    var rand = Math.round(random(1,2))
    switch(rand){
      case 1:obstacletop.addImage(obstacles1)
      break
      case 2:obstacletop.addImage(obstacles2)
      break
      default:break
    }
    obstacletop.lifetime = 100
    balloon.depth = balloon.depth+1
  }
}
function bar(){
if(World.frameCount%60===0){
  var bar = createSprite(400,200,10,800)
  bar.velocityX = -6
  bar.lifetime = 100
  bar.depth=balloon.depth
  bar.visible = false;
}

}