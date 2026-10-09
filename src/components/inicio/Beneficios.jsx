import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const beneficios = [
  { icono: 'bi-truck', titulo: 'Envíos', texto: 'A todo el país' },
  { icono: 'bi-arrow-repeat', titulo: 'Cambios', texto: 'Dentro de los 30 días' },
  { icono: 'bi-chat-dots', titulo: 'Atención', texto: 'Por WhatsApp e Instagram' },
];

function Beneficios() {
  return (
    <section className="bg-rosa-claro py-5">
      <Container>
        <Row xs={1} md={3} className="g-4 text-center">
          {beneficios.map((beneficio) => (
            <Col key={beneficio.titulo}>
              <div className="p-3">
                <i className={`bi ${beneficio.icono} fs-1 text-bordo`} aria-hidden="true"></i>
                <h3 className="h5 fw-semibold text-bordo mt-3 mb-1">{beneficio.titulo}</h3>
                <p className="text-secondary mb-0">{beneficio.texto}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Beneficios;
