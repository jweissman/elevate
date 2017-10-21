import { expect } from 'chai';
import { Canvas } from '../src/canvas.js';

describe('Canvas', function() {
  it('renders a canvas element', function() {
    var canvas = new Canvas();
    var elem = canvas.render({id: 'the-canvas-id',width: 100,height: 120});
    expect(elem.id).to.eq("the-canvas-id");
    expect(elem.width).to.eq(100);
    expect(elem.height).to.eq(120);
  });
});
