var bananaImg, bananaGroup;
var obstaclesImg, obstaclesGroup;
var scene, backImg, score, ground;
var player, monkey;
var gameState = "play";

function preload() {

  backImg = loadImage("jungle.jpg");

  player = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  obstaclesImg = loadImage("stone.png");
  bananaImg = loadImage("banana.png");
}

function setup() {
  createCanvas(500, 400);

  scene = createSprite(0, 20, 400, 400);
  scene.addImage(backImg);
  scene.x = scene.width / 2;

  monkey = createSprite(40, 280, 20, 20);
  monkey.addAnimation("Player", player);
  monkey.scale = 0.1;

  ground = createSprite(200, 320, 600, 5);
  ground.visible = false;

  obstaclesGroup = new Group();
  bananaGroup = new Group();

  score = 0;
}

function draw() {
  background("black");

  monkey.collide(ground);

  if(gameState === "play"){
   
  if (keyDown("space") && monkey.y >= 250) {
    monkey.velocityY = -17;
  }
  //console.log(monkey.y);
  monkey.velocityY = monkey.velocityY + 0.9;

  

  

  if (obstaclesGroup.isTouching(monkey)) {
    obstaclesGroup.destroyEach();
    gameState = "end";
    score = 0;
  }

  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    score = score + 2;
  }
  
  bananaa();
  stonecom(); 


  drawSprites();
  stroke("white");
  textSize(22);
  fill("white");
  text("Score : " + score, 300, 80)
  }


  if(gameState === "end"){
    text("Game Over",250, 200);
  }
}

function stonecom(){
if (frameCount % 110 === 0) {
    var stone = createSprite(500, 280, 20, 20);
    stone.addImage(obstaclesImg);
    stone.scale = 0.2;
    stone.velocityX = -8;
    stone.lifetime = 64;
    obstaclesGroup.add(stone);
  
  switch (score) {
    case 10:
      monkey.scale = 0.2;
      break;
    case 20:
      monkey.scale = 0.4;
      break;
    case 30:
      monkey.scale = 0.6;
      break;
    case 40:
      monkey.scale = 0.8;
      break;
    case 50:
      monkey.scale = 1;
      break;
    default:
      break;
  }
  
  }
}

function bananaa(){  
if (frameCount % 80 === 0) {
    var banana = createSprite(500, random(110, 190), 20, 20);
    banana.addImage(bananaImg);
    banana.scale = 0.06;
    banana.velocityX = -8;
    banana.lifetime = 64;
    bananaGroup.add(banana);
  }
}

