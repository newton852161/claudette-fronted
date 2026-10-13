import { useEffect } from 'react';

function EncabezadoAdmin({ titulo, children }) {
  // SEO: titulo de la pestaña
  useEffect(() => {
    const tituloAnterior = document.title;
    document.title = `${titulo} | Admin Claudette`;

    return () => {
      document.title = tituloAnterior;
    };
  }, [titulo]);

  return (
    <header className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
      <h1 className="titulo h2 fw-bold text-bordo mb-0">{titulo}</h1>
      {children}
    </header>
  );
}

export default EncabezadoAdmin;
