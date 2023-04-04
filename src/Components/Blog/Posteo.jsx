import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Posteo = ({element}) => {
  return (
    <Link to={`/postDetail/${element.id}`}>
    <Card className='card' >
    <CardMedia
      sx={{ height: 315 }}
      image={element.img}
    />
    <CardContent className='content'>
      <Typography className='title'>
        <h3>{element.title}</h3>
      </Typography>
      <Typography className='detail'>
       <p>{element.detail}</p>
      </Typography>
    </CardContent>
  </Card>
        </Link>
  )
}

export default Posteo