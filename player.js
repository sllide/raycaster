class Player {
  constructor(x, y, dir, camera) {
    this.pos = new Vector2(x, y);
    this.dir = dir;
    this.camera = camera;
    this.camera.setPos(this.pos);
    this.camera.setDir(this.dir);
    this.rotSpeed = 90;
    this.walkSpeed = 5;
    this.runSpeed = 20;
  }

  step(dt) {
    //run with shift
    var movSpeed = Key.isDown(Key.SHIFT) ? this.runSpeed : this.walkSpeed;

    if(Key.isDown(Key.W)) {
      var dir = new Vector2(Math.sin(this.dir / 180 * Math.PI), Math.cos(this.dir / 180 * Math.PI));
      dir.mul(dt*movSpeed);
      this.pos.add(dir);
      this.camera.setPos(this.pos);
    }
    if(Key.isDown(Key.S)) {
      var dir = new Vector2(Math.sin(this.dir / 180 * Math.PI), Math.cos(this.dir / 180 * Math.PI));
      dir.mul(dt*movSpeed);
      this.pos.sub(dir);
      this.camera.setPos(this.pos);
    }
    if(Key.isDown(Key.A)) {
      this.dir -= dt * this.rotSpeed;
      this.camera.setDir(this.dir);
    }
    if(Key.isDown(Key.D)) {
      this.dir += dt * this.rotSpeed;
      this.camera.setDir(this.dir);
    }
  }
}
