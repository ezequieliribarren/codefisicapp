import React, { useState } from "react";
import x from "./FormCheckout.module.css"
import { addDoc, collection} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Button from "@mui/material/Button";

const FormCheckout = () => {
  const [postData, setUserData] = useState({
    title: "",
    date: "",
    detail: "",
    description: "",
    img: "",
    category: ""


  });


  const handleSubmit = (e) => {
       e.preventDefault(); 
   
    let orderCollection = collection(db, "posteos");
    addDoc(orderCollection, postData)
  };

  return (
    <div className={x.contForm}>
    <h2 className={x.title}>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className={x.form}>
        <h3>Formulario de posteo</h3>
        <input
          type="text"
          placeholder="Titulo"
          value={postData.title}
          onChange={(e) => setUserData({ ...postData, title: e.target.value })} required
        />

<input
          type="date"
          placeholder="Fecha"
          value={postData.date}
          onChange={(e) => setUserData({ ...postData, date: e.target.value })} required
        />

        <input
          type="text"
          placeholder="Detalle"
          value={postData.detalle}
          onChange={(e) => setUserData({ ...postData, detail: e.target.value })} required
        /> 
        
        <input
          type="text"
          placeholder="Descripcion"
          value={postData.description}
          onChange={(e) => setUserData({ ...postData, description: e.target.value })} required
        />
                <input
          type="text"
          placeholder="Imagen del posteo (Img de nube)"
          value={postData.img}
          onChange={(e) => setUserData({ ...postData, img: e.target.value })} required
        />
          <input
          type="text"
          placeholder="Categoria (en minuscula: profesionales, pfisico, dtecnico, kinesiologo, gimnasio, club,) "
          value={postData.category}
          onChange={(e) => setUserData({ ...postData, category: e.target.value })} required
        />
        
        
        


        <Button  variant = "outlined" className={x.button} type="submit">Comprar</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
