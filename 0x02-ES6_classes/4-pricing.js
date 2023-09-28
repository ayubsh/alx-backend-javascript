import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(camout) {
    this._amount = camout;
  }

  get currency() {
    return this._currency;
  }

  set currency(ccurrency) {
    if (!(ccurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = ccurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
