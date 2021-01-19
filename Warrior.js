class Warrior {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.warriorImg = loadImage("Images/Tank.png")
      World.add(world, this.body);
    }

    move(xPosition,yPosition){
      var pos =this.body.position;
      pos.x=pos.x+ xPosition;
      pos.y=pos.y+ yPosition;
    }


    display(){
      var pos =this.body.position;
      image(this.warriorImg, pos.x, pos.y, this.width, this.height);
    }
  };