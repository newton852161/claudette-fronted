import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SelectorCantidad({ cantidad, onCambiar }) {
  function manejarEscritura(evento) {
    const valor = parseInt(evento.target.value, 10);
    onCambiar(Number.isNaN(valor) || valor < 1 ? 1 : valor);
  }

  return (
    <Form.Group className="mb-3" controlId="cantidad">
      <Form.Label className="fw-semibold d-block">Cantidad</Form.Label>
      <InputGroup style={{ maxWidth: '160px' }}>
        <Button
          variant="outline-secondary"
          onClick={() => onCambiar(Math.max(1, cantidad - 1))}
          aria-label="Restar cantidad"
        >
          <i className="bi bi-dash" aria-hidden="true"></i>
        </Button>
        <Form.Control
          type="number"
          min="1"
          value={cantidad}
          onChange={manejarEscritura}
          className="text-center"
        />
        <Button
          variant="outline-secondary"
          onClick={() => onCambiar(cantidad + 1)}
          aria-label="Sumar cantidad"
        >
          <i className="bi bi-plus" aria-hidden="true"></i>
        </Button>
      </InputGroup>
    </Form.Group>
  );
}

export default SelectorCantidad;
