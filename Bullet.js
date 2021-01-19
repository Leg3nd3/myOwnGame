class Bullet{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.1,
            'isStatic':false          
          }
          
          this.BodyLeft = Bodies.circle(x-10, y, 5, options);
          this.BodyRight = Bodies.circle(x+10, y, 5, options);
          this.radius = 5;
          World.add(world, this.BodyLeft);
          World.add(world, this.BodyRight);
    }
   
    /*updateY(){
      if(this.Body.position.y > height){
        Matter.Body.setPosition(this.Body,{x:random(0, 650), y:random(0, 650)});
      }
    }*/
  
    static showBullets(){
      strokeWeight(1);
      stroke("red");
      fill("red");

      for(var index=0;index<bullets.length;index++){
        var bullet=bullets[index];

        if(bullet.BodyLeft.position.y>height || bullet.BodyRight.position.y>height){
          bullet.BodyLeft=undefined;
          bullet.BodyRight=undefined;
        }else if(bullet.BodyLeft!=undefined || bullet.BodyRight!=undefined){      
          ellipseMode(CENTER);
  
          ellipse(bullet.BodyLeft.position.x, bullet.BodyLeft.position.y, bullet.radius*2, bullet.radius*2);
          ellipse(bullet.BodyRight.position.x, bullet.BodyRight.position.y, bullet.radius*2, bullet.radius*2);
  
          //to move the bullets vertivally up when fired
          bullet.BodyLeft.position.y=bullet.BodyLeft.position.y-0.4;
          bullet.BodyRight.position.y=bullet.BodyRight.position.y-0.4;

          //for loop on virus array..inside if leftand right touching any virus
        }

      }//end of for loop


    }//end of showBullets function
  }//end of class