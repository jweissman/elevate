import { Graphics } from './graphics.js';
import { Grid } from './grid.js';

export class Game {
  constructor(opts) {
    this.canvasId = opts.canvasId;
    console.log("---> game attempted to attach to canvas id:", this.canvasId);
    this.canvas = document.getElementById(this.canvasId);
    this.graphics = new Graphics(this.canvas);
  }

  kickstart() {
    this.setup();
    this.draw();

    // anim loop?
    //var self = this;
    this.timer = setInterval(()=>{this.step();}, 100);
  }

  halt() {
    clearInterval(this.timer);
  }

  setup() {
    console.log('setup');
  }

  draw() {
    // this.graphics.context.clear();
    //this.graphics.
    console.log('draw');

    var grid = new Grid({meshSize: 50});
    grid.draw(this.graphics);

    //this.graphics.line(0,0,this.graphics.width,this.graphics.height);
    //this.graphics.
    //this.context.clear();
    //this.context.beginPath();
    //this.context.moveTo(0,0);
    //this.context.lineTo(this.canvas.width, this.canvas.height);
    //this.context.stroke();
  }

  tick() {
    console.log("update");
  }

  step() {
    console.log('step yep');
    this.tick();
    this.draw();
  }
};
