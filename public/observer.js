class Observer {
  constructor(x,y) {
    this.pos = new Vector2D(x,y);
    this.rotation = 0;
    this.direction = new Vector2D(1,0);
    this.size = 4;
    this.speedMult = 2;
    this.rotMult = 5;

    this.calculateDirection();
  }

  update() {
    if(Keyboard.isPressed(Keyboard.UP)) {
      this.pos.add(this.direction, this.speedMult);
    }
    if(Keyboard.isPressed(Keyboard.DOWN)) {
      this.pos.sub(this.direction, this.speedMult);
    }
    if(Keyboard.isPressed(Keyboard.LEFT)) {
      this.rotation += this.rotMult;
      this.calculateDirection();
    }
    if(Keyboard.isPressed(Keyboard.RIGHT)) {
      this.rotation -= this.rotMult;
      this.calculateDirection();
    }
  }

  calculateDirection() {
    this.direction.x = Math.sin(this.rotation / 180 * Math.PI);
    this.direction.y = Math.cos(this.rotation / 180 * Math.PI);
  }

  getPos() {return this.pos;}
  getDir() {return this.direction;}
  getSize() {return this.size;}
  getRotation() {return this.rotation;}
}
