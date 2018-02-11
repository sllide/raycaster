class Observer {
  constructor(x,y) {
    this.pos = new Vector2D(x,y);
    this.direction = new Vector2D(1,0);
    this.size = 4;
    this.rotMult = 4;
  }

  update() {
    if(Keyboard.isPressed(Keyboard.UP)) {
      this.pos.y -= 1;
      //this.pos.add(this.direction);
    }
    if(Keyboard.isPressed(Keyboard.DOWN)) {
      this.pos.y += 1;
      //this.pos.sub(this.direction);
    }
    if(Keyboard.isPressed(Keyboard.LEFT)) {
      this.pos.x -= 1;
    }
    if(Keyboard.isPressed(Keyboard.RIGHT)) {
      this.pos.x += 1;
    }
  }

  getPos() {return this.pos;}
  getDir() {return this.direction;}
  getSize() {return this.size;}
}
