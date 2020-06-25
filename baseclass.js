class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':0.0,
            'density':0.5,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
       // translate(this.body.position.x, this.body.position.y);
       
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);

        fill("grey");
         rectMode(CENTER);
         rect(this.body.position.x, this.body.position.y,25,32);
        pop();
      }
}