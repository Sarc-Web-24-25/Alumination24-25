import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import './Gallery.css';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const items = [
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
        { img: 'images/cactus.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
        { img: 'images/house.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
        { img: 'images/rock.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
        { img: 'images/tree.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
    ];

    const handleThumbnailClick = (index) => {
        document.querySelectorAll('.list .item').forEach((list, idx) => {
            gsap.to(list, {
                zIndex: -1,
            });
        });
    
        // Set zIndex of the clicked thumbnail to 50
        gsap.to(`#thumb${index}`, {
            zIndex: 50,
        });
    };

    return (
        <>
            <div className="teamCarouselContainer">
                <div className="carousel">
                    
                    <div className="list">
                        {items.map((item, index) => (
                            <div
                                className='item'
                                id={`thumb${index}`}
                                key={index}
                            >
                                <img src={item.img} alt={item.title} />
                                {/* <div className="content">
                                    <div className="author">LUNDEV</div>
                                    <div className="title">{item.title}</div>
                                    <div className="topic">ANIMAL</div>
                                    <div className="des">{item.description}</div>
                                </div> */}
                            </div>
                        ))}
                    </div>

                    <div className="thumbnail">
                        {items.map((item, index) => (
                            <div
                                className='item'
                                key={index}
                                onClick={() => handleThumbnailClick(index)}
                                style={{ cursor: "pointer", zIndex: "100" }}
                            >
                                <img src={item.img} alt={item.title} />
                                {/* <div className="content">
                                    <div className="title">Name Slider</div>
                                    <div className="description">Description</div>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
