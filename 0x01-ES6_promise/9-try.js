export default function guardrail(mathFunction) {
  const queus = [];

  try {
    const resl = mathFunction();
    queus.push(resl);
  } catch (error) {
    queus.push(String(error));
  } finally {
    queus.push('Guardrail was processed');
  }

  return queus;
}
