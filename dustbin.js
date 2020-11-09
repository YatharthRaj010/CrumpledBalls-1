class Dustbin {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      
      this.leftBody = Bodies.rectangle(x-100, y-50,20,100,{isStatic:true});
      this.rightBody = Bodies.rectangle(x+100, y-50, 20,100,{isStatic:true});
      this.baseBody = Bodies.rectangle(x, y, 200,20, {isStatic:true});
      
      
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
      World.add(world, this.baseBody);
    }
    display(){
      var leftPos =this.leftBody.position;
      var rightPos =this.rightBody.position;
      var basePos =this.baseBody.position;

      
      
      rectMode(CENTER);
     
      fill("red");
     
      rect(leftPos.x,leftPos.y,20,100 );
      rect(rightPos.x,rightPos.y, 20,100);
      rect(basePos.x,basePos.y, 200,20);
      
    }
  };
  