class View {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.view = document.createElement('canvas');
    
    this.view.getContext('2d').imageSmoothingEnabled = false;
    this.view.width = width;
    this.view.height = height;
  }

  //visualize ray data
  build(rays) {
    var ctx = this.view.getContext('2d');
  
    //clear the screen
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,this.width,this.height);

    //loop over trace result
    for(var x=0;x<rays.length;x++) {
      var ray = rays[x];

      //figure out line height relative to view dimention
      var yOffset = this.height / 2 - (this.height / ray.distance / 2);
      var yLength = this.height / ray.distance;
      
      ctx.fillStyle = this.getColor(ray.cell.type);
      ctx.fillRect(x, yOffset, 1, yLength);
    }
  }

  //TODO swap this with textures
  getColor(i) {
    switch(i) {
      case 1:
        return 'blue';
      case 2:
        return 'red';
      case 3:
        return 'yellow';
      default:
        return 'grey';
    }
  }

  getDOM(){return this.view;}
}
