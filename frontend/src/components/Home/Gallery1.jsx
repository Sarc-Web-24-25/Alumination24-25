import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import image1 from './bgimg/AL2.jpg';
import image2 from './bgimg/AL3.jpg';
import image3 from './bgimg/AL5.jpg';
import image4 from './bgimg/AL6.jpg';
import image5 from './bgimg/AL7.jpg';
import image6 from './bgimg/AL9.jpg';
import image7 from './bgimg/AL10.jpg';
import image8 from './bgimg/AL15.jpg';
import image9 from './bgimg/AL16.jpg';
import image10 from './bgimg/AL20.jpg';
import image11 from './bgimg/AL21.jpg';
import image12 from './bgimg/AL22.jpg';
import image13 from './bgimg/AL23.jpg';
import image14 from './bgimg/AL24.jpg';
import image15 from './bgimg/AL15.jpg';
import image16 from './bgimg/AL30.jpeg';
import image17 from './bgimg/AL31.jpeg';
import image18 from './bgimg/AL32.jpeg';
import image19 from './bgimg/AL33.jpeg';
import image20 from './bgimg/AL34.jpeg';
import './gallery1.css'
import bg from './bgimg/gallerybg.jpg'

const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
        original: image4,
        thumbnail: image4,
      },
      {
        original: image5,
        thumbnail: image5,
      },
      {
        original: image6,
        thumbnail: image6,
      },
      {
        original: image7,
        thumbnail: image7,
      },
      {
        original: image8,
        thumbnail: image8,
      },
      {
        original: image9,
        thumbnail: image9,
      },
      {
        original: image10,
        thumbnail: image10,
      },
      {
        original: image11,
        thumbnail: image11,
      },
      {
        original: image12,
        thumbnail: image12,
      },
      {
        original: image13,
        thumbnail: image13,
      },
      {
        original: image14,
        thumbnail: image14,
      },
      {
        original: image15,
        thumbnail: image15,
      },
      {
        original: image16,
        thumbnail: image16,
      },
      {
        original: image17,
        thumbnail: image17,
      },
      {
        original: image18,
        thumbnail: image18,
      },
      {
        original: image19,
        thumbnail: image19,
      },
      {
        original: image20,
        thumbnail: image20,
      },
      
  ];

class Gallery1 extends React.Component {
    render() {
        return <ImageGallery items={images} additionalClass="main-container" />;
    }
}

export default Gallery1;