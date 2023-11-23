function calculateNumber(t, a, b) {
  if (t === 'SUM') {
    return Math.round(a) + Math.round(b);
  } if (t === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } if (t === 'DIVIDE') {
    if (Math.round(b) === 0) return 'Error';

    return Math.round(a) / Math.round(b);
  }

  return 0;
}

module.exports = calculateNumber;
