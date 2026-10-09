import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { formatearPrecio } from '../utils/formatearPrecio';

const NUMERO_WHATSAPP = '5493815551234';

function TarjetaProducto({ producto }) {
  const mensaje = `Hola! Quiero consultar por: ${producto.nombre}`;
  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  return (
    <Card as="article" className="card-producto h-100 border-0 shadow-sm rounded-4 overflow-hidden">
      <Link to={`/producto/${producto.id}`}>
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} className="object-fit-cover" />
      </Link>

      <Card.Body className="d-flex flex-column">
        <h3 className="h6 fw-semibold mb-1">
          <Link to={`/producto/${producto.id}`} className="text-reset text-decoration-none">
            {producto.nombre}
          </Link>
        </h3>
        <p className="fs-5 fw-bold text-bordo mb-3">{formatearPrecio(producto.precio)}</p>

        <ul className="list-unstyled d-flex flex-wrap gap-2 mb-3">
          {producto.talles.map((talle) => (
            <li key={talle}>
              <span className="badge rounded-pill text-bg-light border">{talle}</span>
            </li>
          ))}
        </ul>

        <Button
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-100 mt-auto"
        >
          <i className="bi bi-whatsapp me-1" aria-hidden="true"></i>Consultar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TarjetaProducto;
