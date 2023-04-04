import React, { useState,useEffect } from 'react'
import {collection, getDoc, doc} from "firebase/firestore"
import {db} from "../../firebaseConfig"

import { useParams } from 'react-router-dom';
import PostDetail from './PostDetail';
const PostDetailContainer = () => {
    const { id } = useParams();
    const [postSelected, setPostSelected] = useState({});

    useEffect(() => {
        const postsCollection = collection(db, "posteos");
        const ref = doc(postsCollection, id);
        getDoc(ref)
        .then((res) => {
          setPostSelected({
            ...res.data(),
            id: res.id,
          });
        });
      }, [id]);

  return (
    <div className='postDetailContainer'>
        
        <PostDetail postSelected={postSelected}/>
  
    </div>
    
  )
}

export default PostDetailContainer