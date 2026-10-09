import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import TarjetaProducto from '../TarjetaProducto';
import { productos } from '../../data/productos';

const IDS_DESTACADOS = [1, 2, 3, 4];

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function Destacados() {
  const [busqueda, setBusqueda] = useState('');
  const [orden, setOrden] = useState('destacado');

  const destacados = productos.filter((producto) => IDS_DESTACADOS.includes(producto.id));

  const filtrados = destacados.filter((producto) =>
    normalizar(producto.nombre).includes(normalizar(busqueda.trim()))
  );

  const visibles = [...filtrados];
  if (orden === 'menor') {
    visibles.sort((a, b) => a.precio - b.precio);
  } else if (orden === 'mayor') {
    visibles.sort((a, b) => b.precio - a.precio);
  }

  return (
    <section className="bg-beige py-5">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
          <div>
            <h2 className="titulo fw-bold text-bordo mb-1">Destacados</h2>
            <p className="text-secondary mb-0">Lo más elegido de la temporada</p>
          </div>
          <Link to="/catalogo" className="link-ver fw-semibold text-decoration-none">
            Ver todo el catálogo <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>

        {/* Buscador y orden */}
        <Row className="g-2 mb-4">
          <Col md={7}>
            <Form.Label htmlFor="buscadorProductos" visuallyHidden>
              Buscar producto por nombre
            </Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-white border-end-0">
                <i className="bi bi-search text-secondary" aria-hidden="true"></i>
              </InputGroup.Text>
              <Form.Control
                type="search"
                id="buscadorProductos"
                placeholder="Buscar por nombre..."
                autoComplete="off"
                className="border-start-0 ps-0"
                value={busqueda}
                onChange={(evento) => setBusqueda(evento.target.value)}
              />
            </InputGroup>
          </Col>
          <Col md={5}>
            <Form.Label htmlFor="ordenProductos" visuallyHidden>
              Ordenar productos
            </Form.Label>
            <Form.Select
              id="ordenProductos"
              value={orden}
              onChange={(evento) => setOrden(evento.target.value)}
            >
              <option value="destacado">Orden por defecto</option>
              <option value="menor">Precio: de menor a mayor</option>
              <option value="mayor">Precio: de mayor a menor</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Grilla */}
        {visibles.length > 0 ? (
          <Row xs={1} sm={2} lg={4} className="g-4">
            {visibles.map((producto) => (
              <Col key={producto.id}>
                <TarjetaProducto producto={producto} />
              </Col>
            ))}
          </Row>
        ) : (
          <p className="text-center text-secondary py-4 mb-0">
            <i className="bi bi-search me-2" aria-hidden="true"></i>No encontramos productos con ese nombre.
          </p>
        )}
      </Container>
    </section>
  );
}

export default Destacados;
