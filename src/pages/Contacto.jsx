import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormularioContacto from '../components/contacto/FormularioContacto';
import OtrosMedios from '../components/contacto/OtrosMedios';
import './Contacto.css';

function Contacto() {
  // SEO
  useEffect(() => {
    const metaDescripcion = document.querySelector('meta[name="description"]');
    const tituloAnterior = document.title;
    const descripcionAnterior = metaDescripcion?.getAttribute('content');

    document.title = 'Contacto | Claudette';
    metaDescripcion?.setAttribute(
      'content',
      'Contactate con Claudette por WhatsApp, Instagram o email. Consultas sobre productos, talles, envíos y cambios.'
    );

    return () => {
      document.title = tituloAnterior;
      metaDescripcion?.setAttribute('content', descripcionAnterior);
    };
  }, []);

  return (
    <main>
      {/* Encabezado */}
      <section className="bg-beige py-5">
        <Container className="text-center">
          <h1 className="titulo display-5 fw-bold text-bordo mb-2">Contacto</h1>
          <p className="lead text-secondary mb-0">Escribinos y te respondemos a la brevedad.</p>
        </Container>
      </section>

      {/* Formulario y otros medios */}
      <Container as="section" className="py-5">
        <Row className="g-4 align-items-start">
          <Col lg={8}>
            <FormularioContacto />
          </Col>
          <Col lg={4} as="aside">
            <OtrosMedios />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contacto;
