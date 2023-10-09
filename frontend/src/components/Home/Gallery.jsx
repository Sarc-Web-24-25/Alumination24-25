import React, { useState } from 'react';
import './Gallery.css';
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
import Footers from './Footer';
import CursorAnimation from "./CursorAnimation"

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const images = [
        image1, image2, image3, image4, image5, image6, image7, image8, image9,
        image10, image11, image12, image13, image14, image15
    ];

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const handleNext = () => {
        setSelectedImage((prevImage) => (prevImage + 1) % images.length);
    };

    const handlePrev = () => {
        setSelectedImage((prevImage) =>
            prevImage === 0 ? images.length - 1 : prevImage - 1
        );
    };

    return (
        <><div className="gallery-container">
            <CursorAnimation />
            <div className="center-image">
                <img src={images[selectedImage]} alt={`Image ${selectedImage + 1}`} />
            </div>
            <div className="thumbnail-list-container">
                <div className="thumbnail-list">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className={selectedImage === index ? 'active' : ''}
                            onClick={() => handleImageClick(index)} />
                    ))}
                </div>
            </div>
            <button onClick={handlePrev} className="nav-button">
                &lt; Prev
            </button>
            <button onClick={handleNext} className="nav-button">
                Next &gt;
            </button>
        </div><Footers /></>
    );
};

export default Gallery;
