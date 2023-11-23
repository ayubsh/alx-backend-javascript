const { expect } = require('chai');
const request = require('request');

describe('aPI test', () => {
  it('gET /', (done) => {
    request.get('http://localhost:7865/', (err, respon, body) => {
      expect(respon.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('gET /cart/:id id=1', (done) => {
    request.get('http://localhost:7865/cart/1', (err, respon, body) => {
      expect(respon.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  });

  it('get /cart/:id id=d', (done) => {
    request.get('http://localhost:7865/cart/d', (err, respon, body) => {
      expect(respon.statusCode).to.be.equal(404);
      done();
    });
  });
});
