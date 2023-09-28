export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get code() {
    return this._code;
  }

  set code(Ccode) {
    this._code = Ccode;
  }

  get name() {
    return this._name;
  }

  set name(cName) {
    this._name = cName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
