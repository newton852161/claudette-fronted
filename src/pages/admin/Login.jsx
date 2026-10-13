/*const Login = () => {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
    </div>
  );
};

export default Login;*/

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/admin/productos');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#f8f9fa' // Fondo claro general
    }}>
      <div style={{
        background: '#ffffff',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center'
      }}>
        {/* Logo 'Claudette' central */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#c4e0ce', // Verde salvia suave del logo
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2rem',
            color: '#1a1a1a',
            fontWeight: '600',
            fontFamily: 'serif' // Tipografía para simular el logo
          }}>
            Claudette
          </div>
        </div>

        <h2 style={{
          marginBottom: '2rem',
          color: '#800000', // Burdeos del título
          fontSize: '1.8rem',
          fontWeight: '700',
          fontFamily: 'Playfair Display, serif' // Fuente elegante para el título
        }}>
          Iniciar Sesión Admin
        </h2>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555', fontWeight: '500', textAlign: 'left' }}>
              Nombre de Usuario / Correo
            </label>
            <input 
              type="text" 
              placeholder="ej. admin@claudette.com" 
              style={{
                width: '100%',
                padding: '1rem',
                border: '1.5px solid #d4af37', // Borde dorado suave
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#fffcf5' // Ligero tono beige de fondo
              }} 
            />
          </div>

          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555', fontWeight: '500', textAlign: 'left' }}>
              Contraseña
            </label>
            <input 
              type="password" 
              placeholder="********" 
              style={{
                width: '100%',
                padding: '1rem',
                border: '1.5px solid #d4af37', // Borde dorado suave
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#fffcf5' // Ligero tono beige de fondo
              }} 
            />
          </div>

          <button 
            type="submit" 
            style={{
              padding: '1rem',
              backgroundColor: '#800000', // Burdeos del botón
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '1rem',
              fontFamily: 'Playfair Display, serif', // Fuente elegante para el botón
              transition: 'background-color 0.2s',
              textTransform: 'uppercase', // Texto en mayúsculas como en el diseño
              letterSpacing: '1px' // Espaciado de letras
            }}
          >
            Acceder al Panel Claudette
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;