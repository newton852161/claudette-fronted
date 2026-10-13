import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function SelectorTalle({ talles, talleSeleccionado, onSeleccionar, mostrarAviso }) {
  return (
    <fieldset className="mb-3">
      <legend className="fw-semibold fs-6 mb-2">Talle</legend>

      <ToggleButtonGroup
        type="radio"
        name="talle"
        value={talleSeleccionado}
        onChange={onSeleccionar}
        className="d-flex flex-wrap gap-2"
      >
        {talles.map((talle) => (
          <ToggleButton
            key={talle}
            id={`talle-${talle}`}
            value={talle}
            variant="outline-primary"
            className="rounded-2 flex-grow-0"
          >
            {talle}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {mostrarAviso && (
        <div className="form-text text-danger" role="alert">
          Elegí un talle antes de consultar.
        </div>
      )}
    </fieldset>
  );
}

export default SelectorTalle;
