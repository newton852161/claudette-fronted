import { Outlet } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion';
import PiePagina from './PiePagina';

// Estructura comun a todas las paginas: navbar arriba, footer abajo
// y en el medio (Outlet) la pagina que corresponda a la ruta.
function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BarraNavegacion />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <PiePagina />
    </div>
  );
}

export default Layout;
