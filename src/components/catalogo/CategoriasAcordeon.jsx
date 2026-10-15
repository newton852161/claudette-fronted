import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { categorias } from '../../data/productos'

function CategoriasAcordeon() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <i className="bi bi-tags me-2"></i>Categorías de ropa
        </Accordion.Header>
        <Accordion.Body>
          <Row xs={2} md={3} lg={5} className="g-2">
            {categorias.map((categoria) => (
              <Col key={categoria.slug}>
                <Link
                  to={`/categoria/${categoria.slug}`}
                  className="btn btn-outline-primary w-100"
                >
                  {categoria.nombre}
                </Link>
              </Col>
            ))}
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default CategoriasAcordeon