import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { categorias } from '../data/productos';

function NoEncontrado({
  titulo = 'No encontramos esta página',
  mensaje = 'Seguí recorriendo la tienda desde nuestras categorías:',
}) {
  return (
    <main>
      <Container as="section" className="py-5 text-center">
        <h1 className="titulo text-bordo mb-3">{titulo}</h1>
        <p className="text-secondary mb-4">{mensaje}</p>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categorias.map((categoria) => (
            <Button
              key={categoria.slug}
              as={Link}
              to={`/categoria/${categoria.slug}`}
              variant="outline-primary"
            >
              {categoria.nombre}
            </Button>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default NoEncontrado;
