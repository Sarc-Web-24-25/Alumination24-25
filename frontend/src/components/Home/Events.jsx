
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import "../Home/all.css"
import topImage from "./bgimg/events_title.png"
import eventimage from "./bgimg/cfc.png"
import YouTube from 'react-youtube';
import img from '../Home/photos24/image.png'
import gsap from 'gsap'

// import CursorAnimation from "./CursorAnimation"

function EventList() {
    const divRefs = useRef([]);
    // const rightRefs = useRef([]);
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState(null);

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
                // console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleClick = (index, title, desc) => {
        const div = document.createElement('div');
        const divParent = document.querySelector('#events' + `${index}`);

        div.innerHTML = `
            <h3 class="event-title">${title}</h3>
            <p class="event-description">${desc}</p> <br />
        `

        div.className = "event-info" + " " + (index%2 === 0 ? 'border-left' : 'border-right')

        div.style.paddingRight = "20px";
        div.style.paddingLeft = "20px";
        
        divRefs.current[index] = div;


        divParent.append(div);

        if(divRefs.current[index]){
            gsap.from(divRefs.current[index], {
            x: (index%2 === 0) ? -300 : 300, // Slide out by 300px (adjust based on your needs)
            duration: 2, // Animation duration in seconds
            ease: 'power3.out', // Easing function for smoothness
            opacity: 0
        });
        }
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
            {/*<CursorAnimation />*/}
            {/* <div className="top-section">
                <img src={topImage} alt="Top Image" className="top-image"/>
                <h1 className="top-title">EVENTS</h1>
            </div> */}
            <div className="page-content">
                <ul>
                
                    {events.map((event, index) => (
                        
                        <li key={event.id} style={{flexDirection: index%2 !== 0 && "row-reverse"}} className="event-list-item">
                            <div className="event-image" onClick={() => handleClick(index, event.name, event.description)}>
                                <img style={{borderRadius:"20px"}} src={img} alt={event.name} />
                            </div>
                            <div id={'events' + index} style={{width: '100%'}}></div>
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
