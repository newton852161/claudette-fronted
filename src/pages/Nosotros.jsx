import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ValorCard from "../components/ValorCard";
import { useEffect } from "react";

const valores = [
  {
    titulo: "Calidad",
    texto: "Seleccionamos cada prenda pensando en durabilidad y estilo.",
    detalle: "Trabajamos con proveedores de confianza y revisamos cada prenda antes de publicarla, para que lo que ves en la foto sea lo que recibís.",
  },
  {
    titulo: "Cercanía",
    texto: "Atención personalizada, como siempre lo hicimos por Instagram.",
    detalle: "Respondemos por WhatsApp e Instagram el mismo día y te ayudamos a elegir talle o color si tenés dudas antes de comprar.",
  },
  {
    titulo: "Compromiso",
    texto: "Trabajamos para que cada clienta se sienta cómoda y bien atendida.",
    detalle: "Si algo no te queda bien, tenés 30 días para cambiarlo. Tu comodidad es lo primero.",
  },
];

function Nosotros() {
  useEffect(() => {
    const metaDescripcion = document.querySelector('meta[name="description"]');
    const tituloAnterior = document.title;
    const descripcionAnterior = metaDescripcion?.getAttribute("content");

    document.title = "Nosotros | Claudette - Historia y valores de la marca";
    metaDescripcion?.setAttribute(
      "content",
      "Conocé la historia de Claudette, tienda de ropa y accesorios de mujer en Tucumán, y los valores que nos representan: calidad, cercanía y compromiso.",
    );

    return () => {
      document.title = tituloAnterior;
      metaDescripcion?.setAttribute("content", descripcionAnterior);
    };
  }, []);
  return (
    <main className="main-nosotros">
      <section className="py-5">
        <Container>
          <h1 className="titulo text-center mb-4">Nuestra historia</h1>
          <Row className="align-items-center g-4 bg-light rounded-3 p-4">
            <Col md={5}>
              <img
                src="/img/local/images.jpg"
                className="img-fluid rounded-3"
                alt="Claudia en su local de ropa"
              />
            </Col>
            <Col md={7}>
              <p>
                Claudette empezó vendiendo ropa por Instagram, con mucho
                esfuerzo y dedicación, hasta convertirse en un emprendimiento
                propio.
              </p>
              <p className="mb-0">
                Hoy seguimos con la misma esencia de siempre: cercanía, calidad
                y buen trato con cada clienta.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 valores-marca">
        <Container>
          <h2 className="titulo text-center text-bordo mb-4">
            Lo que nos representa
          </h2>
          <Row className="g-4">
            {valores.map((valor) => (
              <Col md={4} key={valor.titulo}>
                <ValorCard titulo={valor.titulo} texto={valor.texto} detalle={valor.detalle} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center">
        <Container>
          <h2 className="titulo text-bordo mb-3">¿Querés conocernos más?</h2>
          <p className="mb-4">
            Seguinos en nuestras redes o escribinos directamente, estamos para
            ayudarte a encontrar tu estilo.
          </p>
          <Button variant="primary" size="lg" href="#contactos">
            Contactanos
          </Button>
        </Container>
      </section>
    </main>
  );
}

export default Nosotros;