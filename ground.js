class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }



  show() {
    var pos = this.body.position;
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    groundObj.display();
  }
  
  groundObj = new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
}



