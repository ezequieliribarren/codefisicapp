
import { Carousel } from 'react-bootstrap'



const BoostrapCarousel = () => {
  return (
    
        <Carousel controls={false} indicators={false}>
    <Carousel.Item interval={3000} >
      <img
        className="d-block w-100"
        src="/images/carousel1.webp"
        alt="Gimnasios" 
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="/images/carousel2.webp"
        alt="Instituciones"
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="/images/carousel3.webp"
        alt="Deportistas" 
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="/images/carousel4.webp"
        alt="Profesionales" 
      />
    </Carousel.Item>
  </Carousel>
  
)}

export default BoostrapCarousel