//helper class that fills the world
class WorldBuilder {
  constructor(world) {
    this.world = world;
  }

  //create a single cell
  createWall(x,y) {
    var type = Math.floor(Math.random()*3+1);
    this.world.storeCell(x, y, {type:type});
  }

  //create walls that surround the world
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
