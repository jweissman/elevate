import { expect } from 'chai';
import { Html } from '../src/html.js';

describe('Html', function() {
  it('creates div elements', function() {
    var html = new Html();
    var theDiv = html.div({id: 'the-div-id'});
    expect(theDiv.id).to.eq('the-div-id');
  });
});
