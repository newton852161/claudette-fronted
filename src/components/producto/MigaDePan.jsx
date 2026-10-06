import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

// Recibe una lista de { texto, ruta }. El ultimo item es la pagina actual,
// por eso no lleva link.
function MigaDePan({ items }) {
  return (
    <Breadcrumb className="mb-4" listProps={{ className: 'mb-0' }}>
      {items.map((item, indice) => {
        const esUltimo = indice === items.length - 1;

        return esUltimo ? (
          <Breadcrumb.Item key={item.texto} active>
            {item.texto}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={item.texto} linkAs={Link} linkProps={{ to: item.ruta }}>
            {item.texto}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default MigaDePan;
