//simple 2d vector class that accepts numbers and 2d vectors for manipulation
class Vector2 {
  constructor(x=0,y=0) {
    this.x = x;
    this.y = y;
  }
 
  set(vector) {
    if(typeof vector === 'number') {
      this.x = vector;
      this.y = vector;
      return;
    }
    this.x = vector.x;
    this.y = vector.y;
  }

  add(vector) {
    if(typeof vector === 'number') {
      this.x += vector;
      this.y += vector;
      return;
    }
    this.x += vector.x;
    this.y += vector.y;
  }

  sub(vector) {
    if(typeof vector === 'number') {
      this.x -= vector;
      this.y -= vector;
      return;
    }
    this.x -= vector.x;
    this.y -= vector.y;
  }

  mul(vector) {
    if(typeof vector === 'number') {
      this.x *= vector;
      this.y *= vector;
      return;
    }
    this.x *= vector.x;
    this.y *= vector.y;
  }
  
  clone() {return new Vector2(this.x,this.y)};
}
