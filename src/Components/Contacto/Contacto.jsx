

const Contacto = () => {

  return (
    <section className='contacto' id="contacto">
        <h2>CONTANOS TU PROYECTO <br /> Te ayudamos a potenciarlo</h2>
   <form action="https://formsubmit.co/info@codefisic.com" method="POST" className='form'>
    <input className="nombre" type="text" placeholder="Nombre y Apellido" name="nombreyapellido" required/>
    <input className="email" type= "email" placeholder="E-mail" required name="email" />
  <textarea className="textArea" type="text" placeholder="¿En qué podemos ayudarte?" required name="consulta" />
  <input className="hiden" type="hiden" name="_next" defaultValue="http://localhost:3000/" />
<input className="hiden" type="hiden" name="_captcha" defaultValue="false" />
<button type="submit">ENVIAR</button>
<h3>o escribinos por</h3>
<div className="whatsapp">
 <img src="/images/wp.webp" alt="Chat de Whatsapp" /> <a target="_blank" href="https://wa.me/+541123404219?text=Hola,%20estoy%20en%20la%20página%20de%20CODEFISIC%20y%20quiero%20 pedir%20más%20información"><h4>Whatsapp</h4></a>
</div>


   </form>
    </section>
  )
}

export default Contacto