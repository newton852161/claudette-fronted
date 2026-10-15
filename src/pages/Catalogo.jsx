import EncabezadoCatalogo from '../components/catalogo/EncabezadoCatalogo'
import CategoriasAcordeon from '../components/catalogo/CategoriasAcordeon'
import GrillaProductos from '../components/catalogo/GrillaProductos'
import { productos } from '../data/productos'

function Catalogo() {
  const destacados = productos.slice(0, 6)

  return (
    <main>
      <EncabezadoCatalogo
        titulo="Catálogo"
        subtitulo="Descubrí nuestra colección de indumentaria femenina."
      />

      <section className="container py-5">
        <div className="mb-5">
          <CategoriasAcordeon />
        </div>

        <div className="text-center mb-4">
          <h2 className="titulo fw-bold text-bordo mb-1">Productos destacados</h2>
          <p className="text-secondary mb-0">
            Mostrando {destacados.length} productos
          </p>
        </div>

        <GrillaProductos productos={destacados} />
      </section>
    </main>
  )
}

export default Catalogo