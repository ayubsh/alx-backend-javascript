export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  set size(s) {
    this._size = s;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  set location(l) {
    this._location = l;
  }
  // Casting to Number returns the size

  valueOf() {
    return this._size;
  }

  // Casting to String returns the location
  toString() {
    return this._location;
  }
}
