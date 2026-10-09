import { useEffect } from 'react';
import Hero from '../components/inicio/Hero';
import Categorias from '../components/inicio/Categorias';
import Destacados from '../components/inicio/Destacados';
import SobreNosotras from '../components/inicio/SobreNosotras';
import Beneficios from '../components/inicio/Beneficios';
import './Inicio.css';

function Inicio() {
  // SEO
  useEffect(() => {
    const metaDescripcion = document.querySelector('meta[name="description"]');
    const tituloAnterior = document.title;
    const descripcionAnterior = metaDescripcion?.getAttribute('content');

    document.title = 'Inicio | Claudette - Ropa y accesorios de mujer en Tucumán';
    metaDescripcion?.setAttribute(
      'content',
      'Descubrí la nueva temporada de Claudette: vestidos, remeras, pantalones, abrigos y calzado. Consultas por WhatsApp y envíos a todo el país.'
    );

    return () => {
      document.title = tituloAnterior;
      metaDescripcion?.setAttribute('content', descripcionAnterior);
    };
  }, []);

  return (
    <main>
      <Hero />
      <Categorias />
      <Destacados />
      <SobreNosotras />
      <Beneficios />
    </main>
  );
}

export default Inicio;
