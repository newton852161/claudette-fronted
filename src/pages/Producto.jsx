import { useParams } from 'react-router-dom';
import DetalleProducto from '../components/producto/DetalleProducto';
import NoEncontrado from './NoEncontrado';
import { buscarProductoPorId } from '../data/productos';

// Ruta: /producto/:id  (antes producto.html?id=1)
function Producto() {
  const { id } = useParams();
  const producto = buscarProductoPorId(id);

  if (!producto) {
    return (
      <NoEncontrado
        titulo="No encontramos ese producto"
        mensaje="Puede que ya no esté disponible. Mirá nuestras categorías:"
      />
    );
  }

  // key: si se pasa de un producto a otro, React crea el detalle de nuevo
  // y el talle y la cantidad elegidos vuelven a empezar.
  return <DetalleProducto key={producto.id} producto={producto} />;
}

export default Producto;
