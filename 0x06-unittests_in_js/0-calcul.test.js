const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('round to whole number', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(3.0, 2.0), 5);
  });

  it('whole numbers', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(4, 5), 9);
  });

  it('floating points', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });

  it('round down', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(1.2, 3.3), 4);
  });

  it('round up', () => {
    expect.assertions(1);
    assert.strictEqual(calculateNumber(5.5, 6.6), 13);
  });
});
