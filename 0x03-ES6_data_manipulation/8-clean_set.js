export default function cleanSet(st, startings) {
  if (!st || !startings) return '';
  const flset = [...st].filter((val) => val.startsWith(startings));

  console.log(flset);
  return [...flset].map((val) => val.replace(startings, '')).join('-');
}
