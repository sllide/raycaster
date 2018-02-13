class Camera {
  constructor(fov) {
    this.pos = new Vector2(0,0);
    this.dir = 0;
    this.fov = fov;
  }

  setPos(vector) {
    this.pos.set(vector);
  }

  setDir(value) {
    this.dir = value;
  }

  getPos() {return this.pos.clone();}
  getDir() {return this.dir;}
  getFov() {return this.fov;}
}
