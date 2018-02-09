class Observer {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.rotation = 0;
    this.size = 10;
  }

  getPos() {return {x: this.x, y: this.y}}
  getSize() {return this.size;}
  getRotation() {return this.rotation;}
}
