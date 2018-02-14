class View {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.view = document.createElement('canvas');
    
    this.view.getContext('2d').imageSmoothingEnabled = false;
    this.view.width = width;
    this.view.height = height;
    this.textureLoader = new TextureLoader();
  }

  //visualize ray data
  build(rays) {
    var ctx = this.view.getContext('2d',{alpha: false});
  
    //clear the screen
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,this.width,this.height);

    //loop over trace result
    for(var x=0;x<rays.length;x++) {
      var ray = rays[x];

      //figure out line height relative to view dimention
      var yOffset = this.height / 2 - (this.height / ray.distance.corrected / 2);
      var yLength = this.height / ray.distance.corrected;
     
      var tex = this.textureLoader.getTexture(ray.cell.type);
      if(tex != false) {
        ctx.drawImage(tex,ray.localOffset*64,0,1,64,x,yOffset,1,yLength);
      }
      //ctx.fillStyle = "rgb("+(20*ray.cell.type+100)+",0,0)";
      //ctx.fillRect(x,yOffset,1,yLength);
    }

  }

  getDOM(){return this.view;}
}
