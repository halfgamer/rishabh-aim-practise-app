var manimg,man,bulletgroup,gunsound,aimer,aimerimg;
var bullcount=0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	manimg=loadImage("aiming.jpg");
	bullimg = loadImage("images-removebg-preview.png");
	gunsound = loadSound("gunshot.mp3");
  aimerimg= loadImage("aimer.png");
}

function setup() {
	createCanvas(1500, 700);

man = createSprite(150,350,20,20);
  man.addImage(manimg);
  man.scale=0.46
  aimer=createSprite(700,500,40,40);
  aimer.addImage(aimerimg);
  bulletgroup=new Group();
timecounter=0
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  
  
  if (keyWentUp("space")) {
    bullcount=bullcount+1
    
    console.log(bullcount)
 
  }
  if (bullcount===1 || bullcount%7===0 && bullcount!=0 && keyWentUp("space")){
    generatebullet();
    bullet.x = man.x +130.6;
    bullet.y = man.y-100;
    angle = (180 / Math.PI) * Math.atan2(mouseY - bullet.y, mouseX - bullet.x);
    bullet.setSpeedAndDirection(120, angle);
    bullet.rotation = angle;
  }
  
  drawSprites();
 
}
function generatebullet() {
  
	bullet = createSprite(200, 200, 20, 20);
	bullet.addImage(bullimg);
	bullet.scale = 0.2;
	bullet.lifetime = innerWidth / 3;
	bulletgroup.add(bullet);
  
  
	
    
	// bullet.debug=true;
	bullet.setCollider("rectangle", 0, 0, 37, 20);
  
  
	
  }


