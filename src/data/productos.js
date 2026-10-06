// Datos de los productos de la tienda.
// Unifica lo que antes estaba repartido en producto.js (detalle por id)
// y producto-categoria.js (una pagina por categoria).

const TALLES_ROPA = ['S', 'M', 'L'];
const TALLES_CALZADO = ['36', '37', '38', '39', '40'];

export const productos = [
  {
    id: 1,
    nombre: 'Vestido Floral',
    precio: 45900,
    imagen: '/img/ui/claudete-vestido.jpg',
    descripcion: 'Vestido floral de temporada, ideal para ocasiones especiales.',
    categoria: 'vestidos',
    talles: TALLES_ROPA,
  },
  {
    id: 2,
    nombre: 'Blusa Elegance',
    precio: 32500,
    imagen: '/img/productos/Remera.jpeg',
    descripcion: 'Blusa elegante y cómoda para combinar con diferentes prendas.',
    categoria: 'remeras',
    talles: TALLES_ROPA,
  },
  {
    id: 3,
    nombre: 'Jean Classic',
    precio: 52900,
    imagen: '/img/productos/Pantalon.jpeg',
    descripcion: 'Jean clásico de corte moderno y cómodo.',
    categoria: 'pantalones',
    talles: TALLES_ROPA,
  },
  {
    id: 4,
    nombre: 'Campera Urbana',
    precio: 78900,
    imagen: '/img/ui/campera-jean-claudette.jpg',
    descripcion: 'Campera urbana para los días fríos.',
    categoria: 'abrigos',
    talles: TALLES_ROPA,
  },
  {
    id: 5,
    nombre: 'Top Básico',
    precio: 19900,
    imagen: '/img/productos/images.jpg',
    descripcion: 'Top básico y versátil para cualquier ocasión.',
    categoria: 'remeras',
    talles: TALLES_ROPA,
  },
  {
    id: 6,
    nombre: 'Abrigo Soft',
    precio: 89900,
    imagen: '/img/productos/abrigo.jpeg',
    descripcion: 'Abrigo cómodo y moderno para la temporada de invierno.',
    categoria: 'abrigos',
    talles: TALLES_ROPA,
  },
  {
    id: 7,
    nombre: 'Remera básica',
    precio: 18500,
    imagen: '/img/productos/Remera.jpeg',
    descripcion: 'Remera de algodón suave, corte clásico. Combina con todo y es ideal para el uso diario.',
    categoria: 'remeras',
    talles: TALLES_ROPA,
  },
  {
    id: 8,
    nombre: 'Vestido floreado',
    precio: 45000,
    imagen: '/img/ui/claudete-vestido.jpg',
    descripcion: 'Vestido floreado de tela liviana, corte suelto y mangas cortas. Ideal para primavera y verano.',
    categoria: 'vestidos',
    talles: TALLES_ROPA,
  },
  {
    id: 9,
    nombre: 'Pantalón de lino',
    precio: 38000,
    imagen: '/img/productos/Pantalon.jpeg',
    descripcion: 'Pantalón de lino fresco, corte recto y cómodo. Perfecto para los días de calor.',
    categoria: 'pantalones',
    talles: TALLES_ROPA,
  },
  {
    id: 10,
    nombre: 'Sandalias de verano',
    precio: 29000,
    imagen: '/img/productos/calzado.jpg',
    descripcion: 'Sandalias cómodas y livianas, pensadas para el día a día en la temporada cálida.',
    categoria: 'calzados',
    talles: TALLES_CALZADO,
  },
];

// Cada categoria muestra su producto destacado (igual que las paginas
// remeras.html, vestidos.html, etc. del repositorio 1).
export const categorias = [
  { slug: 'remeras', nombre: 'Remeras', productoDestacadoId: 7 },
  { slug: 'vestidos', nombre: 'Vestidos', productoDestacadoId: 8 },
  { slug: 'pantalones', nombre: 'Pantalones', productoDestacadoId: 9 },
  { slug: 'abrigos', nombre: 'Abrigos', productoDestacadoId: 6 },
  { slug: 'calzados', nombre: 'Calzado', productoDestacadoId: 10 },
];

export function buscarProductoPorId(id) {
  return productos.find((producto) => producto.id === Number(id));
}

export function buscarCategoria(slug) {
  return categorias.find((categoria) => categoria.slug === slug);
}
