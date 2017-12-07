
const { assert } = require('chai');

const Frogger = require('../lib/Frogger.js');
const Log = require('../lib/Log.js');



describe('Log', function() {
  let frogger;
  let log;
  let logs = [];

  beforeEach(() => {
    frogger = new Frogger();
    log = new Log(480, 480, 40, 4, .5, 'red');
    logs.push(log);
  })

  it('should be a log object', () => {
    assert.equal(typeof(log), 'object');
    assert.equal(log.type, 'log')
  })

  it('should be able to move', () => {
    assert.equal(log.x, 480);
    log.move();
    assert.equal(log.x, 480.5);
  })

})
  
