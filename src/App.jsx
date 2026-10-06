import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Nosotros from './pages/Nosotros';
import Producto from './pages/Producto';
import Categoria from './pages/Categoria';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Cuando se migre Inicio, reemplazar esta redireccion por su pagina */}
          <Route path="/" element={<Navigate to="/nosotros" replace />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/categoria/:categoria" element={<Categoria />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
