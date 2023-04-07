import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const Nabvar = () => {
  return (

      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <Link to="/">
  <img src="/images/logoNav.webp" alt="logo" className='imgNav' />
    </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ms-auto ">|
      <li  className='button'> <HashLink smooth to="/#servicios" className='decoration'>
 SERVICIOS</HashLink></li>
      <li className='button'> <HashLink smooth to="/#nosotros" className='decoration' >
 NOSOTROS</HashLink></li>
      <li className='button'>
 <HashLink smooth to="/#contacto" className='decoration'>
 CONTACTO</HashLink></li>
      <li className="blog"><Link to="blog" className='decoration'> 
       BLOG
        </Link></li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
export default Nabvar