class Tracer {
  trace(world, camera, length) {
    var rays = new Array();
    for(var x=0;x<length;x++) {
      rays.push(this.traceLine(x, length, world, camera));
    }
    return rays;
  }
  
  traceLine(offset, length, world, camera) {
    var camPos = camera.getPos();
    var rayDir = camera.getPlane().clone();
    var camX = 2*offset/length-1;
    rayDir.mul(new Vector2d(camX, camX));
    rayDir.add(camera.getDir());
    
    //get the cell width and height
    var cellDistX = Math.abs(1 / rayDir.x);
    var cellDistY = Math.abs(1 / rayDir.y);

    //calculate initial values
    var mapPos = new Vector2d(Math.floor(camPos.x),Math.floor(camPos.y));
    var stepX = (rayDir.x < 0) ? -1 : 1;
    var stepY = (rayDir.y < 0) ? -1 : 1;
    var rayDistX = (rayDir.x < 0 ? (camPos.x - mapPos.x) : (mapPos.x + 1 - camPos.x)) * cellDistX;
    var rayDistY = (rayDir.y < 0 ? (camPos.y - mapPos.y) : (mapPos.y + 1 - camPos.y)) * cellDistY;

    var side;
    var cell;

    //loop until ray hits something
    while(true) {
      if(rayDistX < rayDistY) {
        rayDistX += cellDistX;
        mapPos.x += stepX;
        side = 0;
      } else {
        rayDistY += cellDistY;
        mapPos.y += stepY;
        side = 1;
      }
      cell = world.getCell(mapPos.x,mapPos.y); 

      if(cell['type'] === World.cellTypes.wall || cell['type'] === World.cellTypes.invalid) {
        break;
      }
      if(cell['type'] === World.cellTypes.mirror) {
        if(side == 0) stepY = -stepX;
        else          stepX = -stepY;
      }
    }

    var rayLength;
    if(side == 0) rayLength = (mapPos.x - camPos.x + (1-stepX) / 2) / rayDir.x;
    else          rayLength = (mapPos.y - camPos.y + (1-stepY) / 2) / rayDir.y;

    var hitPos = rayDir.clone();
    hitPos.x *= rayLength;
    hitPos.y *= rayLength;
    hitPos.add(camPos);
   
    var hitArray = new Array();

    return {
      offset: offset,
      hitPos: hitPos,
      rayLength: rayLength,
      cell: cell,
    };
  }
}
