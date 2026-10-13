import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function SobreNosotras() {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="titulo fw-bold text-bordo mb-3">Sobre nosotras</h2>
            <p className="text-secondary fs-5 mb-4">
              Somos una marca pensada para vos: prendas simples, cómodas y con onda para el día a día.
              Elegimos cada pieza con cuidado para que te sientas bien, sin vueltas.
            </p>
            <Button as={Link} to="/nosotros" variant="outline-primary" className="px-4">
              Conocer más
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SobreNosotras;
