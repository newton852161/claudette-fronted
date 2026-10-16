import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const formatoPrecio = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0,
})

function TarjetaProducto({ id, nombre, descripcion, precio, imagen }) {
  return (
    <Card
      as="article"
      className="card-producto h-100 border-0 shadow-sm rounded-4 overflow-hidden"
    >
      <Card.Img
        variant="top"
        src={imagen}
        alt={nombre}
        loading="lazy"
        className="object-fit-cover"
      />
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title as="h3" className="h5 fw-semibold text-bordo mb-2">
          {nombre}
        </Card.Title>
        <Card.Text className="text-secondary small flex-grow-1">
          {descripcion}
        </Card.Text>
        <p className="fs-5 fw-bold text-bordo mb-3">
          {formatoPrecio.format(precio)}
        </p>
        <Button
          as={Link}
          to={`/producto/${id}`}
          variant="primary"
          className="w-100 mt-auto"
        >
          Ver producto
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TarjetaProducto