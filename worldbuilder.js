class WorldBuilder {
  constructor(world) {
    this.world = world;
  }

  createWall(x,y,color = false) {
    if(!color) color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    var cell = this.world.createCell(World.cellTypes.wall, color);
    this.world.storeCell(x,y, cell);
  }

  createBoundary() {
    var worldSize = this.world.getWorldSize();
    var x = 0;
    var y = 0;
    
    while(true) {
      if(y == 0 || y == worldSize.y-1) {
        this.createWall(x,y);
        if(y == worldSize.y-1 && x == worldSize.x-1) {
          break;
        }
        if(x++ == worldSize.x-1) {
          x = 0; 
          y++; 
        }
      }
      else if(x == 0) {
        this.createWall(0,y);
        this.createWall(worldSize.x-1,y);
        y++;
      }
    }
  }
}
