import Card from 'react-bootstrap/Card';

function ValorCard({ titulo, texto }) {
  return (
    <Card className="h-100 text-center shadow-sm">
      <Card.Body>
        <Card.Title as="h3" className="h5">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ValorCard;