const { expect } = require('chai');
const { it } = require('mocha');
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

  it('GET /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (err, respon, body) => {
      expect(respon.statusCode).to.be.equal(200);
      expect(body).to.be.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
    });
    done();
  });

  it('Post /login with body {userName: ayub}', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Ayub' } }, (err, respon, body) => {
      expect(respon.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Ayub');
      done();
    });
  });
});
