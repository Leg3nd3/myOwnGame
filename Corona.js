class Corona {
    constructor(x,y) {
      var options = {
          isStatic: false,
          angularSpeed:1.5,
          friction:0.01
      }
      this.body = Bodies.rectangle(x,y,60,60,options);
      this.width = 60;
      this.height = 60;
      this.coronaImage=loadImage("Images/Corona.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body!=undefined){
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.coronaImage,0,0, this.width, this.height);
        pop();
      }

    }

    static showAllViruses(){
      for (let index = 0; index < coronaViruses.length; index++) {
        const virus = coronaViruses[index];
        if(virus.body.position.y>height){
            virus=undefined;          
        }else{
          virus.display();
        }
        
      }
    }
  }