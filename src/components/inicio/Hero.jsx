import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-beige">
      <Container className="py-4 py-lg-5">
        <Row className="g-0 align-items-stretch bg-white rounded-4 overflow-hidden shadow-sm">
          <Col lg={6}>
            <img
              src="/img/productos/Imagen.jpeg"
              className="w-100 h-100 object-fit-cover hero-img"
              alt="Colección de nueva temporada de Claudette"
            />
          </Col>

          <Col lg={6} className="d-flex flex-column justify-content-center p-4 p-md-5 text-center text-lg-start">
            <p className="text-uppercase small fw-semibold text-rosa ls-1 mb-2">Nueva temporada</p>
            <h1 className="titulo display-3 fw-bold text-bordo mb-3">Claudette</h1>
            <p className="lead text-secondary mb-4">
              Ropa y accesorios de mujer. Prendas simples, cómodas y con onda para el día a día.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
              <Button as={Link} to="/catalogo" size="lg" className="px-4">
                Ver catálogo
              </Button>
              <Button as={Link} to="/nosotros" variant="outline-primary" size="lg" className="px-4">
                Conocer la marca
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
