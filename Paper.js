class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
this.paperImage=loadImage("paper.png")
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=2*radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image (this.paperImage,0, 0, this.radius, this.radius )
      pop();
    }
  };

  // image (this.paperImage,0, 0, this.radius, this.radius )can i do it now i have time