import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { formatearPrecio } from '../../utils/formatearPrecio';
import { buscarCategoria } from '../../data/productos';
import { STOCK_BAJO } from './admin-claudette-react/admin-claudette/src/data/inventario';

function FilaProducto({ producto, onCambiarEstado }) {
  const estaActivo = producto.estado === 'activo';
  const stockBajo = producto.stock <= STOCK_BAJO;
  const categoria = buscarCategoria(producto.categoria);

  return (
    <tr>
      <td className="text-secondary">{producto.id}</td>
      <td className="fw-semibold">{producto.nombre}</td>
      <td className="text-secondary">{categoria ? categoria.nombre : producto.categoria}</td>
      <td className="text-end">{formatearPrecio(producto.precio)}</td>
      <td className={stockBajo ? 'text-end text-danger fw-bold' : 'text-end'}>{producto.stock}</td>
      <td>
        <Badge pill bg={estaActivo ? 'success' : 'secondary'}>
          {estaActivo ? 'Activo' : 'Pausado'}
        </Badge>
      </td>
      <td className="text-end text-nowrap">
        <Button
          as={Link}
          to={`/admin/productos/${producto.id}/editar`}
          size="sm"
          variant="outline-primary"
          className="me-1"
        >
          <i className="bi bi-pencil" aria-hidden="true"></i>
          <span className="d-none d-xl-inline ms-1">Editar</span>
        </Button>
        <Button
          size="sm"
          variant={estaActivo ? 'outline-danger' : 'outline-success'}
          onClick={() => onCambiarEstado(producto.id)}
        >
          <i className={estaActivo ? 'bi bi-pause' : 'bi bi-play'} aria-hidden="true"></i>
          <span className="d-none d-xl-inline ms-1">{estaActivo ? 'Pausar' : 'Activar'}</span>
        </Button>
      </td>
    </tr>
  );
}

export default FilaProducto;
