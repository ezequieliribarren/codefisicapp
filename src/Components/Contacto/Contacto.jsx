

const Contacto = () => {
  return (
    <section className='contacto'>
        <h2>CONTANOS TU PROYECTO <br /> Te ayudamos a potenciarlo</h2>
   <form className='form'>
    <label>Nombre</label>
    <input className="nombre" type="text" placeholder="Nombre"/>
    <label>Apellido</label>
    <input className="apellido" type="text" placeholder="Apellido" />
    <label>E-mail</label>
    <input className="email" type= "email" placeholder="E-mail" />
    <label>¿Como podemos ayudarte?</label>
  <input className="textArea" type="text" placeholder="¿En qué podemos ayudarte?" />
<button type="submit">Enviar</button>
   </form>
    </section>
  )
}

export default Contacto