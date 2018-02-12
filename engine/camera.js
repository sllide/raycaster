class Camera {
  constructor(x,y,dx,dy) {
    this.pos = new Vector2d(x,y);
    this.direction = new Vector2d(dx,dy);
    this.plane = new Vector2d(0,0.66);
  }

  move(val) {
    var velocity = this.direction.clone();
    velocity.mul(new Vector2d(val, val));
    this.pos.add(velocity);
  }

  rotate(val) {
    var oDir = this.direction.clone();
    this.direction.x = oDir.x * Math.cos(val) - oDir.y * Math.sin(val);
    this.direction.y = oDir.x * Math.sin(val) + oDir.y * Math.cos(val);
    
    var oPlane = this.plane.clone();
    this.plane.x = oPlane.x * Math.cos(val) - oPlane.y * Math.sin(val);
    this.plane.y = oPlane.x * Math.sin(val) + oPlane.y * Math.cos(val);
  }

  getPos() {return this.pos;}
  getDir() {return this.direction;}
  getPlane() {return this.plane;}
}
