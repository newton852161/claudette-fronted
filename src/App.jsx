import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Producto from './pages/Producto';
import Categoria from './pages/Categoria';
import NoEncontrado from './pages/NoEncontrado';

import AdminLayout from './components/admin/AdminLayout';
import Login from './pages/admin/Login';
import ProductosAdmin from './pages/admin/ProductosAdmin';
import ProductoForm from './pages/admin/ProductoForm';
import Clientes from './pages/admin/Clientes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/categoria/:categoria" element={<Categoria />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
 
      <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<Login />} />
  <Route path="productos" element={<ProductosAdmin />} />
  <Route path="productos/nuevo" element={<ProductoForm />} />
  <Route path="productos/:id/editar" element={<ProductoForm />} />
  <Route path="clientes" element={<Clientes />} />
</Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
