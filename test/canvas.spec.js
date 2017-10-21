import { expect } from 'chai';
import { Canvas } from '../src/canvas.js';

describe('Canvas', function() {
  it('renders a canvas element', function() {
    var canvas = new Canvas();
    var elem = canvas.render();
    expect(elem.id).to.eq("game-canvas");
    expect(elem.width).to.eq(800);
    expect(elem.height).to.eq(600);
  });
});
