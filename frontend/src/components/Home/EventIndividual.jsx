
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
import MultiSelect from 'react-select';


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
    } : {
        height: `${0.6 * windowDimensions.width}`,
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

    const [workshops, setWorkshops] = useState([]);



    useEffect(() => {
        console.log(workshops);
        if ((pref1 && pref2 && pref3 && prefDate) || (workshops.length > 0)) {
            setCheckFields(true);
        } else {
            setCheckFields(false);
        }
        if (event) {
            setOtherDetails(
                !event.isWorkshops ? {
                    "other_details": !event.isGM ? {
                        "field_pref1": pref1,
                        "field_pref2": pref2,
                        "field_pref3": pref3,
                        "pref_date": prefDate,
                    } : {
                        "field_pref1_gm": pref1,
                        "field_pref2_gm": pref2,
                        "field_pref3_gm": pref3,
                        "pref_date": prefDate,
                    }
                } : {
                    "other_details": {
                        "workshops": workshops.map((workshop) => workshop.value),
                    }
                }
            )
        }

    }, [pref1, pref2, pref3, prefDate, workshops]);


    const handleRegisterClick = (eventId, isRegNeeded) => {

        if(eventId === 2){
            window.location.href = "https://forms.gle/J4t7hJaB7xViaZKD6"
            return 
        }

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

        else if (isRegNeeded && !regBox) {
            setRegBox(true);
            return;
        }

        else {
            if ((checkFields && isRegNeeded) || (!isRegNeeded)) {
                register(eventId);
            } else {
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

    const FIELDS_GM = {
        "analytics": "Analytics",
        "consult": "Consulting",
        "finance": "Finance",
        "software": "IT/Software",
        "product": "Product Management",
        "quant": "Quant",
    }

    const WORKSHOPS = {
        'consult': 'Consulting',
        'finance': 'Finance',
        'analytics': 'Analytics',
        'software': 'IT/Software',
        'product': 'Product Management',
        'quant': 'Quant',
        'blockchain': 'Blockchain',
        'hr': 'HR',
    }


    const fieldOptions = Object.keys(FIELDS).map((key) => {
        return <option value={key}>{FIELDS[key]}</option>
    });

    const fieldOptionsGM = Object.keys(FIELDS_GM).map((key) => {
        return <option value={key}>{FIELDS_GM[key]}</option>
    });

    const dateOptions = Object.keys(DATES).map((key) => {
        return <option value={key}>{DATES[key]}</option>
    });

    const workshopOptions = Object.keys(WORKSHOPS).map((key) => {
        return { value: key, label: WORKSHOPS[key] }
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
                event && <div>
                    <div style={{ overflowX: "hidden" }} className="event-list-container">
                        <CursorAnimation />
                        <div className="top-section">
                            <img src={headingImage} alt="Top Image" className="top-imagee" />
                            <h1 style={{ marginBottom: event.youtube_link === "" && "15vh" }} className="top-titlee">{event.name}</h1>
                        </div>
                        <div className='main-event' style={{ width: "100vw", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            {event.youtube_link !== "" && <YouTube className='youtube' opts={opts} videoId={event.youtube_link} />}
                            <div className='if-phone' style={{ display: "flex", justifyContent: "center", flexDirection: event.youtube_link != "" ? "column" : "row", alignItems: "center" }}>
                                <img style={{ marginRight: event.youtube_link === "" && "15vw" }} className='poster' src={`https://alumination.sarc-iitb.org${event.image}`} alt="" />
                                <div className='event-desc'>
                                    {event.description}
                                    <br />
                                    <p style={{ marginBottom: "0", color: "brown", fontWeight: "bold", fontSize: "120%" }}>{event.date}</p>
                                    <div style={{ display: !regBox && "none" }} className='fields-container'>

                                        {
                                            !event.isWorkshops && <>
                                                <select onChange={(e) => handlePref1Change(e)} className='field-input' value={pref1} name="" id="">
                                                    <option value="">Field Preference 1</option>
                                                    {event.isGM ? fieldOptionsGM : fieldOptions}
                                                </select>
                                                <select onChange={(e) => handlePref2Change(e)} className='field-input' value={pref2} name="" id="">
                                                    <option value="">Field Preference 2</option>
                                                    {event.isGM ? fieldOptionsGM : fieldOptions}
                                                </select>
                                                <select onChange={(e) => handlePref3Change(e)} className='field-input' value={pref3} name="" id="">
                                                    <option value="">Field Preference 3</option>
                                                    {event.isGM ? fieldOptionsGM : fieldOptions}
                                                </select>
                                                <select onChange={(e) => handleDateChange(e)} className='field-input' value={prefDate} name="" id="">
                                                    <option value="">Date Preference</option>
                                                    {dateOptions}
                                                </select></>
                                        }


                                        {
                                            event.isWorkshops && <>
                                            <p style={{margin:"0px", marginTop:"10px", color: "brown"}}>Which workshops would you like to attend?</p>
                                            <MultiSelect
                                            id="workshops"
                                            name="workshops"
                                            isMulti={true}
                                            options={workshopOptions}
                                            value={workshops}
                                            onChange={selectedOptions => {
                                                setWorkshops(selectedOptions);
                                            }}
                                            theme={(theme) => ({
                                                ...theme,
                                                borderRadius: 10,
                                                colors: {
                                                    ...theme.colors,
                                                    text: 'orangered',
                                                    primary25: '#ffd1ab',
                                                    primary: 'black',
                                                    background: 'black',
                                                    backgroundColor: 'black',
                                                },
                                            })}
                                            styles={{
                                                container: provided => ({
                                                    ...provided,
                                                    height: '20%',
                                                    width: '90%',
                                                }),
                                                control: provided => ({
                                                    ...provided,
                                                }),
                                                option: provided => ({
                                                    ...provided,
                                                    color: 'black',
                                                    '&:hover': {
                                                        backgroundColor:
                                                            '#FFD1AB',
                                                        color: 'black',
                                                    },
                                                }),
                                            }}
                                        />
                                            </>
                                        }


                                    </div>

                                    <button disabled={!event.isLaunched} onClick={() => handleRegisterClick(event.id, event.isRegNeeded)} className='register-button' style={{ float: 'right', marginTop: "20px", width: "100%", opacity: !event.isLaunched && "0.7", cursor: !event.isLaunched && "not-allowed" }}>{event.button_text}</button>
                                </div>
                            </div>
                        </div>

                        {event.speakers[0] && <div className="event-speakers-section yellow-box" style={{ color: "#FFD1AB", fontSize: "20px", fontFamily: 'Inknut Antiqua', }}>
                            <h4 className="event-speaker-heading">Speakers</h4>
                            <div className="event-speakers-list">
                                {event.speakers.map((speaker) => (
                                    <li key={speaker.id} className="event-speaker-item">
                                        <div className="event-speaker-info">
                                            <img src={`https://alumination.sarc-iitb.org${speaker.profile_image}`} alt={speaker.fullname} className="event-speaker-image" />
                                            <p className="event-speaker-name">{speaker.fullname}</p>
                                            <p className="event-speaker-ka-desc">{speaker.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </div>
                        </div>}
                    </div>




                    {/* Speakers Section */}



                </div>
            }

        </>
    );
}

export default EventIndividual;
