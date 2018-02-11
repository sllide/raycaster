class Engine {
  constructor(world, camera) {
    this.world = world;
    this.camera = camera;
    this.constructViews();
    this.tracer = new Tracer(this.world, this.camera, this.view, this.debugView);
  }

  constructViews() {
    this.view = new View(640,400);
    this.view.setClearColor('black');
    this.view.clear();

    this.debugView = new View(32*16,32*16);
    this.debugView.setClearColor('black');
    this.debugView.clear();
  }
  
  step() {
    this.tracer.trace();
    this.view.clear();
    this.tracer.buildView();
    this.debugView.clear();
    this.tracer.buildDebugView();
  }

  getTracerCanvas() {return this.view.getCanvas();}
  getDebugCanvas() {return this.debugView.getCanvas();}
}
