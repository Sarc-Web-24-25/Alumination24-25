import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import image1 from './bgimg/alumination/image1.JPG'
import image2 from './bgimg/alumination/image2.JPG'
import image3 from './bgimg/alumination/image3.JPG'
import image4 from './bgimg/alumination/image4.JPG'
import image5 from './bgimg/alumination/image5.JPG'
import image6 from './bgimg/alumination/image6.JPG'
import image7 from './bgimg/alumination/image7.JPG'
import image8 from './bgimg/alumination/image8.JPG'
import image9 from './bgimg/alumination/image9.JPG'
import image10 from './bgimg/alumination/image10.JPG'
import image11 from './bgimg/alumination/image11.JPG'
import image12 from './bgimg/alumination/image12.JPG'
import image13 from './bgimg/alumination/image13.JPG'
import image14 from './bgimg/alumination/image14.JPG'
import image15 from './bgimg/alumination/image15.JPG'
import image16 from './bgimg/alumination/image16.JPG'
import image17 from './bgimg/alumination/image17.JPG'
import image18 from './bgimg/alumination/image18.JPG'
import image19 from './bgimg/alumination/image19.JPG'
import image20 from './bgimg/alumination/image20.JPG'
import image21 from './bgimg/alumination/image21.JPG'
import image22 from './bgimg/alumination/image22.JPG'
import image23 from './bgimg/alumination/image23.JPG'

import './gallery1.css'
import bg from './bgimg/gallerybg.jpg'

const images = [
    {
      original: image1,
      thumbnail: image1,
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
      {
        original: image21,
        thumbnail: image21,
      },
      {
        original: image22,
        thumbnail: image22,
      },
      {
        original: image23,
        thumbnail: image23,
      },
      
  ];

class Gallery1 extends React.Component {
    render() {
        return <ImageGallery autoPlay={true} items={images} additionalClass="main-container" />;
    }
}

export default Gallery1;