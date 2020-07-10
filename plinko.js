class Plinko {
    constructor(x, y ,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1
      }
      this.body = Bodies.Plinko(x, y,radius, options);
      this.radius = radius;
    
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
  
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate (angle);
      ellipseMode(RADIUS);
      fill(255);    
      pop();
  
    }
  };