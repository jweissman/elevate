import { expect } from 'chai';
import _ from '../src/index.js';

describe('index', function() {
  it('starts the app', function() {
    var theCanvas = document.getElementById("game-canvas");
    expect(theCanvas.width).to.eq(800);
  });
});
