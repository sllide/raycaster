class MiniMap {

  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.c2d = this.canvas.getContext('2d');
  }

  draw(objects) {
    this.c2d.fillStyle = 'black';
    this.c2d.fillRect(0,0,this.width,this.height);
    for(var i=0;i<objects.length;i++) {
      var obj = objects[i];
      this.c2d.fillStyle = obj[4];
      this.c2d.fillRect(obj[0],obj[1],obj[2],obj[3]);
    }
    console.log(objects);
  }

  getDom() {
    return this.canvas;
  }
}
