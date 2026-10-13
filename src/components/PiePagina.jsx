import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Catálogo', ruta: '/catalogo' },
  { texto: 'Nosotros', ruta: '/nosotros' },
  { texto: 'Contacto', ruta: '/contacto' },
];

const redes = [
  { nombre: 'Instagram', icono: 'bi-instagram', url: 'https://www.instagram.com/claudette.r.h' },
  { nombre: 'WhatsApp', icono: 'bi-whatsapp', url: 'https://wa.me/5493815551234' },
  { nombre: 'Email', icono: 'bi-envelope', url: 'mailto:hola@claudette.com' },
];

function PiePagina() {
  return (
    <footer className="bg-marron text-white pt-5 pb-4" id="contactos">
      <Container>
        <Row className="gy-4">
          <Col md={5}>
            <h2 className="titulo h4 mb-2">Claudette</h2>
            <p className="small text-white-50 mb-0">
              Ropa y accesorios de mujer.<br />San Miguel de Tucumán, Argentina.
            </p>
          </Col>

          <Col xs={6} md={3}>
            <h3 className="small fw-semibold text-white-50 mb-3">Navegación</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {enlaces.map((enlace) => (
                <li key={enlace.ruta}>
                  <Link className="link-footer" to={enlace.ruta}>{enlace.texto}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} md={4}>
            <h3 className="small fw-semibold text-white-50 mb-3">Seguinos</h3>
            <div className="d-flex gap-3 fs-4">
              {redes.map((red) => (
                <a key={red.nombre} className="link-footer" href={red.url} aria-label={red.nombre}>
                  <i className={`bi ${red.icono}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="border-light opacity-25 my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <p className="small text-white-50 mb-0">Claudette - Todos los derechos reservados</p>
          <Link className="link-footer small" to="/admin">Administración</Link>
        </div>
      </Container>
    </footer>
  );
}

export default PiePagina;
