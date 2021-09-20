
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var commander, alien, mAlien, asteroid, Agroup;

var c_img, laser, l_grp, atd_img, MALgroup, ma_img, score = 0, obs, gs = "PLAY";

var a_img, aGrp, blocks, bGrp, cG, start, si;
 
function preload()
{
  c_img = loadImage("images/gship.png");
  atd_img = loadImage("images/asteroidS.png");
  ma_img = loadImage("images/mship.png"); 
  a_img = loadImage("images/aship2.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    commander = createSprite(400,540,10,10);
    commander.addImage(c_img);
    commander.scale = 0.6;
    

    cG = createGroup();

    cG.add(commander);
    Agroup = createGroup();
    MALgroup = createGroup();
    l_grp = createGroup();
    aGrp = createGroup();
    bGrp = createGroup();

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

 

  if(gs==="PLAY"){
  commander.x = mouseX;
  fill("red");
  text("SCORE: "+score,700,20);
  lasers();
  asteroids();
  if(Agroup.isTouching(l_grp)){
    Agroup.destroyEach();
    score+=1
  }
  
  malienSpawn();
  alienSpawn();
  if(MALgroup.isTouching(l_grp)){
    MALgroup.destroyEach();
    score+=15;
  }if(aGrp.isTouching(l_grp)){
    aGrp.destroyEach();
    score+=5;
  }
  if(score>= 20){
    background("grey");
    fill("red");
    text("SCORE: "+score,700,20);
  }
  if(score>= 50){
    background("yellow");
    fill("red");
    text("SCORE: "+score,700,20);
  }
  if(score>= 70){
    background("darkgreen");
    fill("red");
    text("SCORE: "+score,700,20);
  }
  if(score>= 200){
    background("lightgreen");
    fill("red");
    text("SCORE: "+score,700,20);
  }
  if(score>= 350){
    background("lime");
    fill("red");
    text("SCORE: "+score,700,20);
  }
  if(score>= 500){
    background("purple");
    fill("red");
    text("SCORE: "+score,700,20);
  }
  if(score>= 800){
    background("magenta");
    fill("white");
    text("SCORE: "+score,700,20);
  }
  if(score>= 1000){
    background("lightpink");
    fill("red");
    stroke(4);
    text("SCORE: "+score,670,20);
  }
  if(score>= 1500){
    background("crimson");
    fill("white");
    text("SCORE: "+score,670,20);
  }
  if(score>= 2000){
    background("orange");
    fill("white");
    text("SCORE: "+score,670,20);
  }
  if(score>= 5000){
    background("maroon");
    fill("white");
    stroke(4);
    text("SCORE: "+score,670,20);
    
  }

  if(cG.isTouching(Agroup)){
    gs = "END";
  }
  if(cG.isTouching(MALgroup)){
    gs = "END";
  }
  if(cG.isTouching(aGrp)){
    gs = "END";
  }
  
}
  if(gs === "END"){
    background("black");
    textSize(60);
    fill("grey")
    text("GAME OVER!", 300,300)
  }

  
  drawSprites();
 
}
function lasers(){
  if(keyWentDown("space")){
    laser = createSprite(commander.x,commander.y,5,50);
    laser.shapeColor = "red";
    laser.velocityY = -10;
    laser.lifetime = 100;
    
    
    l_grp.add(laser);
  }
}
function asteroids(){
  if(frameCount%150 === 0){
    asteroid = createSprite(random(50,750),-10,10,10);
    asteroid.addImage(atd_img);
    asteroid.scale = 0.5;
    asteroid.velocityY = 10;
    asteroid.debug = true;
    asteroid.setCollider("rectangle",0,10,10,10)
    
    Agroup.add(asteroid);
  }
}
function malienSpawn(){
  if(frameCount%500 === 0 ){
    mAlien = createSprite(random(50,750),-10,10,10);
    mAlien.addImage(ma_img);
    mAlien.scale = 0.5;
    mAlien.velocityY = 30;

    if(mAlien.y>600){
      score = score-10;
    }
    mAlien.setCollider("rectangle",0,10,10,10)
    MALgroup.add(mAlien);
  }
 
}
function alienSpawn(){
  if(frameCount%100 === 0 ){
    alien = createSprite(random(50,750),-10,10,10);
    alien.addImage(a_img);
    alien.scale = 0.5;
    alien.velocityY = 10;
    
    if(alien.y>600){
      score = score-5
    }
    alien.setCollider("rectangle",0,10,10,10)
    aGrp.add(alien);
  }
 
}


