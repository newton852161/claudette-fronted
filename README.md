# Claudette — Tienda de ropa de mujer

Sitio web de **Claudette**, una tienda de ropa y accesorios de mujer de San Miguel de Tucumán que hasta ahora vendía solo por Instagram. El sitio funciona como carta de presentación: las clientas pueden ver los productos, elegir talle y cantidad, y consultar directamente por WhatsApp.

Este es el **Repositorio N.º 2**: la migración a **React + Vite** del proyecto hecho en HTML, CSS y JavaScript ([repositorio 1](https://github.com/alvsantillan/tp-programacion)).

## Funcionalidades

- **Detalle de producto** (`/producto/:id`): foto, precio, descripción, selector de talle y cantidad, total calculado en vivo y botón de consulta por WhatsApp con el pedido ya escrito.
- **Categorías** (`/categoria/:categoria`): remeras, vestidos, pantalones, abrigos y calzado, cada una con su producto destacado.
- **Validación de talle**: no se puede consultar sin elegir un talle.
- **Título y descripción por página** para buscadores (SEO).
- **Nosotros** (`/nosotros`): historia y valores de la marca.
- Página de **no encontrado** para rutas o productos inexistentes.

## Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Bootstrap](https://react-bootstrap.netlify.app/) y Bootstrap 5
- [React Router](https://reactrouter.com/) para la navegación
- Bootstrap Icons y Google Fonts (Playfair Display y Poppins)
- Deploy en [Vercel](https://vercel.com/)

## Instalación y ejecución

Requisitos: tener instalado [Node.js](https://nodejs.org/) (versión 20 o superior).

```bash
git clone https://github.com/newton852161/claudette-fronted.git
cd claudette-fronted
npm install
npm run dev
```

Después abrir en el navegador la dirección que muestra la terminal (por defecto `http://localhost:5173`).

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve la versión de producción localmente |
| `npm run lint` | Revisa el código con ESLint |

## Rutas

| Ruta | Página |
|---|---|
| `/nosotros` | Nosotros |
| `/producto/:id` | Detalle de un producto (ids del 1 al 10) |
| `/categoria/:categoria` | `remeras`, `vestidos`, `pantalones`, `abrigos`, `calzados` |
| cualquier otra | No encontrado |

## Estructura de carpetas

```
claudette-fronted/
├── public/
│   └── img/              # Imágenes (ui, productos, local)
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── producto/     # Piezas del detalle de producto
│   │   ├── BarraNavegacion.jsx
│   │   ├── PiePagina.jsx
│   │   ├── Layout.jsx
│   │   └── ValorCard.jsx
│   ├── data/             # Datos de productos y categorías
│   ├── pages/            # Una página por vista
│   ├── utils/            # Funciones de ayuda
│   ├── App.jsx           # Definición de rutas
│   ├── main.jsx
│   └── index.css         # Estilos globales y paleta de la marca
├── index.html
├── vercel.json           # Redirige todas las rutas a index.html (necesario para React Router)
└── package.json
```

## Equipo — Comisión 6

- David Villarreal
- Alvaro Santillán
- Desiree Sanchez
- Patricio Yuretic
- Ignacio (Nachoide)
