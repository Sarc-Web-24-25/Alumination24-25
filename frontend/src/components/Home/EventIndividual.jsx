
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
import letter from '../Home/bgimg/letter.png'
import CursorAnimation from "./CursorAnimation"

function EventIndividual() {
    const [selectedEventId, setSelectedEventId] = useState(null);
    const { key } = useParams();

    try {
        var userData = JSON.parse(localStorage.getItem("userData"));
    } catch (err) {
        console.log(err);
    }

    const { event, otherDetails, setOtherDetails, error, success, fetchEvent, register } = useIndividualEvent();




    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    useEffect(() => {
        // Add a listener to update dimensions when the window size changes
        const handleResize = () => {
          setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    const opts = windowDimensions.width > 840 ? {
        height: '512',
        width: '840',
    }:{ 
        height: `${0.6*windowDimensions.width}`,
        width: '100%',
    }


    useEffect(() => {
        fetchEvent(key);
    }, [key]);



    const [regBox, setRegBox] = useState(false);
    const [checkFields, setCheckFields] = useState(false);

    const [pref1, setPref1] = useState("");
    const [pref2, setPref2] = useState("");
    const [pref3, setPref3] = useState("");

    const [prefDate, setPrefDate] = useState("");


    useEffect(() => {
        if(pref1 && pref2 && pref3 && prefDate){
            setCheckFields(true);
        }else{
            setCheckFields(false);
        }
        setOtherDetails(
            {
                "other_details": {
                    "field_pref1": pref1,
                    "field_pref2": pref2,
                    "field_pref3": pref3,
                    "pref_date": prefDate,
                }
            }
        )

    }, [pref1, pref2, pref3, prefDate]);


    const handleRegisterClick = (eventId, isRegNeeded) => {

        console.log(eventId, isRegNeeded)
        if (!userData) {
            Swal.fire({
                title: 'Please Login',
                text: 'You need to login to register for this event',
                icon: 'warning',
                confirmButtonText: 'OK',
                iconColor: 'brown',
                confirmButtonColor: 'brown',
                background: `url(${letter})`,
            }).then(result => {
                if (result.isConfirmed) {
                    window.location.href = "/login"
                }
            })
        }

        else if(isRegNeeded && !regBox){
            setRegBox(true);
            return;
        }
        
        else {
            if(checkFields){
                register(eventId);
            }else{
                Swal.fire({
                    title: 'Please fill all the fields',
                    text: 'You need to fill all the fields to register for this event',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                    iconColor: 'brown',
                    confirmButtonColor: 'brown',
                    background: `url(${letter})`,
                })
            }
        }
    };



    const FIELDS = {
        "analytics": "Analytics",
        "consult": "Consulting",
        "finance": "Finance",
        "software": "IT/Software",
        "product": "Product Management",
        "core": "Core Engineering",
        "hr": "HR",
    }
    
    
    const DATES = {
        "21": "21st October",
        "22": "22nd October",
        "both": "Both Works",
    }


    const fieldOptions = Object.keys(FIELDS).map((key) => {
        return <option value={key}>{FIELDS[key]}</option>
    });

    const dateOptions = Object.keys(DATES).map((key) => {
        return <option value={key}>{DATES[key]}</option>
    });


    const handlePref1Change = (e) => {
        setPref1(e.target.value);
    }

    const handlePref2Change = (e) => {
        setPref2(e.target.value);
    }

    const handlePref3Change = (e) => {
        setPref3(e.target.value);
    }

    const handleDateChange = (e) => {
        setPrefDate(e.target.value);
    }

    return (
        <>
            {
                event && <div className="event-list-container">
                    <CursorAnimation />
                    <div className="top-section">
                        <img src={headingImage} alt="Top Image" className="top-imagee" />
                        <h1 style={{ marginBottom: event.youtube_link === "" && "15vh" }} className="top-titlee">{event.name}</h1>
                    </div>
                    <div className='main-event' style={{ width: "100vw", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                        {event.youtube_link !== "" && <YouTube className='youtube' opts={opts} videoId={event.youtube_link}/>}
                        <div className='if-phone' style={{ display: "flex", justifyContent: "center", flexDirection: event.youtube_link != "" ? "column" : "row", alignItems: "center" }}>
                            <img style={{ marginRight: event.youtube_link === "" && "15vw" }} className='poster' src={`https://koitoroklo.sarc-iitb.org${event.image}`} alt="" />
                            <div className='event-desc'>
                                {event.description}
                                <br />
                                <p style={{marginBottom: "0", color: "brown", fontWeight: "bold", fontSize:"120%"}}>{event.date}</p>
                                <div style={{display: !regBox && "none"}} className='fields-container'>
                                    <select onChange={(e) => handlePref1Change(e)} className='field-input' value={pref1} name="" id="">
                                        <option value="">Field Preference 1</option>
                                        {fieldOptions}
                                    </select>
                                    <select onChange={(e) => handlePref2Change(e)} className='field-input'  value={pref2} name="" id="">
                                        <option value="">Field Preference 2</option>
                                        {fieldOptions}
                                    </select>
                                    <select onChange={(e) => handlePref3Change(e)} className='field-input'  value={pref3} name="" id="">
                                        <option value="">Field Preference 3</option>
                                        {fieldOptions}
                                    </select>
                                    <select onChange={(e) => handleDateChange(e)} className='field-input'  value={prefDate} name="" id="">
                                        <option value="">Date Preference</option>
                                        {dateOptions}
                                    </select>
                                </div>
                                <button disabled={event.isLaunched} onClick={() => handleRegisterClick(event.id, event.isRegNeeded)} className='register-button' style={{ float: 'right', marginTop: "20px", width: "100%", opacity: event.isLaunched && "0.7", cursor: event.isLaunched && "not-allowed" }}>{event.button_text}</button>
                            </div>
                        </div>
                    </div>
                </div>
            }</>
    );
}

export default EventIndividual;
