import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio1 from './Bio1';
import Bio2 from './Bio2';

const MyCarousel = () => {
    return (        
    <Carousel>
      <Carousel.Item>
        <Bio1 />
      </Carousel.Item>
      <Carousel.Item>
        <Bio2 />
      </Carousel.Item>
    </Carousel>

    );
  }
  
  export default MyCarousel;