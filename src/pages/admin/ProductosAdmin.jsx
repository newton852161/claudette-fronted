/*const ProductosAdmin = () => {
  return (
    <div>
      <h2>Administración de Productos</h2>
    </div>
  );
};

export default ProductosAdmin;*/

import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductosAdmin = () => {
  // Datos de ejemplo para visualizar el panel
  const [productos] = useState([
    { id: 1, nombre: 'Vestido Seda Rosa', categoria: 'Vestidos', precio: '$12.500', stock: 8 },
    { id: 2, nombre: 'Blusa Lino Crema', categoria: 'Blusas', precio: '$8.200', stock: 15 },
    { id: 3, nombre: 'Tapado Lana Pastel', categoria: 'Abrigos', precio: '$24.000', stock: 3 },
  ]);

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Encabezado con título y botón de acción */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        borderBottom: '1px solid #e8dfd8',
        paddingBottom: '1rem'
      }}>
        <div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            color: '#800000',
            fontSize: '2rem',
            margin: 0
          }}>
            Catálogo de Productos
          </h1>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Gestiona las prendas y colecciones de Claudette Boutique
          </p>
        </div>

        <Link
          to="/admin/productos/nuevo"
          style={{
            backgroundColor: '#800000',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '0.5px'
          }}
        >
          + Agregar Producto
        </Link>
      </div>

      {/* Tabla de Productos estilizada */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        border: '1px solid #f0e8e0'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#faf6f0', borderBottom: '1px solid #e8dfd8' }}>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>ID</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Producto</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Categoría</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Precio</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Stock</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <tr key={prod.id} style={{ borderBottom: '1px solid #f5eee8' }}>
                <td style={{ padding: '1rem', color: '#777', fontSize: '0.9rem' }}>#{prod.id}</td>
                <td style={{ padding: '1rem', fontWeight: '600', color: '#333' }}>{prod.nombre}</td>
                <td style={{ padding: '1rem', color: '#666', fontSize: '0.9rem' }}>{prod.categoria}</td>
                <td style={{ padding: '1rem', color: '#800000', fontWeight: '600' }}>{prod.precio}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{
                    backgroundColor: prod.stock > 5 ? '#e8f5e9' : '#ffebee',
                    color: prod.stock > 5 ? '#2e7d32' : '#c62828',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {prod.stock} un.
                  </span>
                </td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <Link
                    to={`/admin/productos/${prod.id}/editar`}
                    style={{
                      marginRight: '0.8rem',
                      color: '#2c3e50',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => alert(`Eliminar producto ${prod.id}`)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#d9534f',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductosAdmin;