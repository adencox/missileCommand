function bomb() {
  this.pos = createVector(random(0,width),random(0,-500));
  this.speed = random(0.6,1.2);
  this.radius = 10;
  this.dead = false;
  this.col = createVector(random(100,255),random(100,255),random(100,255));

  this.update = function() {
    this.pos.y = this.pos.y + this.speed;
  }

  this.show = function() {
    if (this.dead != true) {
      stroke(0);
      fill(this.col.x,this.col.y,this.col.z);
      ellipse(this.pos.x,this.pos.y,this.radius/4,this.radius);
    }
  }
}
