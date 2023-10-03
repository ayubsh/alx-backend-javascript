export default function createInt8TypedArray(len, pos, val) {
  if (pos >= len) throw Error('Position outside range');

  const buffer = new ArrayBuffer(len);
  const Int8View = new DataView(buffer);

  Int8View.setInt8(pos, val);
  return Int8View;
}
