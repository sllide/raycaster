var Key = {
  keys: new Array(),
  press: function(e) {
    Key.keys[e.keyCode] = true;
  },

  release: function(e) {
    Key.keys[e.keyCode] = false;
  },

  isDown: function(key) {
    return Key.keys[key];
  }
}

Key.W = 87;
Key.S = 83;
Key.A = 65;
Key.D = 68;
Key.SHIFT = 16;

document.addEventListener('keydown', Key.press);
document.addEventListener('keyup', Key.release);
