class Keyboard {

  constructor() {
    document.addEventListener("keydown", (e) => this.handlePress(e));
    document.addEventListener("keyup", (e) => this.handleRelease(e));
  }


  handlePress(e) {
    Keyboard.keys[e.keyCode] = true;
  }

  handleRelease(e) {
    Keyboard.keys[e.keyCode] = false;
  }

  static isPressed(key) {
    return Keyboard.keys[key];
  }
}

Keyboard.keys = new Array();

Keyboard.UP = 38;
Keyboard.DOWN = 40;
Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
