import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MenuAdmin from './MenuAdmin';
import { inventarioInicial } from '../../data/productos';
//import { inventarioInicial } from '../../data/inventario'
//import '../../pages/admin/Admin.css';

function AdminLayout() {
  const [productos, setProductos] = useState(inventarioInicial);

  // SEO: el panel no se indexa en buscadores
  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      metaRobots.remove();
    };
  }, []);

  return (
    <div className="d-lg-flex min-vh-100">
      <MenuAdmin />
      <main className="contenido-admin flex-grow-1 p-3 p-md-4 p-lg-5">
        <Outlet context={{ productos, setProductos }} />
      </main>
    </div>
  );
}

export default AdminLayout;
