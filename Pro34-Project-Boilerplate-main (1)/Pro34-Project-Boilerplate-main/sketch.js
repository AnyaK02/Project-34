
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hoop,hoopImg
var ball,ballImg
var bg_img

function preload(){
  bg_img = loadImage('background.png')
  hoopImg = loadImage('hoop.png')
  ballImg = loadImage('ball.png')
}

function setup() {
  createCanvas(400,400);

  ball = createSprite(200,350,100,100)
  ball.scale = 0.2

  hoop = createSprite(200,250,100,100)
  hoop.scale = 0.2


  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  if(hoop.x = 400){
    hoop.x = 200
  }

  if(keyPressed (DOWN))
  
}



