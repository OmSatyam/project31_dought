const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain;

function preload(){
    
}

function setup(){
   createCanvas(500,1000);
  engine = Engine.create();
  world = engine.world;

}

function draw(){
    background(0);

    for (var i=0; i < rain; i++){
      rain.push(new rain(random(0,400), random(0,400)))
    }


    if(this.Drop.position.y > height){
    Matter.Body.setPosition(this.drop(x:random{0,400},y:random{0,400}))
    }
}   

