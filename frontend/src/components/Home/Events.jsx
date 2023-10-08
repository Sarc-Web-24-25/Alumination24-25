
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
                    {events.map((event) => (
                        <li key={event.id} className="event-list-item">
                            <div className="event-image">
                                {/* <img src={event.image} alt={event.name} className="event-image" /> */}
                                <img src={`http://localhost:8000${event.image}`} alt={event.name} className="event-image" />
                            </div>
                            <div className="event-info">
                                <h3 className="event-title">{event.name}</h3>
                                <p className="event-description">{event.description}</p>
                                <a href={`/${event.id}`}><button className="register-button">Know More</button></a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EventList;
