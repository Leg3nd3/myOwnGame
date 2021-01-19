const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground;
var warrior;
var bullet;
var corona;

var randomX;

var bullets=[];
var coronaViruses=[];

function preload() {
    backgroundImg = loadImage("Images/Background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,displayHeight-150);

    //to create engine and world
    engine = Engine.create();
    world = engine.world;

    //to create the ground object
    ground=new Ground(width/2,height-30,width,10);

    //to create the warrior
    warrior=new Warrior(width/2, height-90, 100, 60);

    //to create the bullets
    /*bullet = new Bullet(width/2, 320);*/

     }

function draw(){
    background(backgroundImg);
    Engine.update(engine);


    //to create viruses
    randomX=random(40,width-40);
    if(frameCount%200===0){
        coronaViruses.push(new Corona(randomX,-5));
    }

    //to display ground
    ground.display();

    //to display corona
    Corona.showAllViruses();
    
    if(bullets.length>0){
        Bullet.showBullets();
    }
     //to display the warrior
     warrior.display();  

}

function keyPressed(){

   
    if (keyCode===RIGHT_ARROW) {
       warrior.move(5,0);
       console.log("right arrow pressed")
    }
    else if (keyCode===LEFT_ARROW) {
        warrior.move(-5,0);
        console.log("left arrow pressed")
    }else if(keyCode===32){
       // bullet = new Bullet(width/2, height-80);
        bullets.push(new Bullet(width/2, height-100));

       
   
    }
}
