import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events/')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <img src={event.image} alt={event.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;
