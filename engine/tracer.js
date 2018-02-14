class Tracer {
  
  //start firing rays into the world
  //and return their findings
  trace(world, camera, view) {
    var rays = new Array();
    var pos = camera.getPos();
    var fov = camera.getFov();
    for(var x=0;x<view.width;x++) {
      //get the ray direction relative to the camera view
      var dir = camera.getDir()-fov/2+x*(fov/view.width);
      var ray = this.shootRay(pos, dir, world);
      
      //fisheye correction
      //TODO: it doesnt completely fix the distortion but its barely noticable
      //https://stackoverflow.com/questions/24173966/raycasting-engine-rendering-creating-slight-distortion-increasing-towards-edges
      //fucking hell is this a chore
      //ray.distance.corrected = ray.distance.real;
      //ray.distance.corrected = ray.distance.real * Math.cos(dir);
      ray.distance.corrected = ray.distance.real * (Math.cos((x / view.width * fov - fov/2) * Math.PI / 180));
      //ray.distance.corrected = ray.distance.real * (Math.cos((x - fov/2) * Math.PI / 180));
      //ray.distance.corrected = Math.atan((x-fov/2)/ray.distance.real);
      rays.push(ray);
    }
    return rays;
  }
  
  //conjure black magic
  shootRay(pos, dir, world) {

    //calculate initial variables
    var rayDir = new Vector2(Math.sin(dir * Math.PI / 180),Math.cos(dir * Math.PI / 180));
    var mapPos = new Vector2(Math.floor(pos.x),Math.floor(pos.y));
    var rayDist = new Vector2();
    var gridDist = new Vector2(Math.abs(1/rayDir.x),Math.abs(1/rayDir.y));
    var step = new Vector2();
    var cell;
    var side = 0;

    step.x = rayDir.x < 0 ? -1 : 1;
    step.y = rayDir.y < 0 ? -1 : 1;

    rayDist.x = (rayDir.x < 0 ? (pos.x - mapPos.x) : (mapPos.x + 1 - pos.x)) * gridDist.x;
    rayDist.y = (rayDir.y < 0 ? (pos.y - mapPos.y) : (mapPos.y + 1 - pos.y)) * gridDist.y;

    //keep incrementing ray position until it hits a cell that isnt empty
    while(true) {
      if(rayDist.x < rayDist.y) {
        rayDist.x += gridDist.x;
        mapPos.x += step.x;
        side = 0;
      } else {
        rayDist.y += gridDist.y;
        mapPos.y += step.y;
        side = 1;
      }
      cell = world.getCell(mapPos.x,mapPos.y);
      if(cell.type != 0) { break; }

    }

    //firgure out the distance of that ray
    var distance = new Array();

    if (side == 0) distance.real = (mapPos.x - pos.x + (1 - step.x) / 2) / rayDir.x;
    else           distance.real = (mapPos.y - pos.y + (1 - step.y) / 2) / rayDir.y;

    //calculate where the wall has been hit
    var localOffset;
    if (side == 0) localOffset = pos.y + distance.real * rayDir.y;
    else           localOffset = pos.x + distance.real * rayDir.x;
    localOffset -= Math.floor(localOffset);

    return {
      rotation: dir,
      localOffset: localOffset,
      distance: distance,
      cell: cell,
    };
  }
}
