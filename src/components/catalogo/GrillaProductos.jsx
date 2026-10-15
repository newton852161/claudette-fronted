import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TarjetaProducto from './TarjetaProducto'

function GrillaProductos({ productos }) {
  return (
    <Row xs={1} sm={2} lg={3} className="g-4">
      {productos.map((producto) => (
        <Col key={producto.id}>
          <TarjetaProducto
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        </Col>
      ))}
    </Row>
  )
}

export default GrillaProductos