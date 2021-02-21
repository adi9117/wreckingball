class Chain {
    constructor(bodyA,pointB) {
      var options = {
         bodyA:bodyA,
         pointB:pointB,
         length:300,
         stiffness:1.2
          
      }
      this.chain = Constraint.create(options)
      this.pointB = pointB;
      World.add(world, this.chain);
    }
    display(){
      var pointA =this.chain.bodyA.position;
      var pointB = this.pointB
      push();
      strokeWeight(4);
      line(pointB.x,pointB.y,pointA.x,pointA.y);
      pop();
    }
  };