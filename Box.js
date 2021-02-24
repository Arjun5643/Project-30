class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height)
   this.visibility = 255
  }


display() {
  console.log(this.body.speed);
  if(this.body.speed<1) {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
  else {
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility - 5;
    tint(255, this.visibility);
    pop();
  }
}
}
