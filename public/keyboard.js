class Keyboard {

  constructor() {
    this.hooks = new Array();
    document.addEventListener("keydown", (e) => this.handlePress(e));
  }


  handlePress(e) {
    for(var i=0;i<this.hooks.length;i++) {
      this.hooks[i].press(e.keyCode);
    }
  }

  hook(obj) {
    this.hooks.push(obj);
  }
}

Keyboard.UP = 38;
Keyboard.DOWN = 40;
Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
