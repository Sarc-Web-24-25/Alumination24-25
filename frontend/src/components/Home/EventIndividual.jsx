
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import topImage from "./bgimg/events_title.png"
import eventimage from "./bgimg/cfc.png"
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import useIndividualEvent from '../../hooks/useIndividualEvent';
import headingImage from './indiEvent.png'
import Swal from 'sweetalert2';

function EventIndividual() {
    const [selectedEventId, setSelectedEventId] = useState(null);
    const { key } = useParams();

    try {
        var userData = JSON.parse(localStorage.getItem("userData"));
    } catch (err) {
        console.log(err);
    }

    const { event, error, success, fetchEvent, register } = useIndividualEvent();


    const opts = {
        height: '512',
        width: '840',
    };


    useEffect(() => {
        fetchEvent(key);
    }, [key]);




    const handleRegisterClick = (eventId) => {

        if (!userData) {
            Swal.fire({
                title: 'Please Login',
                text: 'You need to login to register for this event',
                icon: 'warning',
                confirmButtonText: 'OK'
            }).then(result => {
                if (result.isConfirmed) {
                    window.location.href = "/login"
                }
            })
        } else {

            register(eventId);
        }
    };

    return (
        <>
            {
                event && <div className="event-list-container">
                    <div className="top-section">
                        <img src={headingImage} alt="Top Image" className="top-imagee" />
                        <h1 style={{ marginBottom: event.youtube_link === "" && "15vh" }} className="top-titlee">{event.name}</h1>
                    </div>
                    <div style={{ width: "100vw", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        {event.youtube_link !== "" && <YouTube opts={opts} videoId={event.youtube_link} className="youtube" />}
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: event.youtube_link != "" ? "column" : "row", alignItems: "center" }}>
                            <img style={{ marginRight: event.youtube_link === "" && "15vw" }} className='poster' src={`http://localhost:8000${event.image}`} alt="" />
                            <div className='event-desc'>
                                {event.description}
                                <button onClick={() => handleRegisterClick(event.id)} className='register-button' style={{ float: 'right', marginTop: "20px", width: "100%" }}>{event.button_text}</button>
                            </div>
                        </div>
                    </div>
                </div>
            }</>
    );
}

export default EventIndividual;
