import React from "react";
import { Carousel } from "react-bootstrap";
// import image from './bgimg/alumination/image2.JPG'

const ImageCarousel = ({ main }) => {
  return (
    <Carousel
      className="container lap-ht-cont"
      indicators={false}
      slide={true}
      style={{ height: 'auto', marginBottom: "20vh", padding: 0, borderRadius: '10px' }}
    >
      {main.map((event) => (
        // console.log('https://alumination.sarc-iitb.org/' + event.image);
        <Carousel.Item 
        >
          <img
            className="d-block lap-ht"
            src={"https://alumination.sarc-iitb.org" + event.image}
            alt="First slide"
            style={{ width: '100%', aspectRatio: '1/1', borderRadius: "10px" }}
          />
         
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
