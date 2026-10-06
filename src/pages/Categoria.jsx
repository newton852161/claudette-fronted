import { useParams } from 'react-router-dom';
import DetalleProducto from '../components/producto/DetalleProducto';
import NoEncontrado from './NoEncontrado';
import { buscarCategoria, buscarProductoPorId } from '../data/productos';

// Ruta: /categoria/:categoria  (antes remeras.html, vestidos.html, etc.)
// Reutiliza el mismo DetalleProducto con el producto destacado de la categoria.
function Categoria() {
  const { categoria } = useParams();
  const datosCategoria = buscarCategoria(categoria);

  if (!datosCategoria) {
    return (
      <NoEncontrado
        titulo="Esa categoría no existe"
        mensaje="Estas son las categorías que tenemos:"
      />
    );
  }

  const producto = buscarProductoPorId(datosCategoria.productoDestacadoId);

  return <DetalleProducto key={producto.id} producto={producto} />;
}

export default Categoria;
