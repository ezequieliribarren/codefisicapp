import React, { useState,useEffect } from 'react'
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebaseConfig"
import Posteo from './Posteo';
import { Link,useParams } from 'react-router-dom';

const Blog = () => {
const { id } = useParams();
const [posteos, setPosteos] = useState([]);

// const changeColor = () => {
//   document.getElementsByClassName
// }

useEffect(() => {
    const postsCollection = collection(db, "posteos");

    let consulta = undefined;

    if (id) {
      const q = query(postsCollection, where("category", "==", id));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(postsCollection);
    }

    consulta.then((res) => {
      let posts = res.docs.map((post) => {
        return {
          ...post.data(),
          id: post.id,
        };
      });

      setPosteos(posts);
    });
  }, [id]);




  return (
    <>
        <div className='category'>
          <ul>
            <li> <Link to="/blog">
            <button>Todo</button>
            </Link></li>
            <li>  <Link to="/blog/prepFisico">
            <button>Preparador Fisico</button>
            </Link></li>
            <li>   
            <Link to="/blog/dirTecnico">
            <button>Director Tecnico</button>
            </Link></li>
            <li> <Link to="/blog/kinesiologo">
            <button>Kinesiologo</button>
            </Link></li>
          </ul>
        </div>
        
        <div className='posts'>
            {
            posteos.map( (element)=>{
              return  <Posteo key={element.id} element={element} />
            } )
        }
        </div>
    </>


  )
}

export default Blog