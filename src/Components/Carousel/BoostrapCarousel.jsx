
import { Carousel } from 'react-bootstrap'



const BoostrapCarousel = () => {
  return (
    
        <Carousel controls={false} indicators={false}>
    <Carousel.Item interval={3000} >
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678803837/CODEFISIC/carousel1_jgej9y.jpg"
        alt="First slide" 
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678803837/CODEFISIC/carousel2_jwidu1.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678803837/CODEFISIC/carousel3_nozovi.jpg"
        alt="Third slide" 
      />
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dkkrcphjh/image/upload/v1678803837/CODEFISIC/carousel4_b8ncwy.jpg"
        alt="Four slide" 
      />
    </Carousel.Item>
  </Carousel>
  
)}

export default BoostrapCarousel