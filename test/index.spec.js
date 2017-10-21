import { expect } from 'chai';
import { setup } from '../src/index.js';

describe('index', function() {
  it('starts the app', function() {
    var app = setup();
    console.log("---> app", app);
    //var game = window.game;

    var theCanvas = document.getElementById("game-canvas");
    expect(theCanvas.width).to.eq(300);

    //app.game.halt();
  });
});
