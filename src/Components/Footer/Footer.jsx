
const Footer = () => {
  return (
  <footer className="py-3">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
      <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1679401407/CODEFISIC/smallLogo_cimu6f.png" alt="logo" className='imgFooter' /> 
      <div>
        <h5>Potenciamos tus proyectos</h5>
      </div>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Home</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Servicios</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nosotros</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Paquetes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contacto</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Blog</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Todas</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Preparador Fisico</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Director Tecnico</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kinesiologo</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <div className="redesFooter">
      <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1680635189/whatsFooter_epnhqv.png" alt="Whatsapp" /> 
      <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1680634370/instFooter_nl8mep.png" alt="Instagram" className="instagram" /> 
      <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1680634370/faceFooter_vgjyv0.png" alt="Facebook" /> 
      </div>
      </div>
      

    </div>
  </footer>
  )
}

export default Footer