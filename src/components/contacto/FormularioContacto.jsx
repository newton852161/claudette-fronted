import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const NUMERO_WHATSAPP = '5493815551234';

const motivos = [
  'Consulta por un producto',
  'Talles y disponibilidad',
  'Envíos',
  'Cambios y devoluciones',
  'Otro',
];

const datosIniciales = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  mensaje: '',
};

function contarNumeros(texto) {
  let cantidad = 0;
  for (const caracter of texto) {
    if (caracter >= '0' && caracter <= '9') {
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}

function validar(datos) {
  const errores = {};

  if (datos.nombre.trim().length < 3) {
    errores.nombre = 'Escribí tu nombre y apellido (mínimo 3 letras).';
  }

  const email = datos.email.trim();
  if (email === '') {
    errores.email = 'Necesitamos tu email para poder responderte.';
  } else if (!email.includes('@') || !email.includes('.')) {
    errores.email = 'Ese email no parece válido. Ejemplo: nombre@mail.com';
  }

  const telefono = datos.telefono.trim();
  if (telefono !== '' && contarNumeros(telefono) < 8) {
    errores.telefono = 'El teléfono tiene que tener al menos 8 números.';
  }

  if (datos.motivo === '') {
    errores.motivo = 'Elegí el motivo de tu consulta.';
  }

  if (datos.mensaje.trim().length < 10) {
    errores.mensaje = 'Contanos un poco más (mínimo 10 caracteres).';
  }

  return errores;
}

function armarMensaje(datos) {
  const lineas = [
    `Hola! Soy ${datos.nombre.trim()}.`,
    `Motivo: ${datos.motivo}`,
    `Email: ${datos.email.trim()}`,
  ];

  if (datos.telefono.trim() !== '') {
    lineas.push(`Teléfono: ${datos.telefono.trim()}`);
  }

  lineas.push('');
  lineas.push(datos.mensaje.trim());

  return lineas.join('\n');
}

function FormularioContacto() {
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
    setEnviado(false);
  }

  function manejarEnvio(evento) {
    evento.preventDefault();

    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    const texto = encodeURIComponent(armarMensaje(datos));
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${texto}`, '_blank');

    setDatos(datosIniciales);
    setEnviado(true);
  }

  return (
    <Card className="border-0 shadow-sm rounded-4">
      <Card.Body className="p-4 p-md-5">
        <h2 className="titulo h3 fw-bold text-bordo mb-4">Envianos tu consulta</h2>

        {enviado && (
          <Alert variant="success">
            ¡Listo! Te abrimos WhatsApp con tu consulta para que la envíes.
          </Alert>
        )}

        <Form noValidate onSubmit={manejarEnvio}>
          <Row className="g-3">
            <Col xs={12}>
              <Form.Group controlId="nombre">
                <Form.Label className="fw-semibold">Nombre y apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  size="lg"
                  placeholder="Tu nombre"
                  value={datos.nombre}
                  onChange={manejarCambio}
                  isInvalid={Boolean(errores.nombre)}
                />
                <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  size="lg"
                  placeholder="tunombre@mail.com"
                  value={datos.email}
                  onChange={manejarCambio}
                  isInvalid={Boolean(errores.email)}
                />
                <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="telefono">
                <Form.Label className="fw-semibold">Teléfono / WhatsApp</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefono"
                  size="lg"
                  placeholder="381 555 1234"
                  value={datos.telefono}
                  onChange={manejarCambio}
                  isInvalid={Boolean(errores.telefono)}
                />
                <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group controlId="motivo">
                <Form.Label className="fw-semibold">Motivo de la consulta</Form.Label>
                <Form.Select
                  name="motivo"
                  size="lg"
                  value={datos.motivo}
                  onChange={manejarCambio}
                  isInvalid={Boolean(errores.motivo)}
                >
                  <option value="">Elegí una opción</option>
                  {motivos.map((motivo) => (
                    <option key={motivo} value={motivo}>
                      {motivo}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errores.motivo}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group controlId="mensaje">
                <Form.Label className="fw-semibold">Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="mensaje"
                  rows={6}
                  placeholder="Contanos en qué podemos ayudarte"
                  value={datos.mensaje}
                  onChange={manejarCambio}
                  isInvalid={Boolean(errores.mensaje)}
                />
                <Form.Control.Feedback type="invalid">{errores.mensaje}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} className="d-grid d-sm-block">
              <Button type="submit" size="lg" className="px-4">
                <i className="bi bi-whatsapp me-1" aria-hidden="true"></i>Enviar consulta por WhatsApp
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioContacto;
