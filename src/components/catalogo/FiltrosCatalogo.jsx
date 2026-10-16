import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { categorias } from '../../data/productos'

function FiltrosCatalogo({
  categoriaActiva,
  onCambiarCategoria,
  busqueda,
  onCambiarBusqueda,
}) {
  return (
    <div className="mb-4">
      <Form.Control
        type="search"
        placeholder="Buscar producto..."
        aria-label="Buscar producto"
        value={busqueda}
        onChange={(evento) => onCambiarBusqueda(evento.target.value)}
        className="mb-3"
      />

      <div className="d-flex flex-wrap gap-2">
        <Button
          variant={categoriaActiva === 'todas' ? 'primary' : 'outline-primary'}
          onClick={() => onCambiarCategoria('todas')}
        >
          Todas
        </Button>

        {categorias.map((categoria) => (
          <Button
            key={categoria.slug}
            variant={categoriaActiva === categoria.slug ? 'primary' : 'outline-primary'}
            onClick={() => onCambiarCategoria(categoria.slug)}
          >
            {categoria.nombre}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FiltrosCatalogo