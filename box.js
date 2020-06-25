class Box extends BaseClass   {
  constructor(x,y, width, height, angle){
    super(x,y,25,35);
    this.visibility = 255;
  }

  display() {          
         if(this.body.speed<3){
            super.display();
         }
         else{
           
           World.remove(world, this.body);
           this.visibility = this.visibility-5;
           tint(255, this.visibility);
         }
         
  }



    // constructor(x, y, width, height, angle) {
    //     var options = {
    //         'restitution':0.2,
    //         'friction':0.0,
    //         'density':0.2,
    //         'visibility':0.5,
    //     }
    //     this.body = Bodies.rectangle(x, y, width, height, options);
    //     this.width = width;
    //     this.height = height;
    //     //this.image = loadImage("sprites/base.png");
    //     World.add(world, this.body);
    //   }
    //   display(){
    //   push();
    //    if(this.body.speed<3){
    //     fill("grey");
    //     rectMode(CENTER);
    //     rect(this.body.position.x, this.body.position.y,25,35);
    //    }
    //    else{
    //      world.remove(world, this.body);
    //    }
       
    //     pop();
    //   }
  
  };
  