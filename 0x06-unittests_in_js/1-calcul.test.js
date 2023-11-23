const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should round the two numbers and return their sum', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.6), 5);
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
      assert.strictEqual(calculateNumber('SUM', 1.6, 2.5), 5);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('should round the two numbers and return their difference', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.5), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.4), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.6), 1);
    });
  });

  describe('when type is DIVIDE', () => {
    describe('when b is not equal to 0', () => {
      it('should round the two numbers and return their quotient', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3.5, 2.5), 1.3333333333333333);
        assert.strictEqual(calculateNumber('DIVIDE', 3.4, 2.5), 1);
        assert.strictEqual(calculateNumber('DIVIDE', 3.6, 2.5), 1.3333333333333333);
      });
    });

    describe('when b is equal to 0', () => {
      it("should return the string 'Error'", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0), 'Error');
        assert.strictEqual(calculateNumber('DIVIDE', 3.4, 0), 'Error');
        assert.strictEqual(calculateNumber('DIVIDE', 3.6, 0), 'Error');
      });
    });
  });
});
