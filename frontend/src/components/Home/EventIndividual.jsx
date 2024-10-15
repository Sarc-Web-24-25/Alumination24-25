import React, { useState, useEffect } from "react";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";
import topImage from "./bgimg/events_title.png";
import eventimage from "./bgimg/cfc.png";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import useIndividualEvent from "../../hooks/useIndividualEvent";
import headingImage from "./indiEvent.png";
import Swal from "sweetalert2";
import letter from "../Home/bgimg/letter.png";
// import CursorAnimation from "./CursorAnimation";
import MultiSelect from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import message_background from './photos24/message_background.jpg'

function EventIndividual() {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const { key } = useParams();

  try {
    var userData = JSON.parse(localStorage.getItem("userData"));
  } catch (err) {
    console.log(err);
  }

  const {
    event,
    otherDetails,
    setOtherDetails,
    error,
    success,
    fetchEvent,
    register,
  } = useIndividualEvent();

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

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const opts =
    windowDimensions.width > 840
      ? {
        height: "100%",
        width: "100%",
      }
      : {
        // height: `${0.6 * windowDimensions.width}`,
        height: "100%",
        width: "100%",
      };

  useEffect(() => {
    fetchEvent(key);
  }, [key]);

  const [regBox, setRegBox] = useState(false);
  const [checkFields, setCheckFields] = useState(false);

  const [pref1, setPref1] = useState("");
  const [pref2, setPref2] = useState("");
  const [pref3, setPref3] = useState("");

  const [prefDate, setPrefDate] = useState("");
  const [prefType, setPrefType] = useState("");

  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    console.log(workshops);
    if ((pref1 && pref2 && pref3 && prefDate) || workshops.length > 0) {
      setCheckFields(true);
    } else {
      setCheckFields(false);
    }
    if (event) {
      setOtherDetails(
        !event.isWorkshops
          ? {
            other_details: !event.isGM
              ? {
                field_pref1_migd: pref1,
                field_pref2_migd: pref2,
                field_pref3_migd: pref3,
                pref_date: prefDate,
                pref_type_migd: prefType
              }
              : {
                field_pref1_gm: pref1,
                field_pref2_gm: pref2,
                field_pref3_gm: pref3,
                // pref_date: prefDate,
                
              },
          }
          : {
            other_details: {
              workshops: workshops.map((workshop) => workshop.value),
            },
          }
      );
    }
  }, [pref1, pref2, pref3, prefDate, prefType, workshops]);

  const handleRegisterClick = (eventId, isRegNeeded) => {
    // if (eventId === 2) {
    //   window.location.href = "https://forms.gle/J4t7hJaB7xViaZKD6";
    //   return;
    // }

    if (!userData) {
      Swal.fire({
        title: '<span style="color: red;">Please Login</span>',
        html: '<span style="color: blue;">You need to login to register for this event</span>',
        icon: "warning",
        confirmButtonText: "OK",
        iconColor: "brown",
        confirmButtonColor: "brown",
        background: `url(${message_background})`,
        customClass: {
          title: 'custom-title',
          text: 'custom-text'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    } else if (isRegNeeded && !regBox) {
      setRegBox(true);
      return;
    } else {
      if ((checkFields && isRegNeeded) || !isRegNeeded) {
        register(eventId);
      } else {
        Swal.fire({
          title: '<span style="color: black;">Please fill all the fields</span>',
          html: '<span style="color: beige;">You need to fill all the fields to register for this event</span>',
          icon: "warning",
          confirmButtonText: "OK",
          iconColor: "brown",
          confirmButtonColor: "brown",
          background: `url(${message_background})`,
        });
      }
    }
  };

  const FIELDS = {
    analytics: "Analytics",
    consult: "Consulting",
    finance: "Finance",
    software: "IT/Software",
    product: "Product Management",
    core: "Core Engineering",
    hr: "HR",
  };

  const TYPES_MIGD = {
    mock: "Mock Interview",
    grp_diss: "Group Discussion",
    any: "Any"
  }

  const DATES_MIGD = {
    26: "26th October (Online)",
    27: "27th October (Offline)",
    Any: "Any"
    // both: "Both Works",
  };

  const FIELDS_GM = {
    analytics: "Analytics",
    consult: "Consulting",
    finance: "Finance",
    software: "IT/Software",
    product: "Product Management",
    quant: "Quant",
  };

  const FIELDS_MIGD = {
    analytics: "Analytics",
    consult: "Consulting",
    finance: "Finance",
    software: "IT/Software",
    product: "Product Management",
    quant: "Quant",
    core: "Core",
    hr: "Human Resource",
    pm: "Product Management"
  }

  const WORKSHOPS = {
    consult: "Consulting",
    finance: "Finance",
    analytics: "Analytics",
    software: "IT/Software",
    product: "Product Management",
    quant: "Quant",
    blockchain: "Blockchain",
    hr: "HR",
  };

  const fieldOptions = Object.keys(FIELDS).map((key) => {
    return <option value={key}>{FIELDS[key]}</option>;
  });

  const fieldOptionsGM = Object.keys(FIELDS_GM).map((key) => {
    return <option value={key}>{FIELDS_GM[key]}</option>;
  });

  const fieldOptionsMIGD = Object.keys(FIELDS_MIGD).map((key) => {
    return <option value={key}>{FIELDS_MIGD[key]}</option>;
  });

  // const dateOptions = Object.keys(DATES).map((key) => {
  //   return <option value={key}>{DATES[key]}</option>;
  // });

  const typeOptionsMIGD = Object.keys(TYPES_MIGD).map((key) => {
    return <option value={key}>{TYPES_MIGD[key]}</option>;
  });

  const dateOptionsMIGD = Object.keys(DATES_MIGD).map((key) => {
    return <option value={key}>{DATES_MIGD[key]}</option>;
  });

  const workshopOptions = Object.keys(WORKSHOPS).map((key) => {
    return { value: key, label: WORKSHOPS[key] };
  });

  const handlePref1Change = (e) => {
    setPref1(e.target.value);
  };

  const handlePref2Change = (e) => {
    setPref2(e.target.value);
  };

  const handlePref3Change = (e) => {
    setPref3(e.target.value);
  };

  const handleDateChange = (e) => {
    setPrefDate(e.target.value);
  };

  const handleTypeChange = (e) => {
    console.log("inside type change function")
    setPrefType(e.target.value);
  };

  return (
    <>
      {event && (
        <div>
          <div style={{ overflowX: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} className="event-list-container">
            <div className="Event_Heading">
              <p>{event.name}</p>
            </div>
            {/* <CursorAnimation /> */}
            {/* <div className="top-section">
              <img src={headingImage} alt="Top Image" className="top-imagee" />
              <h1
                style={{ marginBottom: event.youtube_link === "" && "15vh" }}
                className="top-titlee"
              >
                {event.name}
              </h1>
            </div> */}
            <div
              className="main-event"
              style={{
                // width: "100vw",
                height: "100%",
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                border: "5px solid white",
              }}
            >

              <div style={{ width: '100%' }}>
                {event.youtube_link !== "" && (
                  <YouTube
                    className="youtube"
                    opts={opts}
                    videoId={event.youtube_link}
                    style={{ aspectRatio: '16/9',  }}
                  />
                )}
              </div>
              {/* {event.youtube_link !== "" && (
                <YouTube
                  className="youtube"
                  opts={opts}
                  videoId={event.youtube_link}
                />
              )} */}
              <div
                className="if-phone"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#515691E5"
                }}
              >
                <div className="event-img">
                  <img
                    /*style={{ marginRight: event.youtube_link === "" && "15vw" }}*/
                    className="poster"
                    src={`http://127.0.0.1:8000/${event.image}`}
                    alt=""
                  />
                </div>

                <div className="event-desc">
                  {event.description}
                  <br />
                  <p
                    style={{
                      marginTop: "4vh",
                      width: "fit-content",
                      color: "#515691E5",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",  // Semi-transparent white for the blur effect
                      borderRadius: "12px",  // Rounded corners
                      fontWeight: "bold",
                      fontSize: "120%",
                      textAlign: "center",  // Center-align the text
                      padding: "10px",  // Add padding for better spacing inside the box
                      backdropFilter: "blur(8px)",  // Blur effect for the background
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: "8px", color: "#515691E5" }} />
                    <span>Date: {event.date}</span>
                  </p>
                  <div
                    style={{ display: !regBox && "none" }}
                    className="fields-container"
                  >
                    {event.isMIGD && (
                      <>
                        <select
                          onChange={(e) => handlePref1Change(e)}
                          className="field-input"
                          value={pref1}
                          name=""
                          id=""
                        >
                          <option value="">Field Preference 1</option>
                          {fieldOptionsMIGD}
                        </select>
                        <select
                          onChange={(e) => handlePref2Change(e)}
                          className="field-input"
                          value={pref2}
                          name=""
                          id=""
                        >
                          <option value="">Field Preference 2</option>
                          {fieldOptionsMIGD}
                        </select>
                        <select
                          onChange={(e) => handlePref3Change(e)}
                          className="field-input"
                          value={pref3}
                          name=""
                          id=""
                        >
                          <option value="">Field Preference 3</option>
                          {fieldOptionsMIGD}
                        </select>
                        <select
                          onChange={(e) => handleDateChange(e)}
                          className="field-input"
                          value={prefDate}
                          name=""
                          id=""
                        >
                          <option value="">Date Preference</option>
                          {dateOptionsMIGD}
                        </select>

                        {/* <select
                          onChange={(e) => handleDateChange(e)}
                          className="field-input"
                          value={prefDate}
                          name=""
                          id=""
                        >
                          <option value="">Date Preference</option>
                          {dateOptionsMIGD}
                        </select> */}

                        <select
                          onChange={(e) => handleTypeChange(e)}
                          className="field-input"
                          value={prefType}
                          name=""
                          id=""
                        >
                          <option value="">Preferred Type</option>
                          {typeOptionsMIGD}
                        </select>
                      </>
                    )}

                    {event.isWorkshops && (
                      <>
                        {/* <p
                          style={{
                            margin: 0,
                            marginBottom: "2vh",
                            marginTop: "2vh",
                            color: "white",
                          }}
                        >
                          Which workshops would you like to attend?
                        </p> */}
                        <MultiSelect
                          id="workshops"
                          name="workshops"
                          isMulti={true}
                          options={workshopOptions}
                          placeholder="Which workshops would you like to attend?"
                          value={workshops}
                          onChange={(selectedOptions) => {
                            setWorkshops(selectedOptions);
                          }}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 5,
                            colors: {
                              ...theme.colors,
                              text: "orangered",
                              primary25: "#b8b3e2",
                              primary: "black",
                              background: "black",
                              backgroundColor: "black",
                            },
                          })}
                          styles={{
                            container: (provided) => ({
                              ...provided,
                              height: "20%",
                              width: "100%",
                              marginTop: "3vh",
                              marginBottom: "2vh",
                            }),
                            control: (provided) => ({
                              ...provided,
                            }),
                            option: (provided) => ({
                              ...provided,
                              color: "black",
                              "&:hover": {
                                backgroundColor: "#b8b3e2",
                                color: "black",
                              },
                            }),
                          }}
                        />
                      </>
                    )}

                    {event.isGM && (
                      <>
                        <select
                          onChange={(e) => handlePref1Change(e)}
                          className="field-input"
                          value={pref1}
                          name=""
                          id=""
                        >
                          <option value="">Field Preference 1</option>
                          {fieldOptions}
                        </select>
                        <select
                          onChange={(e) => handlePref2Change(e)}
                          className="field-input"
                          value={pref2}
                          name=""
                          id=""
                        >
                          <option value="">Field Preference 2</option>
                          {fieldOptions}
                        </select>
                        <select
                          onChange={(e) => handlePref3Change(e)}
                          className="field-input"
                          value={pref3}
                          name=""
                          id=""
                        >
                          <option value="">Field Preference 3</option>
                          {fieldOptions}
                        </select>
                        {/* <select
                          onChange={(e) => handleDateChange(e)}
                          className="field-input"
                          value={prefDate}
                          name=""
                          id=""
                        >
                          <option value="">Date Preference</option>
                          {dateOptionsMIGD}
                        </select> */}
                      </>
                    )}

                    
                  </div>

                  <button
                    disabled={!event.isLaunched}
                    onClick={() =>
                      handleRegisterClick(event.id, event.isRegNeeded)
                    }
                    // className="register-button"
                    className={`register-button ${event.isLaunched ? 'enabled' : ''}`}
                  // style={{
                  //   float: "right",
                  //   marginTop: "1vh",
                  //   width: "100%",
                  //   fontWeight: "bold",
                  //   fontSize: "1.49em",
                  //   opacity: !event.isLaunched && "0.7",
                  //   cursor: !event.isLaunched && "not-allowed",
                  // }}
                  >
                    {event.button_text}
                  </button>
                </div>
              </div>
            </div>

            {event.speakers[0] && (
              <div
                className="event-speakers-section yellow-box"
                style={{
                  color: "#FFD1AB",
                  fontSize: "20px",
                  fontFamily: "Inknut Antiqua",
                }}
              >
                <h4 className="event-speaker-heading">Speakers</h4>
                <div className="event-speakers-list" style={{ display: 'flex', flexDirection: 'column' }}>
                  {event.speakers.map((speaker) => (
                    <li
                      key={speaker.id} className="event-list-item"
                      style={{
                        display: "flex",

                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(81, 86, 145, 1)",
                        border: "5px solid white",
                        textAlign: "left",
                        fontFamily: "sans-serif",

                      }}
                    >
                      <div className="event-img" style={{ paddingLeft: '2vw' }}>
                        <img
                          src={`http://127.0.0.1:8000/${speaker.profile_image}`}
                          alt={speaker.fullname}
                          // className="event-speaker-image"
                          // style={{borderRadius:"20px"}} 
                          width="125vw"
                          height="auto"
                        />
                      </div>
                      <div className="event-desc">
                        <p
                          style={{
                            fontSize: '2em',
                            textAlign: 'center',
                            color: '#ad92dc'
                          }}
                        /*className="event-title"*/>{speaker.fullname}</p>
                        <p /*className="event-desc"*/>
                          {speaker.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Speakers Section */}
        </div>
      )}
    </>
  );
}

export default EventIndividual;
