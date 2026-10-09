import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { categorias, buscarProductoPorId } from '../../data/productos';

function Categorias() {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="titulo fw-bold text-bordo">Categorías</h2>
          <p className="text-secondary mb-0">Encontrá lo que buscás más rápido</p>
        </div>

        <Row xs={2} md={3} lg={5} className="g-4 justify-content-center">
          {categorias.map((categoria) => {
            const producto = buscarProductoPorId(categoria.productoDestacadoId);

            return (
              <Col key={categoria.slug}>
                <Link
                  to={`/categoria/${categoria.slug}`}
                  className="categoria d-block text-center text-decoration-none"
                >
                  <img
                    src={producto.imagen}
                    className="img-categoria rounded-circle object-fit-cover mx-auto d-block"
                    alt={categoria.nombre}
                  />
                  <span className="d-block mt-3 fw-semibold text-bordo">{categoria.nombre}</span>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Categorias;
