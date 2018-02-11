class Vector2d {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  mul(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
  }
  
  clone() {return new Vector2d(this.x,this.y)};
  getSum(){return this.x + this.y;}
}
