import { Link } from "react-router-dom"

const Footer = () => {
  return (
  <footer className="py-3">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
      <img src="/images/logo.webp" alt="logo" className='imgFooter' /> 
      <div>
        <h5>Potenciamos tus proyectos</h5>
      </div>
      <div className='copyCode'>
            <p>&copy; [2023] Codefisc. Todos los derechos reservados.</p>
            </div> 
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Home</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#servicios" className="nav-link p-0">Servicios</a></li>
          <li className="nav-item mb-2"><a href="#nosotros" className="nav-link p-0">Nosotros</a></li>
          <li className="nav-item mb-2"><a href="#paquetes" className="nav-link p-0">Paquetes</a></li>
          <li className="nav-item mb-2"><a href="#contacto" className="nav-link p-0">Contacto</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Blog</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="blog" className="nav-link p-0">Todas</Link></li>
          <li className="nav-item mb-2"><Link to="blog/prepFisico" className="nav-link p-0">Preparador Fisico</Link></li>
          <li className="nav-item mb-2"><Link to="blog/dirTecnico" className="nav-link p-0">Director Tecnico</Link></li>
          <li className="nav-item mb-2"><Link to="blog/kinesiologo" className="nav-link p-0">Kinesiologo</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Redes sociales</h5>
        <div className="redesFooter">
     <a target="_blank" href="https://wa.me/+541123404219?text=Hola,%20estoy%20en%20la%20página%20de%20CODEFISIC%20y%20quiero%20 pedir%20más%20información"><img src="/images/wp.webp" alt="Whatsapp" /> </a> 
    <a target="_blank" href="https://www.instagram.com/codefisic/"><img src="/images/ins.webp" alt="Instagram" className="instagram" /> </a> 
     <a target="_blank" href=""> <img src="/images/fb.webp" alt="Facebook" /> </a>
      </div>
      <div className="copyCode">
         <a target='_blank' href="www.freepik.com"> <p>Algunas imágenes utilizadas en este sitio web son de Freepik y están <br /> sujetas a sus términos de uso y atribución</p></a>
      </div>
     
      </div>
    </div>
  </footer>
  )
}

export default Footer