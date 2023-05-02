import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from './Bio';
import Bio1 from './Bio1';
import Bio2 from './Bio2';
import Bio3 from './Bio3';
import Bio4 from './Bio4';
import star1 from './star1.png';
import star2 from './star2.png';
import star3 from './star3.png';

const MyCarousel = () => {
    return (
    <div id = "carousel">
      <div id = "star-overlay">
        <img id = "star1" src={star1} alt="stars" />
        <img id = "star2" src={star2} alt="stars" />
        <img id = "star3" src={star3} alt="stars" />
      </div>
      <div id = "carousel-wrap">
        <Carousel>
          <Carousel.Item>
            <div class = "item-container">
              <Bio />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class = "item-container">
              <Bio1 />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class = "item-container">
              <Bio2 />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class = "item-container">
              <Bio3 />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class = "item-container">
              <Bio4 />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    );
  }

  export default MyCarousel;