import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';
import Categoria from './pages/Categoria';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/categoria/:categoria" element={<Categoria />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
