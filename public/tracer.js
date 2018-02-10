class Tracer {
  
  constructor(width, height, world) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.c2d = this.canvas.getContext('2d');
    this.fov = 90;
    this.observer = world.getObserver();
    this.world = world;
    this.plane = new Vector2D(0,0.66);
  }

  render() {
    this.c2d.fillStyle = 'black';
    this.c2d.fillRect(0,0,this.width,this.height);
    for(var x=0;x<this.width;x++){
        if(!this.traceLine(x)) {
          console.log("ray",x,"returned false");
          return;
        }
    }
  }
  
  traceLine(x) {
    var cameraX = 2 * x / this.width - 1;
    var rayDir = new Vector2D(0,0);
    var pos = this.observer.getPos();
    var map = new Vector2D(Math.floor(pos.x),Math.floor(pos.y));
    rayDir.add(this.plane);
    rayDir.mulNumber(cameraX);
    rayDir.add(this.observer.getDir());

    var stepX = rayDir.x < 0 ? -1 : 1;
    var stepY = rayDir.y < 0 ? -1 : 1;
    var deltaDistanceX = Math.abs(1 / rayDir.x);
    var deltaDistanceY = Math.abs(1 / rayDir.y);
    var perpWallDistance;

    var distanceX = (map.x + (rayDir.x < 0 ? 0 : 1) - pos.x) * deltaDistanceX;
    var distanceY = (map.y + (rayDir.y < 0 ? 0 : 1) - pos.y) * deltaDistanceY;

    var side;
    var cell;
    while(true) {
      if(distanceX < distanceY) {
        distanceX += deltaDistanceX;
        map.x += stepX;
        side = 0;
      } else {
        distanceY += deltaDistanceY;
        map.y += stepY;
        side = 1;
      }
      cell = this.world.getCell(map.x,map.y);
      if(cell['type'] === 'wall') break;
      if(map.x<0||map.x>32||map.y<0||map.y>32){return false;}
    }

    if(side == 0) perpWallDistance = (map.x - pos.x + (1-stepX) / 2) / rayDir.x;
    else          perpWallDistance = (map.y - pos.x + (1-stepY) / 2) / rayDir.y;

    this.renderLine(x, perpWallDistance*CONF.distMult, cell.c);
    return true;
  }

  renderLine(x, distance, color) {
    this.c2d.fillStyle = color;
    var y = distance/2;
    var h = this.height-distance;
    this.c2d.fillRect(x,y,1,h);
  }

  getDom() {
    return this.canvas;
  }
}
