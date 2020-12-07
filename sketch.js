const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(580,700);
  engine = Engine.create()
  world = engine.world;

  ground = new Ground(300,680,600,40);
  for(var k = 10; k <= width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,115));
  }
  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,155));
  }
  for(var j = 15; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,195));
  }
  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,235));
  }
  for(var j = 15; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,315));
  }
  for(var j = 15; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,355));
  }

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }
  
  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }

  ground.display();
}