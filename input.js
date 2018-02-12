class Input {

  constructor() {
    this.keys = new Array();
    document.addEventListener("keydown", (e) => this.handlePress(e));
    document.addEventListener("keyup", (e) => this.handleRelease(e));
  }

  handlePress(e) {
    this.keys[e.keyCode] = true;
  }

  handleRelease(e) {
    this.keys[e.keyCode] = false;
  }

  process(camera, dt) {
    var rotSpeed = 2;
    var moveSpeed = this.keys[Input.SHIFT] ? 10 : 3;

    if(this.keys[Input.A]) {camera.rotate(-rotSpeed*dt);}
    if(this.keys[Input.D]) {camera.rotate(rotSpeed*dt);}
    if(this.keys[Input.W]) {camera.move(moveSpeed*dt);}
    if(this.keys[Input.S]) {camera.move(-moveSpeed*dt);}
  }
}

Input.W = 87;
Input.S = 83;
Input.A = 65;
Input.D = 68;
Input.SHIFT = 16;
