import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';

const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Catálogo', ruta: '/catalogo' },
  { texto: 'Nosotros', ruta: '/nosotros' },
  { texto: 'Contacto', ruta: '/contacto' },
];

function BarraNavegacion() {
  return (
    <Navbar expand="lg" bg="white" sticky="top" collapseOnSelect className="border-bottom py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="p-0">
          <img src="/img/ui/logo.jpeg" alt="Claudette - Tienda de ropa" height="52" className="rounded-3" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menuPrincipal" aria-label="Abrir menú" className="border-0 shadow-none" />

        <Navbar.Collapse id="menuPrincipal">
          <Nav className="ms-auto mb-2 mb-lg-0 gap-lg-3">
            {enlaces.map((enlace) => (
              <Nav.Link key={enlace.ruta} as={NavLink} to={enlace.ruta} end={enlace.ruta === '/'}>
                {enlace.texto}
              </Nav.Link>
            ))}
          </Nav>

          <Button
            href="https://wa.me/5493815551234"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-lg-4 mt-3 mt-lg-0"
          >
            <i className="bi bi-whatsapp me-1" aria-hidden="true"></i>Escribinos
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
