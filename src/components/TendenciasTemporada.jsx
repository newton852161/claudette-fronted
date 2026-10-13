import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const API_URL = import.meta.env.VITE_API_URL;

function TendenciasTemporada() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controlador = new AbortController();

    async function cargarProductos() {
      try {
        const respuesta = await axios.get(
          `${API_URL}/products/category/${encodeURIComponent("women's clothing")}`,
          { signal: controlador.signal }
        );
        setProductos(respuesta.data);
      } catch (err) {
        if (axios.isCancel(err)) return;
        setError(true);
        Swal.fire({
          icon: 'error',
          title: 'No pudimos cargar las tendencias',
          text: 'Revisá tu conexión e intentá de nuevo en unos minutos.',
          confirmButtonColor: '#6f3f46',
        });
      } finally {
        if (!controlador.signal.aborted) setCargando(false);
      }
    }

    cargarProductos();

    return () => controlador.abort();
  }, []);

  return (
    <section className="py-5">
      <Container>
        <h2 className="titulo text-center text-bordo mb-4">Tendencias de la temporada</h2>

        {cargando && (
          <div className="text-center py-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando productos...</span>
            </Spinner>
          </div>
        )}

        {error && (
          <p className="text-center text-secondary">
            Por ahora no podemos mostrar las tendencias.
          </p>
        )}

        <Row className="g-4">
          {productos.map((producto) => (
            <Col md={4} key={producto.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={producto.image}
                  alt={producto.title}
                  className="p-3 object-fit-contain"
                  style={{ height: 220 }}
                />
                <Card.Body>
                  <Card.Title as="h3" className="h6">{producto.title}</Card.Title>
                  <Card.Text className="fw-bold text-bordo">US$ {producto.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TendenciasTemporada;