export default function hasValuesFromArray(st, arr) {
  return arr.every((val) => st.has(val));
}
