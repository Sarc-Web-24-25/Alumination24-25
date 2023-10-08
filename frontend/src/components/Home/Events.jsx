
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import "../Home/all.css"
import topImage from "./bgimg/events_title.png"
import eventimage from "./bgimg/cfc.png"
import YouTube from 'react-youtube';

function EventList() {
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState(null);

    useEffect(() => {
        axios
            .get('api/events/')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

   
    return (
        <div className="event-list-container">
            <div className="top-section">
                <img src={topImage} alt="Top Image" className="top-image" />
                <h1 className="top-title">EVENTS</h1>
            </div>
            <div className="page-content">
                <ul>
                    {events.map((event, index) => (
                        <li key={event.id} style={{flexDirection: index%2 === 0 && "row-reverse"}} className="event-list-item">
                            <div className="event-image">
                                <img src={`http://localhost:8000${event.image}`} alt={event.name} width={"100%"} />
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
