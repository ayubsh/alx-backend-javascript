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
});
