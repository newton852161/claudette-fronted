import { useEffect, useState } from 'react'
import EncabezadoCatalogo from '../components/catalogo/EncabezadoCatalogo'
import CategoriasAcordeon from '../components/catalogo/CategoriasAcordeon'
import FiltrosCatalogo from '../components/catalogo/FiltrosCatalogo'
import GrillaProductos from '../components/catalogo/GrillaProductos'
import TendenciasTemporada from "../components/TendenciasTemporada";
import { categorias, productos } from '../data/productos'

const CLAVE_FILTRO = 'claudette_categoria_catalogo'

function leerCategoriaGuardada() {
  const guardada = localStorage.getItem(CLAVE_FILTRO)
  const existe = categorias.some((categoria) => categoria.slug === guardada)
  return existe ? guardada : 'todas'
}

function Catalogo() {
  const [categoriaActiva, setCategoriaActiva] = useState(leerCategoriaGuardada)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const metaDescripcion = document.querySelector('meta[name="description"]')
    const tituloAnterior = document.title
    const descripcionAnterior = metaDescripcion?.getAttribute('content')

    document.title = 'Catálogo | Claudette - Ropa y accesorios de mujer'
    metaDescripcion?.setAttribute(
      'content',
      'Mirá el catálogo de Claudette: vestidos, remeras, pantalones, abrigos y calzado de mujer en San Miguel de Tucumán.',
    )

    return () => {
      document.title = tituloAnterior
      metaDescripcion?.setAttribute('content', descripcionAnterior)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(CLAVE_FILTRO, categoriaActiva)
  }, [categoriaActiva])

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaActiva === 'todas' || producto.categoria === categoriaActiva
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

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
          <h2 className="titulo fw-bold text-bordo mb-1">Nuestros productos</h2>
          <p className="text-secondary mb-0">
            Mostrando {productosFiltrados.length} productos
          </p>
        </div>

        <FiltrosCatalogo
          categoriaActiva={categoriaActiva}
          onCambiarCategoria={setCategoriaActiva}
          busqueda={busqueda}
          onCambiarBusqueda={setBusqueda}
        />

        {productosFiltrados.length > 0 ? (
          <GrillaProductos productos={productosFiltrados} />
        ) : (
          <p className="text-center text-secondary py-5">
            No encontramos productos con esa búsqueda.
          </p>
        )}
      </section>
      <TendenciasTemporada />
      <section className="py-5 text-center">
        <Container>
          <h2 className="titulo text-bordo mb-3">¿Querés conocernos más?</h2>
          <p className="mb-4">
            Seguinos en nuestras redes o escribinos directamente, estamos para
            ayudarte a encontrar tu estilo.
          </p>
          <Button variant="primary" size="lg" href="#contactos">
            Contactanos
          </Button>
        </Container>
      </section>
    </main>
  )
}

export default Catalogo