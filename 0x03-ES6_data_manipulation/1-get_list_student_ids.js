export default function getListStidentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((a) => a.id);
}
