class Vector2D {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  addNumber(val) {
    this.x += val;
    this.y += val;
  }

  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  mul(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
  }

  mulNumber(val) {
    this.x *= val;
    this.y *= val;
  
  }
  clone() {return new Vector2D(this.x,this.y)};
  getSum(){return this.x + this.y;}
}
