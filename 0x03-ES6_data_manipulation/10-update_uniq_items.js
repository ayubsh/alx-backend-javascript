export default function updateUniqueItems(grmap) {
  if (!(grmap instanceof Map)) throw new Error('Cannot process');

  for (const [k, val] of grmap.entries()) {
    if (val === 1) grmap.set(k, 100);
  }

  return grmap;
}
