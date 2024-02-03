import Carousel from 'react-bootstrap/Carousel';
import image01 from '../assets/new-sale.jpg';
import image02 from '../assets/online-shopping.jpg';

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image01} className="d-block w-100" />
      </Carousel.Item>

      <Carousel.Item>
        <img src={image02} className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
