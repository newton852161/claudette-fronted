import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';

const enlaces = [
  { texto: 'Productos', ruta: '/admin/productos', icono: 'bi-box-seam' },
  { texto: 'Clientes', ruta: '/admin/clientes', icono: 'bi-people' },
  { texto: 'Ver el sitio', ruta: '/', icono: 'bi-globe' },
];

function MenuAdmin() {
  const [abierto, setAbierto] = useState(false);

  function cerrar() {
    setAbierto(false);
  }

  return (
    <>
      {/* Barra superior en celulares */}
      <nav className="navbar navbar-dark bg-marron sticky-top d-lg-none" aria-label="Menú móvil">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggler border-0"
            aria-label="Abrir menú"
            onClick={() => setAbierto(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand titulo mb-0">Admin Claudette</span>
        </div>
      </nav>

      {/* Menu lateral */}
      <Offcanvas
        show={abierto}
        onHide={cerrar}
        responsive="lg"
        className="sidebar-admin text-white"
        aria-labelledby="tituloMenuAdmin"
      >
        <Offcanvas.Header closeButton closeVariant="white" className="border-bottom border-light border-opacity-10">
          <Offcanvas.Title id="tituloMenuAdmin" className="titulo">Menú</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="flex-column p-3">
          <Link to="/admin/productos" className="d-none d-lg-block text-center mb-4">
            <img src="/img/ui/logo.jpeg" alt="Claudette" width="90" className="rounded-3" />
          </Link>

          <nav aria-label="Menú de administración" className="w-100">
            <Nav as="ul" className="flex-column gap-1 w-100">
              {enlaces.map((enlace) => (
                <Nav.Item as="li" key={enlace.ruta}>
                  <Nav.Link as={NavLink} to={enlace.ruta} end={enlace.ruta === '/'} onClick={cerrar}>
                    <i className={`bi ${enlace.icono} me-2`} aria-hidden="true"></i>
                    {enlace.texto}
                  </Nav.Link>
                </Nav.Item>
              ))}

              <Nav.Item as="li" className="mt-3">
                <Nav.Link as={Link} to="/admin" onClick={cerrar}>
                  <i className="bi bi-box-arrow-left me-2" aria-hidden="true"></i>Cerrar sesión
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MenuAdmin;
