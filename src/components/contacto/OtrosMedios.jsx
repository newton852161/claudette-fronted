import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const medios = [
  { icono: 'bi-whatsapp', titulo: 'WhatsApp', texto: '+54 9 381 555-1234', url: 'https://wa.me/5493815551234' },
  { icono: 'bi-instagram', titulo: 'Instagram', texto: '@claudette.r.h', url: 'https://www.instagram.com/claudette.r.h' },
  { icono: 'bi-envelope', titulo: 'Email', texto: 'hola@claudette.com', url: 'mailto:hola@claudette.com' },
];

function OtrosMedios() {
  return (
    <Card className="border-0 rounded-4 bg-rosa-claro h-100">
      <Card.Body className="p-4">
        <h2 className="titulo h4 fw-bold text-bordo mb-4">Otros medios</h2>

        <ul className="list-unstyled d-flex flex-column gap-4 mb-4">
          {medios.map((medio) => (
            <li key={medio.titulo} className="d-flex gap-3">
              <i className={`bi ${medio.icono} fs-4 text-bordo`} aria-hidden="true"></i>
              <div>
                <h3 className="h6 fw-semibold text-bordo mb-1">{medio.titulo}</h3>
                <a
                  href={medio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-decoration-none"
                >
                  {medio.texto}
                </a>
              </div>
            </li>
          ))}

          <li className="d-flex gap-3">
            <i className="bi bi-clock fs-4 text-bordo" aria-hidden="true"></i>
            <div>
              <h3 className="h6 fw-semibold text-bordo mb-1">Horarios</h3>
              <p className="text-secondary mb-0">
                Lunes a viernes de 9 a 18 h<br />Sábados de 9 a 13 h
              </p>
            </div>
          </li>
        </ul>

        <Button
          href="https://wa.me/5493815551234"
          target="_blank"
          rel="noopener noreferrer"
          className="w-100"
        >
          <i className="bi bi-whatsapp me-1" aria-hidden="true"></i>Escribinos por WhatsApp
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OtrosMedios;
