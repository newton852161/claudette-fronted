import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ValorCard({ titulo, texto, detalle }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <Card className="h-100 text-center shadow-sm">
      <Card.Body>
        <Card.Title as="h3" className="h5">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>

        {abierto && <Card.Text className="small text-secondary">{detalle}</Card.Text>}

        <Button
          variant="link"
          className="p-0 btn-ver-mas"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
        >
          {abierto ? 'Ver menos' : 'Ver más'}
          <i className={`bi ms-1 ${abierto ? 'bi-chevron-up' : 'bi-chevron-down'}`} aria-hidden="true"></i>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ValorCard;