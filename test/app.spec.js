import { expect } from 'chai';
import { Canvas } from '../src/canvas.js';
import { App } from '../src/app.js';

describe('The app', function(){
  it('has a shell', function() {
    var app = new App();
    var elem = app.render();

    expect(elem.id).to.equal("elevate-shell")

    //var canvas = new Canvas();

    //expect(contents).to.eq(canvas.render());

    //"<canvas id=\"game-canvas\"></canvas>"
    //);
  });
});
