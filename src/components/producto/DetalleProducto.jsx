import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import MigaDePan from './MigaDePan';
import SelectorTalle from './SelectorTalle';
import SelectorCantidad from './SelectorCantidad';
import { formatearPrecio } from '../../utils/formatearPrecio';

const NUMERO_WHATSAPP = '5493815551234';

function DetalleProducto({ producto }) {
  // Estado: lo que elige la clienta y cambia la pantalla.
  const [talle, setTalle] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [mostrarAvisoTalle, setMostrarAvisoTalle] = useState(false);

  // El total NO es estado: se calcula a partir del precio y la cantidad.
  const total = producto.precio * cantidad;

  // Efecto: cada vez que cambia el producto mostrado, actualizamos el
  // titulo de la pestaña y la meta description (SEO). Al salir de la
  // pagina restauramos los valores originales.
  useEffect(() => {
    const metaDescripcion = document.querySelector('meta[name="description"]');
    const tituloAnterior = document.title;
    const descripcionAnterior = metaDescripcion?.getAttribute('content');

    document.title = `${producto.nombre} | Claudette`;
    metaDescripcion?.setAttribute('content', producto.descripcion);

    return () => {
      document.title = tituloAnterior;
      metaDescripcion?.setAttribute('content', descripcionAnterior);
    };
  }, [producto]);

  function seleccionarTalle(nuevoTalle) {
    setTalle(nuevoTalle);
    setMostrarAvisoTalle(false);
  }

  const mensaje =
    `Hola! Quiero consultar por: ${producto.nombre}\n` +
    `Talle: ${talle}\n` +
    `Cantidad: ${cantidad}\n` +
    `Total aproximado: ${formatearPrecio(total)}`;
  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  function consultar(evento) {
    if (!talle) {
      evento.preventDefault();
      setMostrarAvisoTalle(true);
    }
  }

  return (
    <main>
      <Container as="section" className="py-5">
        <MigaDePan
          items={[
            { texto: 'Inicio', ruta: '/' },
            { texto: 'Catálogo', ruta: '/catalogo' },
            { texto: producto.nombre },
          ]}
        />

        <Row className="g-4 g-lg-5">
          <Col lg={6}>
            <img
              src={producto.imagen}
              alt={`${producto.nombre} - Claudette`}
              className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover"
            />
          </Col>

          <Col lg={6}>
            <h1 className="titulo fw-bold text-bordo mb-2">{producto.nombre}</h1>
            <p className="fs-3 fw-bold text-bordo mb-1">{formatearPrecio(producto.precio)}</p>
            <p className="text-secondary small mb-4">En stock</p>

            <SelectorTalle
              talles={producto.talles}
              talleSeleccionado={talle}
              onSeleccionar={seleccionarTalle}
              mostrarAviso={mostrarAvisoTalle}
            />

            <SelectorCantidad cantidad={cantidad} onCambiar={setCantidad} />

            <p className="fw-semibold mb-4">
              Total: <span className="text-bordo">{formatearPrecio(total)}</span>
            </p>

            <Button
              href={urlWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-100 mb-4"
              onClick={consultar}
            >
              <i className="bi bi-whatsapp me-1" aria-hidden="true"></i>Consultar por WhatsApp
            </Button>

            <h2 className="h5 fw-semibold mb-2">Descripción</h2>
            <p className="text-secondary mb-0">{producto.descripcion}</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default DetalleProducto;
