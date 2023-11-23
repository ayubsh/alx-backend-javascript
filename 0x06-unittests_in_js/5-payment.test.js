const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
    if (!calculateNumberSpy) {
      calculateNumberSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    calculateNumberSpy.log.resetHistory();
  });

  it('should call utils.calculateNumber with type Sum, totalamount, shippingamount', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(calculateNumberSpy.log.calledOnce).to.be.true;
  });

  it('should call utils.calculateNumber with type Sum, totalamount, shippingamount', () => {
    sendPaymentRequestToApi(30, 20);
    expect(calculateNumberSpy.log.calledWith('The total is: 50')).to.be.true;
    expect(calculateNumberSpy.log.calledOnce).to.be.true;
  });
});
