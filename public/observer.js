class Observer {
  constructor(x,y) {
    this.pos = new Vector2D(x,y);
    this.rotation = 0;
    this.size = 2;
    this.speedMult = 2;
    this.rotMult = 5;
  }

  press(key) {
    switch(key) {
      case Keyboard.UP:
        this.pos.add(this.rotation, this.speedMult);
        break;
      case Keyboard.DOWN:
        this.pos.add(this.rotation+180, this.speedMult);
        break;
      case Keyboard.LEFT:
        this.rotation += this.rotMult;
        break;
      case Keyboard.RIGHT:
        this.rotation -= this.rotMult;
        break;
    } 
  }

  getPos() {return this.pos.getVector();}
  getSize() {return this.size;}
  getRotation() {return this.rotation;}
}
