// import React, { useEffect, useRef, useState } from 'react';
// import './Gallery3.css';

// const Gallery3 = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const timeRunning = 3000; // time for running the animation
//     const timeAutoNext = 10000; // auto next element after 10 seconds
    
//     const items = [
//         { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
//         { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
//         { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
//         { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
//         { img: 'images/cactus.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
//         { img: 'images/house.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
//         { img: 'images/rock.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
//         { img: 'images/tree.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
//         { img: 'images/water.jpg', title: 'DESIGN SLIDER', description: 'Description 9' },
//     ];

//     const nextRef = useRef(null);
//     const carouselDom = useRef(null);

//     const nextPhoto = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     };

//     const showSlider = (index) => {
//         setCurrentIndex(index);
//         // Optionally you can add animations or effects here
//     };

//     useEffect(() => {
//         const autoNext = setTimeout(() => {
//             nextPhoto();
//         }, timeAutoNext);

//         return () => clearTimeout(autoNext); // Cleanup on unmount
//     }, [currentIndex]);

//     return (
//         <>
//             <div className="teamCarouselContainer">
//                 <div className="carousel" ref={carouselDom}>
//                     <div className="list">
//                         {items.map((item, index) => (
//                             <div
//                                 className={`item ${index === currentIndex ? 'active' : ''}`}
//                                 key={index}
//                                 style={{
//                                     backgroundImage: `url(${item.img})`,
//                                     zIndex: index === currentIndex ? 1 : -1,
//                                     position: 'absolute',
//                                     transition: 'opacity 0.5s',
//                                     opacity: index === currentIndex ? 1 : 0,
//                                 }}
//                             >
//                                 <img src={item.img} alt={item.title} />
//                             </div>
//                         ))}
//                     </div>

//                     <div className="thumbnail">
//                         <div className="arrows">
//                             <button onClick={() => showSlider((currentIndex - 1 + items.length) % items.length)} id="prev">&lt;</button>
//                             <button ref={nextRef} onClick={nextPhoto} id="next">&gt;</button>
//                         </div>

//                         {items.map((item, index) => (
//                             <div
//                                 className="item"
//                                 key={index}
//                                 onClick={() => showSlider(index)}
//                                 style={{
//                                     cursor: "pointer",
//                                     zIndex: "100",
//                                     border: index === currentIndex ? "3px white solid" : "none",
//                                     borderRadius: "21px",
//                                 }}
//                             >
//                                 <img src={item.img} alt={item.title} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Gallery3;

import React, { useEffect, useRef, useState } from 'react';
import './Gallery3.css';

const Gallery3 = () => {

    const items = [
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
        { img: 'images/img5.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
        { img: 'images/img6.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
        { img: 'images/img7.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
        { img: 'images/img8.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
        { img: 'images/img9.jpg', title: 'DESIGN SLIDER', description: 'Description 9' },
        { img: 'images/image3.jpg', title: 'DESIGN SLIDER', description: 'Description 10' },
        { img: 'images/image4.jpg', title: 'DESIGN SLIDER', description: 'Description 11' },
        { img: 'images/image5.jpg', title: 'DESIGN SLIDER', description: 'Description 12' },
        { img: 'images/image6.jpg', title: 'DESIGN SLIDER', description: 'Description 13' },
        { img: 'images/image7.jpg', title: 'DESIGN SLIDER', description: 'Description 14' },
        { img: 'images/image8.jpg', title: 'DESIGN SLIDER', description: 'Description 15' },
        { img: 'images/image9.jpg', title: 'DESIGN SLIDER', description: 'Description 16' },
        { img: 'images/image10.jpg', title: 'DESIGN SLIDER', description: 'Description 17' },
        { img: 'images/image11.jpg', title: 'DESIGN SLIDER', description: 'Description 18' },
    ];
    
    const [counter, setCounter] = useState(0);
    const timeAutoNext = 10000; // Auto next element after 10 seconds
    // const items = [...Array(20).keys()].map(i => ({ img: `images/img${i + 1}.jpg`, title: 'DESIGN SLIDER', description: `Description ${i + 1}` }));

    const thumbnailDom = useRef(null);
    let runAutoRun;

    
    const getThumbnailWidth = () => {
        const width = window.innerWidth;
        console.log("width: ", width)
        
        if (width < 768) return 150; // small devices
        if (width >= 768 && width <= 1024) return 250; // iPad
        return 200; // Laptop or larger
    };
    
    const [thumbnailWidth, setThumbnailWidth] = useState(getThumbnailWidth());

    useEffect(() => {
        const handleResize = () => {
            setThumbnailWidth(getThumbnailWidth());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getThumbnailToShow = () => {
        const width = window.innerWidth;
        console.log("width: ", width)
        
        if (width < 768) return 2; // small devices
        if (width >= 768 && width <= 1024) return 3; // iPad
        return 8; // Laptop or larger
    };

    const [thumbnailToShow, setThumbnailToShow] = useState(getThumbnailToShow());

    useEffect(() => {
        const handleResize = () => {
            setThumbnailToShow(getThumbnailToShow());
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    
    
    

    const showSlider = (type, index = null) => {
        if (type === 'next') {
            setCounter((prevCounter) => (prevCounter + 1) % items.length);
        } else if (type === 'prev') {
            setCounter((prevCounter) => (prevCounter - 1 + items.length) % items.length);
        } else if (type === 'index' && index !== null) {
            setCounter(index);
        }

        console.log("thumbnail width: ", thumbnailWidth)
        // Calculate the translation
        // const thumbnailWidth = 200; // Set this to the width of each thumbnail item (adjust as necessary)
        // const thumbnailsToShow = 8; // Number of thumbnails to show at once
        const translation = Math.max(0, (counter - Math.floor(thumbnailToShow / 2)) * thumbnailWidth);
        const maxTranslation = Math.max(0, (items.length - thumbnailToShow) * thumbnailWidth);

        // Apply the translation to the thumbnail container
        const thumbnailContainer = thumbnailDom.current;
        thumbnailContainer.style.transform = `translateX(-${Math.min(translation, maxTranslation)}px)`;

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            // Logic to auto-slide if needed
        }, timeAutoNext);
    };

    useEffect(() => {
        runAutoRun = setTimeout(() => {
            showSlider('next');
        }, timeAutoNext);
        return () => clearTimeout(runAutoRun);
    }, [counter]);

    return (
        <div className="teamCarouselContainer">
            <div className="carousel">
                <div className="list">
                    {items.map((item, index) => (
                        <div
                            className={`item ${index === counter ? 'active' : ''}`}
                            key={index}
                            style={{
                                backgroundImage: `url(${item.img})`,
                                zIndex: index === counter ? 1 : -1,
                                position: 'absolute', // Ensures photos overlap
                                transition: 'opacity 0.5s', // Smooth transition for opacity
                                opacity: index === counter ? 1 : 0,
                            }}
                        >
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>

                <div className="thumbnail" ref={thumbnailDom}>
                    {items.map((item, index) => (
                        <div
                            className="item"
                            key={index}
                            onClick={() => showSlider('index', index)}
                            style={{
                                cursor: "pointer",
                                border: index === counter ? "3px white solid" : "none",
                                borderRadius: "20%",
                            }}
                        >
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery3;