

const Contacto = () => {
  return (
    <section className='contacto' id="contacto">
        <h2>CONTANOS TU PROYECTO <br /> Te ayudamos a potenciarlo</h2>
   <form className='form'>
    <input className="nombre" type="text" placeholder="Nombre"/>
    <input className="apellido" type="text" placeholder="Apellido" />
    <input className="email" type= "email" placeholder="E-mail" />
  <textarea className="textArea" type="text" placeholder="¿En qué podemos ayudarte?" />
<button type="submit">Enviar</button>
<h3>o escribinos por</h3>
<div className="whatsapp">
 <img src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1680182184/CODEFISIC/Vector_wmkqrg.png" alt="" /> <a href="#"><h4>Whatsapp</h4></a>
</div>

   </form>
    </section>
  )
}

export default Contacto