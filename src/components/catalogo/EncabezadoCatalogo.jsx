function EncabezadoCatalogo({ titulo, subtitulo }) {
  return (
    <header className="bg-beige py-5">
      <div className="container text-center">
        <h1 className="titulo display-5 fw-bold text-bordo mb-2">{titulo}</h1>
        <p className="lead text-secondary mb-0">{subtitulo}</p>
      </div>
    </header>
  )
}

export default EncabezadoCatalogo