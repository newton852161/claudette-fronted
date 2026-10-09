import Button from 'react-bootstrap/Button';

function formatearFecha(fechaIso) {
  const [anio, mes, dia] = fechaIso.split('-');
  return `${dia}/${mes}/${anio}`;
}

function FilaCliente({ cliente }) {
  const numeroWhatsApp = '549' + cliente.telefono.replace(/\D/g, '');

  return (
    <tr>
      <td className="text-secondary">{cliente.id}</td>
      <td className="fw-semibold">{cliente.nombre}</td>
      <td className="text-secondary">{cliente.email}</td>
      <td className="text-secondary">{cliente.telefono}</td>
      <td className="text-secondary">{cliente.localidad}</td>
      <td className="text-secondary">{formatearFecha(cliente.alta)}</td>
      <td className="text-end text-nowrap">
        <Button
          href={`mailto:${cliente.email}`}
          size="sm"
          variant="outline-primary"
          className="me-1"
          aria-label={`Enviar email a ${cliente.nombre}`}
        >
          <i className="bi bi-envelope" aria-hidden="true"></i>
        </Button>
        <Button
          href={`https://wa.me/${numeroWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          variant="outline-success"
          aria-label={`Escribir por WhatsApp a ${cliente.nombre}`}
        >
          <i className="bi bi-whatsapp" aria-hidden="true"></i>
        </Button>
      </td>
    </tr>
  );
}

export default FilaCliente;
