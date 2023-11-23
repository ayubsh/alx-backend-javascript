const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call utils.calculateNumber with type Sum, totalamount, shippingamount', () => {
    const calculateNumberSpy = sinon.spy(console);
    const d = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(d.calledWith('SUM', 100, 20)).to.be.true;
    expect(d.callCount).to.be.equal(1);
    expect(calculateNumberSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(calculateNumberSpy.log.callCount).to.be.equal(1);
    d.restore();
    calculateNumberSpy.log.restore();
  });
});
