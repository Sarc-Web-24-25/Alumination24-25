import React from 'react';
import { Carousel } from 'react-bootstrap';
// import image from './bgimg/alumination/image2.JPG'

const ImageCarousel = ( {main} ) => {
  return (
    <Carousel>
       
        {main.map((event) => (
            // console.log('http://127.0.0.1:8000/' + event.image);
            <Carousel.Item>
            <img
               className="d-block w-100"
               src={'http://127.0.0.1:8000/' + event.image}
               alt="First slide"
               style={{width: '500px', height: '500px', borderRadius: '10px'}}
            />
            <Carousel.Caption>
                <h3 style={{fontFamily: `"Kadwa", serif`}}>{event.name}</h3>
               <p style={{fontFamily: `"Kadwa", serif`, fontFamily: `"Sansita", sans-serif`}}>{event.description}</p>
            </Carousel.Caption>
            </Carousel.Item>
        ))}
     

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description of the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description of the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default ImageCarousel;
