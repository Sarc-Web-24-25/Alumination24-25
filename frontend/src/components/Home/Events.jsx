
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import "../Home/all.css"
import topImage from "./bgimg/events_title.png"
import eventimage from "./bgimg/cfc.png"
import YouTube from 'react-youtube';

import CursorAnimation from "./CursorAnimation"
function EventList() {
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
            .get('api/events/')
            .then((response) => {
                const sortedEvents = [...response.data]; // Create a copy of the events array
                sortEvents(sortedEvents); // Sort the events based on your criteria
                setEvents(sortedEvents); // Update the state with the sorted array
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

   
    return (
        <div className="event-list-container">
            <CursorAnimation />
            <div className="top-section">
                <img src={topImage} alt="Top Image" className="top-image" />
                <h1 className="top-title">EVENTS</h1>
            </div>
            <div className="page-content">
                <ul>
                    {events.map((event, index) => (
                        <li key={event.id} style={{flexDirection: index%2 === 0 && "row-reverse"}} className="event-list-item">
                            <div className="event-image">
                                <img style={{borderRadius:"20px"}} src={`https://koitoroklo.sarc-iitb.org${event.image}`} alt={event.name} width={"100%"} />
                            </div>
                            <div style={{paddingLeft: index%2!==0 && "20px", paddingRight: index%2===0 && "20px"}} className="event-info">
                                <h3 className="event-title">{event.name}</h3>
                                <p className="event-description">{event.description}</p> <br />
                                <a style={{float: index%2 === 0 && "right", marginRight: index%2 === 0 && "20px"}} href={`/${event.id}`}><button style={{marginTop: "-20px"}} className="register-button">Know More</button></a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EventList;
