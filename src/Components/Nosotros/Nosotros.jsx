import React from 'react'

const Nosotros = () => {
  return (
    <section id='nosotros' className='nosotros'>
        <h3 className='title1Nos'>Conocenos mas</h3>
  
        <div className='pNos'>
                  <p>En codefisic nos dedicamos a potenciar profesionales y entidades del deporte para que puedan dar el salto al mundo digital.</p>

<p> Nuestro propósito es ayudarte a digitalizar tus habilidades y servicios, para que puedas llegar a más clientes y hacer crecer tu negocio de forma sostenible. Estamos comprometidos con tu éxito y trabajamos para entender tus necesidades, y así poder ofrecerte soluciones personalizadas y efectivas. </p>

<p>Queremos ser parte de tu equipo y ayudarte a alcanzar tus objetivos. ¡Unite a nosotros!</p>

        </div>
        <h2>¡HAY EQUIPO!</h2>
          <div className='contNos'>
            <div className='member'>         
                <div className='polygon1'>
                <img src="/images/nos1.webp" width="280px" height="320px" alt="Equipo Codefisic" />
            </div>
            <div className='polygon2'>
                <h3>Ezequiel Iribarren</h3>
                <p>Lic. en alto rendimiento deportivo<br />Desarrollador web</p>
                  </div>
            </div>

            <div className='member'>         
                <div className='polygon1'>
                <img src="/images/nos2.webp" width="280px" height="320px" alt="Equipo Codefisic" />
            </div>
              <div className='polygon2'>
                <h3>Magali Biondi</h3>
                <p>Diseñadora UX/UI</p>
                  </div>
   

            </div>
        </div>
    </section>
  
  )
}

export default Nosotros