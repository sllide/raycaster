class Vector2D {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add(angle, multiplier) {
    this.x += Math.sin(this.radians(angle))*multiplier;
    this.y += Math.cos(this.radians(angle))*multiplier;
  }

  radians(degrees) {
    return degrees * Math.PI / 180;
  }

  getVector(){return {x:this.x,y:this.y};}
}
