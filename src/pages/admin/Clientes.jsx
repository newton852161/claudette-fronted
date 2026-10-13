/*const Clientes = () => {
  return (
    <div>
      <h2>Administración de Clientes</h2>
    </div>
  );
};

export default Clientes;*/

import { useState, useEffect } from 'react';

const Clientes = () => {
  // Datos de ejemplo para los clientes de la boutique
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Cargamos clientes guardados o usamos datos de ejemplo representativos
    const guardados = JSON.parse(localStorage.getItem('clientesClaudette')) || [
      { id: 1, nombre: 'Sofía Martínez', email: 'sofia.martinez@email.com', telefono: '+54 9 381 456-7890', compras: 4, totalGastado: '$65.000' },
      { id: 2, nombre: 'Lucía Fernández', email: 'lucia.f@email.com', telefono: '+54 9 381 234-5678', compras: 2, totalGastado: '$28.500' },
      { id: 3, nombre: 'Camila Gomez', email: 'camila.gomez@email.com', telefono: '+54 9 381 987-6543', compras: 6, totalGastado: '$112.000' },
      { id: 4, nombre: 'Valentina Rossi', email: 'vale.rossi@email.com', telefono: '+54 9 381 333-4444', compras: 1, totalGastado: '$12.500' },
    ];
    setClientes(guardados);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Encabezado elegante */}
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
            Administración de Clientes
          </h1>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Base de datos y fidelización de clientas de Claudette Boutique
          </p>
        </div>

        <div style={{
          backgroundColor: '#fffcf5',
          border: '1px solid #d4af37',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          fontSize: '0.9rem',
          color: '#800000',
          fontWeight: '600'
        }}>
          Total Clientas: {clientes.length}
        </div>
      </div>

      {/* Tabla de Clientes con diseño boutique */}
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
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Clienta</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Correo Electrónico</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Teléfono</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'center' }}>Compras</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase' }}>Total Invertido</th>
              <th style={{ padding: '1rem', color: '#555', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id} style={{ borderBottom: '1px solid #f5eee8' }}>
                <td style={{ padding: '1rem', fontWeight: '600', color: '#333' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#e8dfd8',
                      color: '#800000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      fontFamily: 'Playfair Display, serif'
                    }}>
                      {cliente.nombre.charAt(0)}
                    </div>
                    {cliente.nombre}
                  </div>
                </td>
                <td style={{ padding: '1rem', color: '#666', fontSize: '0.9rem' }}>{cliente.email}</td>
                <td style={{ padding: '1rem', color: '#666', fontSize: '0.9rem' }}>{cliente.telefono}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <span style={{
                    backgroundColor: '#fffcf5',
                    border: '1px solid #d4af37',
                    color: '#800000',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    {cliente.compras}
                  </span>
                </td>
                <td style={{ padding: '1rem', color: '#800000', fontWeight: '600' }}>{cliente.totalGastado}</td>
                <td style={{ padding: '1rem', textAlign: 'center' }}>
                  <button
                    onClick={() => alert(`Ver detalle de compras de ${cliente.nombre}`)}
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #800000',
                      color: '#800000',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      transition: 'all 0.2s'
                    }}
                  >
                    Ver Historial
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

export default Clientes;