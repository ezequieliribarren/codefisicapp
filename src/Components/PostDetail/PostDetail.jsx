import { Card } from '@mui/material'
import React from 'react'
import {Typography} from '@mui/material'

const PostDetail = ({postSelected}) => {
  return (
          <Card className='postDetailCard'>
                      <Typography>
            <h2>{postSelected.title}</h2>
          </Typography>
          <div className='imgPostDetail'><img src={postSelected.img} alt="Imagen del posteo" /></div>

          <div className='postDetailContent'>
            
              <h3>SUBTITULO</h3>
              <p>{postSelected.description}</p>

              <h3>SUBTITULO</h3>
              <p>{postSelected.description}</p>

              <h3>SUBTITULO</h3>
              <p>{postSelected.description}</p>
  
              <h3>SUBTITULO</h3>
              <p>{postSelected.description}</p>

          </div>
          

    </Card>
  )
}

export default PostDetail