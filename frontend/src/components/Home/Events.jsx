// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EventList() {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/events/')
//             .then((response) => {
//                 setEvents(response.data);
//                 console.log()
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//         <div>
//             <h2>Event List</h2>
//             <ul>
//                 {events.map((event) => (
//                     <li key={event.id}>
//                         <h3>{event.name}</h3>
//                         <p>{event.description}</p>
//                         <img src={event.image} alt={event.name} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default EventList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import "../Home/all.css"
import topImage from "./bgimg/events_title.png"
import eventimage from "./bgimg/cfc.png"

function EventList() {
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/events/')
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleRegisterClick = (eventId) => {
        setSelectedEventId(eventId);
    };

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
                                <img src={eventimage} alt={event.name} className="event-image" />
                            </div>
                            <div className="event-info">
                                <h3 className="event-title">{event.name}</h3>
                                <p className="event-description">{event.description}</p>
                                <button onClick={() => handleRegisterClick(event.id)} className="register-button">Register Here</button>
                                {selectedEventId === event.id && <RegistrationForm eventId={event.id} />}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EventList;
