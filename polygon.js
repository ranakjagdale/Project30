class Polygon {

    constructor(x,y){
      var  options= {
          isStatic: false,
          restitution : 11.3,
          friction : 0.2,
          density : 11.2,
      }
           
      this.body = Bodies.rectangle(x, y, 40, 40);      
      World.add(world,this.body);
     
    }

    display(){
       var pos = this.body.position; 
       
       rectMode(CENTER);
       fill("yellow");
       rect(pos.x, pos.y,40,40);
      // fill("yellow");  
       //ellipseMode(RADIUS);
       //ellipse(pos.x, pos.y, 35,35);
      // imageMode(CENTER);
      // image(this.image, pos.x, pos.y, this.r, this.r);
    }


  }
  