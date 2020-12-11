
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let balls = [];
let ground;
let g1 = [];
let g2;
let g3;
function preload()
{
	
}

function setup() {
	createCanvas(480, 750);
    let options = {
		restitution:0.9,
		isStatic:true
	}

	engine = Engine.create();
	world = engine.world;
	for(let i = 60;i<440;i= i+50){
		balls.push(new Ball(i,100,10,options,'lightSeaGreen'))
	}
	for(let i = 20;i<400;i= i+50){
		balls.push(new Ball(i,150,10,options,"deepPink"))
	}
	for(let i = 60;i<440;i= i+50){
		balls.push(new Ball(i,200,10,options,"steelblue"))
	}
	for(let i = 20;i<400;i= i+50){
		balls.push(new Ball(i,250,10,options,"tomato"))
	}
	for(let i = 60;i<440;i= i+50){
		balls.push(new Ball(i,300,10,options,"salmon"))
	}
	for(let i = 20;i<400;i= i+50){
		balls.push(new Ball(i,350,10,options,"springgreen"))
	}
	for(let i = 60;i<440;i= i+50){
		balls.push(new Ball(i,400,10,options,"palevioletred"))
	}
	for(let i = 20;i<480;i = i+100){
		g1.push(new Ground(i,630,20,200));
	}
	//Create the Bodies Here.
	ground = new Ground(width/2,height-10,width,20);

	Engine.run(engine);
	//mousePressed();
}
// function mousePressed()
// {
// 	let options = {
// 		restitution:0.9,
		
// 	  }
// 	balls.push(new Ball(mouseX,mouseY,10,options,"blue"));
// }

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  let options = {
	restitution:0.9,
	//if(keyWentDown()){
		//timeScale:2
	//}
  }
  
  noStroke();
  textSize(20);
  fill("s");
  text("click to play",width/2.5,25);
  for(let Gs of g1){
	Gs.display();
  }
  if(mouseDown(LEFT)){
	balls.push(new Ball(mouseX,25,10,options,"blue"));
  }
  for(let ball of balls){
	ball.display();
	ball.fly();
	ball.update();
	if(keyDown("space")){
	Matter.Body.update(ball.body,0,0, 0.2)
	}
  }
  drawSprites();
 
}



