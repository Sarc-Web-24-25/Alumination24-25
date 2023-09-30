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
        <div style={eventListContainerStyle}>
            <h2>Event List</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id} style={eventListItemStyle}>
                        <div style={eventImageStyle}>
                            <img src={event.image} alt={event.name} style={imageStyle} />
                        </div>
                        <div style={eventInfoStyle}>
                            <h3 style={eventTitleStyle}>{event.name}</h3>
                            <p style={eventDescriptionStyle}>{event.description}</p>
                            <button onClick={() => handleRegisterClick(event.id)}>Register Here</button>
                            {selectedEventId === event.id && <RegistrationForm eventId={event.id} />}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const eventListContainerStyle = {
    backgroundImage: `url('bgimg/events_bg.png')`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    padding: '20px', // Add padding to separate content from the background
};


const eventListItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
};

const eventImageStyle = {
    flex: '1',
};

const imageStyle = {
    width: '100px', // Adjust the image size as needed
    height: '100px', // Adjust the image size as needed
};

const eventInfoStyle = {
    flex: '3',
    paddingLeft: '20px', // Add spacing between image and info
};

const eventTitleStyle = {
    backgroundColor: '#533838',
    color: '#FFF',
    padding: '10px',
    marginBottom: '10px',
};

const eventDescriptionStyle = {
    backgroundColor: '#392828', // Background color for description
    padding: '10px',
    opacity: '80%'
};

export default EventList;
