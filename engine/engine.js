class Engine {
  constructor() {
    this.tracer = new Tracer();
  }

  setWorld(world) {
    this.world = world;
  }
  
  createCamera(fov) {
    this.camera = new Camera(fov);
    return this.camera;
  }

  createView(width, height) {
    this.view = new View(width,height);  
    return this.view;
  }

  render() {
    if(!this.view) throw new Error("No view created");
    if(!this.camera) throw new Error("No camera created");
    if(!this.world) throw new Error("No world defined");
    var result = this.tracer.trace(this.world, this.camera, this.view);
    this.view.build(result);
  }
}
