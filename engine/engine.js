class Engine {
  constructor(world, camera) {
    this.world = world;
    this.camera = camera;
    this.tracer = new Tracer();
    this.view = new TraceView(320,200,2,'black');
    this.debugView = new DebugView(400,400);
  }
  
  step() {
    var rays = this.tracer.trace(this.world, this.camera, this.view.width);
    this.view.build(rays);
    this.debugView.build(this.world, this.camera, rays);
  }

  getTracerCanvas() {return this.view.getCanvas();}
  getDebugCanvas() {return this.debugView.getCanvas();}
}
