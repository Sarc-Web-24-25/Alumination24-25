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
import RegistrationForm from './RegistrationForm'; // Create this component

function EventList() {
    const [events, setEvents] = useState([]);
    const [selectedEventId, setSelectedEventId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/events/')
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
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <img src={event.image} alt={event.name} />
                        <button onClick={() => handleRegisterClick(event.id)}>Register Here</button>
                        {selectedEventId === event.id && <RegistrationForm eventId={event.id} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;

