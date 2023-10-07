import React, { useState } from 'react';
import './Gallery.css';
import image1 from './bgimg/mailbg.jpg';
import image2 from './bgimg/mail4.jpg';
import image3 from './bgimg/mailbg.jpg';
import image4 from './bgimg/i5.png';
import image5 from './bgimg/i5.png';
import image6 from './bgimg/women.png';
import image7 from './bgimg/mail4.jpg';
import image8 from './bgimg/mailbg.jpg';
import image9 from './bgimg/mailbg.jpg';
import image10 from './bgimg/default.jpg';
import image11 from './bgimg/mailbg.jpg';
import image12 from './bgimg/mail4.jpg';
import image13 from './bgimg/mailbg.jpg';
import image14 from './bgimg/default.jpg';
import image15 from './bgimg/gallery.jpg';

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
        <div className="gallery-container">
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
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>
            <button onClick={handlePrev} className="nav-button">
                &lt; Prev
            </button>
            <button onClick={handleNext} className="nav-button">
                Next &gt;
            </button>
        </div>
    );
};

export default Gallery;
