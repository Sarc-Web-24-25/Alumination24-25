import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import "../Home/all.css"
import topImage from "./bgimg/events_title.png"
import eventimage from "./bgimg/cfc.png"
import YouTube from 'react-youtube';
import img from '../Home/photos24/image.png'
import gsap from 'gsap'
import ImageCarousel from './EventCarousel';

// import CursorAnimation from "./CursorAnimation"

function EventList() {
    const [mainEvents, setMainEvents] = useState([]);
    const divRefs = useRef([]);
    // const rightRefs = useRef([]);
    const [events, setEvents] = useState([]);
    // const [selectedEventId, setSelectedEventId] = useState(null);
    const [isOpened, setIsOpened] = useState(false);

    const sortEvents = (events) => {
        events.sort((a, b) => {
            // event with ID 16 at the top.
            if (a.id === 16) return -1;
            if (b.id === 16) return 1;

            if (a.isLaunched && !b.isLaunched) return -1;
            if (!a.isLaunched && b.isLaunched) return 1;
            // If all sorting criteria fail, maintain the original order.
            return 0;
        })
        setEvents(events);
    }

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/events/')
            .then((response) => {
                const sortedEvents = [...response.data]; // Create a copy of the events array
                sortEvents(sortedEvents); // Sort the events based on your criteria
                setEvents(sortedEvents); // Update the state with the sorted array
                sortedEvents.forEach((element) => {
                    // console.log(element.priority);
                    if(element.priority)
                        setMainEvents((prev) => [...prev, element]);
                });


                
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleClickLess = (index) => {
        console.log('view less');
        const viewbtn = document.querySelector('#viewBtnLess' + `${index}`)

        viewbtn.innerHTML = 'View Details';
        if (divRefs.current[index]) {
            gsap.to(divRefs.current[index], {
                x: (index % 2 === 0) ? -300 : 300, // Slide out by 300px (adjust based on your needs)
                duration: 2, // Animation duration in seconds
                ease: 'power3.out', // Easing function for smoothness
                opacity: 0
            });
        }
        setIsOpened(false);

    }

    const handleClickDetails = (index, title, desc) => {
        console.log('view more');
        const div = document.createElement('div');
        const divParent = document.querySelector('#events' + `${index}`);

        const viewbtn = document.querySelector('#viewBtn' + `${index}`)

        viewbtn.innerHTML = 'View Less';


        div.innerHTML = `
            <h3 class="event-title">${title}</h3>
            <p class="event-description">${desc}</p> <br />
        `
        div.className = "event-info" + " " + (index % 2 === 0 ? 'border-left' : 'border-right')
        div.style.paddingRight = "20px";
        div.style.paddingLeft = "20px";

        divRefs.current[index] = div;


        divParent.append(div);

        if (divRefs.current[index]) {
            gsap.from(divRefs.current[index], {
                x: (index % 2 === 0) ? -300 : 300, // Slide out by 300px (adjust based on your needs)
                duration: 2, // Animation duration in seconds
                ease: 'power3.out', // Easing function for smoothness
                opacity: 0
            });
        }

        setIsOpened(true);
        // viewbtn.onClick = handleClickLess(index);
    };

    //   const handleClickRight = () => {
    //     gsap.to(leftRefs.current, {
    //       x: -300, // Slide out by 300px (adjust based on your needs)
    //       duration: 1, // Animation duration in seconds
    //       ease: 'power3.out', // Easing function for smoothness
    //     });
    //   };


    return (
        <div className="event-list-container">
            {/* {console.log(mainEvents)} */}
        <ImageCarousel main={mainEvents}/>
            {/* <SimpleSlider /> */}
            {/*<CursorAnimation />*            {/* <div className="top-section">
                <img src={topImage} alt="Top Image" className="top-image"/>
                <h1 className="top-title">EVENTS</h1>
            </div> */}
            <div className="page-content">
                <ul>



                    {/* <svg width="225" height="225" viewBox="0 0 376 376" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateX(50px) translateY(100px)', zIndex: -1 }}>
                        <path d="M0 328C0 354.51 21.4903 376 48 376C74.5097 376 96 354.51 96 328C96 301.49 74.5097 280 48 280C21.4903 280 0 301.49 0 328ZM280 48C280 74.5097 301.49 96 328 96C354.51 96 376 74.5097 376 48C376 21.4903 354.51 0 328 0C301.49 0 280 21.4903 280 48ZM57 328C57 275.208 87.1372 207.266 136.907 152.267C186.562 97.3949 254.314 57 328 57V39C247.643 39 175.395 82.9087 123.561 140.189C71.8415 197.342 39 269.399 39 328H57Z" fill="#FFECFB" />
                    
                    </svg> */}


                    {/* <svg width="700" height="225" viewBox="0 0 958 342" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateX(50px) translateY(500px)', zIndex: -1 }}>
                        <path d="M9 154.856C9 225.721 73.0083 303.439 135.934 318.567C184.22 330.175 232.735 333 283.453 333C337.951 333 389.013 325.887 427.159 277.742C461.241 234.727 491.31 182.364 530.079 140.423C587.215 78.613 634.746 34.7428 712.666 15.4753C768.457 1.67977 851.404 8.82065 897.54 47.6402C935.605 79.6684 949 135.941 949 184.547C949 221.989 935.277 333.328 935.277 295.887" stroke="#FAD9E9" stroke-width="18" stroke-linecap="round" />
                    </svg> */}

                    {events.map((event, index) => (
                        
                        <li key={event.id} style={{ flexDirection: index % 2 !== 0 && "row-reverse" }} className="event-list-item">
                            
                            <div className="event-image">
                                <img style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: "20px", borderTopLeftRadius: "10px", zIndex: 10 }} src={'http://127.0.0.1:8000/' + event.image} alt={event.name} />
                                {!isOpened ? <button style={{ borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: 0, borderTopLeftRadius: 0, padding: '2px', cursor: 'pointer', backgroundColor: '#8f7bb3', fontFamily: `"Kadwa", serif`, fontSize: '1.25rem' }} onClick={() => handleClickDetails(index, event.name, event.description)} id={'viewBtn' + index}>View Details</button> : <button style={{ borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: 0, borderTopLeftRadius: 0, padding: '2px', cursor: 'pointer', backgroundColor: '#8f7bb3', fontFamily: `"Kadwa", serif`, fontSize: '1.25rem' }} onClick={() => handleClickLess(index, event.name, event.description)} id={'viewBtnLess' + index}>View Less</button>}

                            </div>
                            <div id={'events' + index} style={{ width: '100%' }}></div>
                            {/* <div style={{paddingLeft: index%2!==0 && "20px", paddingRight: index%2===0 && "20px"}} className={"event-info" + " " + (index%2 === 0 ? 'border-left' : 'border-right')} ref={(el) => (divRefs.current[index] = el)}>
                                <h3 className="event-title"></h3>
                                <p className="event-description"></p> <br />
                                <a style={{float: index%2 === 0 && "right", marginRight: index%2 === 0 && "20px"}} href={`/${event.id}`}><button style={{marginTop: "-20px"}} className="register-button">Know More</button></a>
                            </div> */}

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EventList;
