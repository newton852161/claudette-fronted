const formato = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0,
});

export function formatearPrecio(valor) {
  return formato.format(valor);
}
