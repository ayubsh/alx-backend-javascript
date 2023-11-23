const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should round the two numbers and return their sum', () => {
      expect(calculateNumber('SUM', 1.5, 2.6)).to.equal( 5);
      expect(calculateNumber('SUM', 1.4, 2.5)).to.equal( 4);
      expect(calculateNumber('SUM', 1.6, 2.5)).to.equal( 5);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('should round the two numbers and return their difference', () => {
      expect(calculateNumber('SUBTRACT', 2.6, 1.5)).to.equal( 1);
      expect(calculateNumber('SUBTRACT', 2.5, 1.4)).to.equal( 2);
      expect(calculateNumber('SUBTRACT', 2.5, 1.6)).to.equal( 1);
    });
  });

  describe('when type is DIVIDE', () => {
    describe('when b is not equal to 0', () => {
      it('should round the two numbers and return their quotient', () => {
        expect(calculateNumber('DIVIDE', 3.5, 2.5)).to.equal( 1.3333333333333333);
        expect(calculateNumber('DIVIDE', 3.4, 2.5)).to.equal( 1);
        expect(calculateNumber('DIVIDE', 3.6, 2.5)).to.equal( 1.3333333333333333);
      });
    });

    describe('when b is equal to 0', () => {
      it("should return the string 'Error'", () => {
        expect(calculateNumber('DIVIDE', 3.5, 0)).to.equal( 'Error');
        expect(calculateNumber('DIVIDE', 3.4, 0)).to.equal( 'Error');
        expect(calculateNumber('DIVIDE', 3.6, 0)).to.equal( 'Error');
      });
    });
  });
});
