import React, { useEffect, useRef, useState } from 'react';
import './gallery2.css';
import gsap from 'gsap'

const Gallery2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeRunning = 3000; // time for running the animation
    const timeAutoNext = 10000; // auto next element after 10 seconds
    
    const items = [
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
        { img: 'images/cactus.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
        { img: 'images/house.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
        { img: 'images/rock.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
        { img: 'images/tree.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
        { img: 'images/water.jpg', title: 'DESIGN SLIDER', description: 'Description 9' },
      
    ];

    const items2 = [
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
        { img: 'images/cactus.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
        { img: 'images/house.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
        { img: 'images/rock.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
        { img: 'images/tree.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
        { img: 'images/water.jpg', title: 'DESIGN SLIDER', description: 'Description 9' },
    ];
    
    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        const itemSlider = listItemDom.current.querySelectorAll('.carousel .list .item');
        while (itemSlider[0] !== itemSlider[index]) {
            listItemDom.current.appendChild(itemSlider[0]);
        }
    };

    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const listItemDom = useRef(null);
    const thumbnailDom = useRef(null);
    const carouselDom = useRef(null);

    let runAutoRun;
    let runTimeOut;

    const showSlider = (type) => {
        const itemSlider = listItemDom.current.querySelectorAll('.carousel .list .item');
        const itemThumbnail = thumbnailDom.current.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            listItemDom.current.appendChild(itemSlider[0]);
            thumbnailDom.current.appendChild(itemThumbnail[0]);
            carouselDom.current.classList.add('next');
        } else {
            const positionLastItem = itemSlider.length - 1;
            listItemDom.current.prepend(itemSlider[positionLastItem]);
            thumbnailDom.current.prepend(itemThumbnail[positionLastItem]);
            carouselDom.current.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.current.classList.remove('next');
            carouselDom.current.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runAutoRun);
        runAutoRun = setTimeout(() => {
            nextRef.current.click();
        }, timeAutoNext);
    };

    useEffect(() => {
        runAutoRun = setTimeout(() => {
            nextRef.current.click();
        }, timeAutoNext);

        return () => clearTimeout(runAutoRun);
    }, [currentIndex]);

    return (
        <>
            <div className="teamCarouselContainer">
                <div className="carousel" ref={carouselDom}>
                    
                    <div className="list" ref={listItemDom}>
                        {items.map((item, index) => (
                            <div
                                className={`item ${index === currentIndex ? 'active' : ''}`}
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

                    <div className="thumbnail" ref={thumbnailDom}>
                        {items2.map((item, index) => (
                            <div className="item" key={index}   
                            onClick={() => handleThumbnailClick(index)} 
                            style={{ cursor: "pointer", zIndex: "100" }}>
                                <img src={item.img} alt={item.title} />
                                {/* <div className="content">
                                    <div className="title">Name Slider</div>
                                    <div className="description">Description</div>
                                </div> */}
                            </div>
                        ))}
                    </div>

                    <div className="arrows">
                        <button ref={prevRef} onClick={() => showSlider('prev')} id="prev">&lt;</button>
                        <button ref={nextRef} onClick={() => showSlider('next')} id="next">&gt;</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery2;
// import React, { useEffect, useRef, useState } from 'react';
// import './gallery2.css';
// import gsap from 'gsap';

// const Gallery2 = () => {
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

//     const listItemDom = useRef(null);
//     const thumbnailDom = useRef(null);
//     const carouselDom = useRef(null);
//     const nextRef = useRef(null);
//     const prevRef = useRef(null);
    
//     let autoRunTimeout, transitionTimeout;

//     const handleThumbnailClick = (index) => {
//         setCurrentIndex(index);
//         showSliderByIndex(index);
//     };

//     const showSliderByIndex = (index) => {
//         const itemSlider = listItemDom.current.querySelectorAll('.carousel .list .item');
//         const itemThumbnail = thumbnailDom.current.querySelectorAll('.carousel .thumbnail .item');

//         itemSlider.forEach((item, idx) => {
//             gsap.to(item, { zIndex: idx === index ? 50 : -1, opacity: idx === index ? 1 : 0 });
//         });

//         itemThumbnail.forEach((item, idx) => {
//             gsap.to(item, { zIndex: idx === index ? 50 : -1, opacity: idx === index ? 1 : 1});
//         });
//     };

//     const showSlider = (direction) => {
//         let newIndex = currentIndex;

//         if (direction === 'next') {
//             newIndex = (currentIndex + 1) % items.length; // Cycle to the next index
//         } else if (direction === 'prev') {
//             newIndex = (currentIndex - 1 + items.length) % items.length; // Cycle to the previous index
//         }

//         setCurrentIndex(newIndex);
//         showSliderByIndex(newIndex);
//         resetAnimation();
//     };


//     const resetAnimation = () => {
//         clearTimeout(transitionTimeout);
//         clearTimeout(autoRunTimeout);
//         transitionTimeout = setTimeout(() => {
//             carouselDom.current.classList.remove('next', 'prev');
//         }, timeRunning);

//         autoRunTimeout = setTimeout(() => {
//             nextRef.current.click();
//         }, timeAutoNext);
//     };

//     useEffect(() => {
//         resetAnimation();

//         return () => {
//             clearTimeout(transitionTimeout);
//             clearTimeout(autoRunTimeout);
//         };
//     }, [currentIndex]);

//     return (
//         <div className="teamCarouselContainer">
//             <div className="carousel" ref={carouselDom}>
//                 <div className="list" ref={listItemDom}>
//                     {items.map((item, index) => (
//                         <div
//                             className={`item ${index === currentIndex ? 'active' : ''}`}
//                             key={index}
//                         >
//                             <img src={item.img} alt={item.title} />
//                         </div>
//                     ))}
//                 </div>

//                 <div className="thumbnail" ref={thumbnailDom}>
//                     {items.map((item, index) => (
//                         <div
//                             className={`item ${index === currentIndex ? 'active' : ''}`}
//                             key={index}
//                             onClick={() => handleThumbnailClick(index)}
//                             style={{ cursor: 'pointer' }}
//                         >
//                             <img src={item.img} alt={item.title} />
//                         </div>
//                     ))}
//                 </div>

//                 <div className="arrows">
//                     <button ref={prevRef} onClick={() => showSlider('prev')} id="prev">
//                         &lt;
//                     </button>
//                     <button ref={nextRef} onClick={() => showSlider('next')} id="next">
//                         &gt;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Gallery2;


