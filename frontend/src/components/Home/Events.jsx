import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";
import "../Home/all.css";
import topImage from "./bgimg/events_title.png";
import eventimage from "./bgimg/cfc.png";
import YouTube from "react-youtube";
import img from "../Home/photos24/image.png";
import gsap from "gsap";
import ImageCarousel from "./EventCarousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import frame from './photos24/frame.png';

// import CursorAnimation from "./CursorAnimation"
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

function EventList() {
  const [mainEvents, setMainEvents] = useState([]);
  const divRefs = useRef([]);
  // const rightRefs = useRef([]);
  const [events, setEvents] = useState([]);
  // const [selectedEventId, setSelectedEventId] = useState(null);
  const [isOpened, setIsOpened] = useState(false);

  const sortEvents = (events) => {
    events.sort((a, b) => {
      // event with ID 16 at the top.
      if (a.id === 16) return -1;
      if (b.id === 16) return 1;

      if (a.isLaunched && !b.isLaunched) return -1;
      if (!a.isLaunched && b.isLaunched) return 1;
      // If all sorting criteria fail, maintain the original order.
      return 0;
    });
    setEvents(events);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/events/")
      .then((response) => {
        const sortedEvents = [...response.data]; // Create a copy of the events array
        sortEvents(sortedEvents); // Sort the events based on your criteria
        setEvents(sortedEvents); // Update the state with the sorted array
        sortedEvents.forEach((element) => {
          // console.log(element.priority);
          if (element.priority) setMainEvents((prev) => [...prev, element]);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (divRefs.current.length !== events.length) return; // Ensure refs are properly set
    divRefs.current.forEach((ref, index) => {
      if (!ref) return; // Skip if any refs are undefined or null
      gsap.fromTo(
        ref,
        {
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    ScrollTrigger.refresh(); // Ensure ScrollTrigger is updated after refs are set

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [events]);
  // Use `events` dependency instead of `divRefs.current`
  return (
    <div className="event-list-container" style={{ padding: "10vh 0" }}>
      <ImageCarousel main={mainEvents} />
      {/* <span className='event-head'>Events</span> */}
      <div className="page-content" style={{ zIndex: 0 }}>
        <ul>
          {events.map((event, index) => (
            <li
              key={event.id}
              style={{ flexDirection: index % 2 !== 0 && "row-reverse" }}
              className="event-list-item"
            >
              <div className="event-image">
                <img
                  style={{
                    borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px",
                    zIndex: 10,
                  }}
                  src={"http://127.0.0.1:8000/" + event.image}
                  alt={event.name}
                />
              </div>

              {/* <div id={'events' + index} style={{ width: '100%'}}></div> */}
              <div
                ref={(el) => (divRefs.current[index] = el)}
                className={
                  "event-info" +
                  " " +
                  (index % 2 === 0 ? "border-left" : "border-right")
                }
              >
                <h3 class="event-title">{event.name}</h3>
                <p class="event-description">{event.description}</p> <br />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventList;
