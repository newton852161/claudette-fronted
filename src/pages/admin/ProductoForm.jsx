/*const ProductoForm = () => {
  return (
    <div>
      <h2>Formulario de Producto</h2>
    </div>
  );
};

export default ProductoForm;*/

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductoForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Si hay ID, estamos editando; si no, estamos creando

  // Estado local para los campos del producto
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: 'Vestidos',
    precio: '',
    stock: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes programar la lógica para guardar en tu backend o estado global
    alert(id ? 'Producto actualizado con éxito' : 'Producto creado con éxito');
    navigate('/admin/productos');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Encabezado */}
      <div style={{
        marginBottom: '2rem',
        borderBottom: '1px solid #e8dfd8',
        paddingBottom: '1rem'
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          color: '#800000',
          fontSize: '2rem',
          margin: 0
        }}>
          {id ? 'Editar Prenda' : 'Nuevo Producto'}
        </h1>
        <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.3rem' }}>
          {id ? 'Modifica los detalles de la prenda seleccionada' : 'Agrega una nueva prenda al catálogo de Claudette'}
        </p>
      </div>

      {/* Formulario */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f0e8e0'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', fontWeight: '600' }}>
                Nombre de la Prenda
              </label>
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="ej. Vestido Midi Floral" 
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d4af37',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  outline: 'none',
                  backgroundColor: '#fffcf5'
                }} 
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', fontWeight: '600' }}>
                Categoría
              </label>
              <select 
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d4af37',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  outline: 'none',
                  backgroundColor: '#fffcf5'
                }}
              >
                <option value="Vestidos">Vestidos</option>
                <option value="Blusas">Blusas</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Abrigos">Abrigos</option>
                <option value="Accesorios">Accesorios</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', fontWeight: '600' }}>
                Precio ($)
              </label>
              <input 
                type="number" 
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                placeholder="0.00" 
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d4af37',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  outline: 'none',
                  backgroundColor: '#fffcf5'
                }} 
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', fontWeight: '600' }}>
                Stock Disponible
              </label>
              <input 
                type="number" 
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="0" 
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d4af37',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  outline: 'none',
                  backgroundColor: '#fffcf5'
                }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#555', fontWeight: '600' }}>
              Descripción / Detalle de la prenda
            </label>
            <textarea 
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              placeholder="Material, talles disponibles, cuidados..." 
              rows="4"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d4af37',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none',
                backgroundColor: '#fffcf5',
                resize: 'vertical'
              }} 
            />
          </div>

          {/* Botones de acción */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button 
              type="button"
              onClick={() => navigate('/admin/productos')}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#666',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#800000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '0.5px'
              }}
            >
              {id ? 'Guardar Cambios' : 'Registrar Prenda'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductoForm;