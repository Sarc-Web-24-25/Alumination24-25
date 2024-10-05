// import React, { useEffect, useRef, useState } from 'react';
// import './Team2.css';

// const Team2 = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const timeRunning = 3000;
//     const timeAutoNext = 7000;
//     const items = [
//         { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
//         { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
//         { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
//         { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
//     ];

//     const items2 = [
//         { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
//         { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
//         { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
//         { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
//     ];

//     const nextRef = useRef(null);
//     const prevRef = useRef(null);
//     let runNextAuto;

//     const showSlider = (type) => {
//         setCurrentIndex((prevIndex) => {
//             if (type === 'next') {
//                 return (prevIndex + 1) % items.length;
//             } else {
//                 return (prevIndex - 1 + items.length) % items.length;
//             }
//         });
//     };

//     useEffect(() => {
//         runNextAuto = setTimeout(() => {
//             showSlider('next');
//         }, timeAutoNext);

//         return () => clearTimeout(runNextAuto);
//     }, [currentIndex]);

//     return (
//         <>
//             <div className="teamCarouselContainer">
//                 <div className="carousel">
                    
//                     <div className="list">
//                         {items.map((item, index) => (
//                             <div
//                                 className={`item ${index === currentIndex ? 'active' : ''}`}
//                                 key={index}
//                             >
//                                 <img src={item.img} alt={item.title} />
//                                 <div className="content">
//                                     <div className="author">LUNDEV</div>
//                                     <div className="title">{item.title}</div>
//                                     <div className="topic">ANIMAL</div>
//                                     <div className="des">{item.description}</div>
//                                     {/* <div className="buttons">
//                                         <button>SEE MORE</button>
//                                         <button>SUBSCRIBE</button>
//                                     </div> */}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="thumbnail">
//                         {items2.map((item, index) => (
//                             <div className="item" key={index}>
//                                 <img src={item.img} alt={item.title} />
//                                 <div className="content">
//                                     <div className="title">Name Slider</div>
//                                     <div className="description">Description</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="arrows">
//                         <button ref={prevRef} onClick={() => showSlider('prev')}>&lt;</button>
//                         <button ref={nextRef} onClick={() => showSlider('next')}>&gt;</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Team2;

import React, { useEffect, useRef, useState } from 'react';
import './Team2.css';

const Team2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeRunning = 3000; // time for running the animation
    const timeAutoNext = 10000; // auto next element after 10 seconds
    const items = [
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
    ];

    const items2 = [
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 2' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 3' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 4' },
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 5' },
        { img: 'images/img2.jpg', title: 'DESIGN SLIDER', description: 'Description 6' },
        { img: 'images/img3.jpg', title: 'DESIGN SLIDER', description: 'Description 7' },
        { img: 'images/img4.jpg', title: 'DESIGN SLIDER', description: 'Description 8' },
        { img: 'images/img1.jpg', title: 'DESIGN SLIDER', description: 'Description 1' },
    ];

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
                                <div className="content">
                                    <div className="author">LUNDEV</div>
                                    <div className="title">{item.title}</div>
                                    <div className="topic">ANIMAL</div>
                                    <div className="des">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="thumbnail" ref={thumbnailDom}>
                        {items2.map((item, index) => (
                            <div className="item" key={index}>
                                <img src={item.img} alt={item.title} />
                                <div className="content">
                                    <div className="title">Name Slider</div>
                                    <div className="description">Description</div>
                                </div>
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

export default Team2;