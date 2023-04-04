import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const Paquetes = () => {
  return (
    <section className='contPaquetes'>
      <h2>¿Como elegís <strong>POTENCIARTE</strong>?</h2> 
        <div className='cardsPaquetes'>
 <Card className='card' >
 <div className='nroCard'><h3 className='texto-borde'>01</h3></div>
<div className='titleCard'><h4>ENTRANDO EN CALOR</h4></div>
<div className='description'>
     <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Imagen de Marca</h5></div>
        </div>
        <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Sitio Web</h5></div>
        </div>
        <div className='itemsCard'>
        <div className='notIncluded'><h5>✖</h5></div>
        <div className='notIncluded'><h5>Ideas de Contenido</h5></div>
        </div>
        <div className='itemsCard'>
        <div className='notIncluded'><h5>✖</h5></div>
        <div className='notIncluded'><h5>Blog Profesional</h5></div>
        </div>
</div>
      <CardActions className='contact'>
        <button>CONTACTO</button>
      </CardActions>
    </Card>
    <Card className='card' >
 <div className='nroCard'><h3 className='texto-borde'>02</h3></div>
<div className='titleCard glow1'><h4>AUMENTANDO EL RITMO</h4></div>
<div className='description'>
     <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Imagen de Marca</h5></div>
        </div>
        <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Sitio Web</h5></div>
        </div>
        <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Ideas de Contenido</h5></div>
        </div>
        <div className='itemsCard'>
        <div className='notIncluded'><h5>✖</h5></div>
        <div className='notIncluded'><h5>Blog Profesional</h5></div>
        </div>
</div>
      <CardActions className='contact'>
        <button>CONTACTO</button>
      </CardActions>
    </Card>
    <Card className='card' >
 <div className='nroCard'><h3 className='texto-borde'>03</h3></div>
<div className='titleCard glow2'><h4>POTENCIA ALTA</h4></div>
<div className='description'>
     <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Imagen de Marca</h5></div>
        </div>
        <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Sitio Web</h5></div>
        </div>
        <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Ideas de Contenido</h5></div>
        </div>
        <div className='itemsCard'>
        <div><h5>✔</h5></div>
        <div><h5>Blog Profesional</h5></div>
        </div>
</div>
      <CardActions className='contact'>
        <button>CONTACTO</button>
      </CardActions>
    </Card>
   
   <div className='personalizado'>
    <h3>¿Necesitas un servicio personalizado?</h3>
    <p>Nos adaptamos a tus necesidades <br /> ¡contanos tu proyecto y potenciemoslo!</p>
    <button>CONTACTO</button>
   </div>
  
        </div>
 


    </section>
  )
}

export default Paquetes;