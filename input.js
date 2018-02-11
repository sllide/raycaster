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

  process(camera) {
    if(this.keys[Input.LEFT]) {camera.rotate(-.2);}
    if(this.keys[Input.RIGHT]) {camera.rotate(.2);}
    if(this.keys[Input.UP]) {camera.move(.5);}
    if(this.keys[Input.DOWN]) {camera.move(-.5);}
  }
}

Input.UP = 38;
Input.DOWN = 40;
Input.LEFT = 37;
Input.RIGHT = 39;
