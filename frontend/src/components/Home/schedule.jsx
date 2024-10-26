import React, { useState } from "react";
import "./schedule.css"; // Import your CSS file
import CursorAnimation from "./CursorAnimation";
function Schedule() {
  const eventsSchedule = [
    { time: "10:00 AM - 3:00 PM", event: "Group Mentoring" },
    { time: "10:00 AM", event: "Break The Ice " },
    { time: "10:00 AM - 5:00 PM", event: "MI/GD " },
    { time: "11:00 AM", event: "Innovation Expo " },
    { time: "10:00 AM - 5:00 PM", event: "Hostalgia " },
    { time: "10:00 AM - 11:00 AM", event: "Consult Workshop" },
    { time: "11:00 AM - 12:00 PM", event: "PM Workshop" },
    { time: "12:00 PM - 1:00 PM", event: "Finance Workshop" },
    { time: "1:30 PM - 2:30 PM", event: "Quant Workshop" },
    { time: "11:00 AM - 3:30 PM", event: "SARCathon Finals" },
    { time: "6:00 PM", event: "Start It Up" },
    { time: "4:00 PM", event: "Un-Engineering" },
    { time: "2:00 PM", event: "Trailblazers" },
    { time: "7:30 PM - 9:30 PM", event: "Beyond The Horizon " },
  ];
  return (
    <>
      <div className="schedule_container">
        <div className="schedule_upper">SCHEDULE</div>
        {/* <div className="schedule_middle">DAY 0</div> */}
        {/* <div className="schedule_lower"> */}
           {/* <div className="schedule_item1">
            <div className="schedule_event1">Events</div>
            <div className="schedule_time1">Time</div>
          </div>  */}
          {/* <div className="schedule_item" style={{ margin: "0 0 30px 0px" }}> */}
            {/* <div className="schedule_event">MI/GD</div>
            <div className="schedule_event">
              
            </div>
            <div className="schedule_time">10:00 AM - 5:00 PM</div>
          </div> */}
        {/* </div> */}

        {/* <div className="schedule_middle">DAY 1</div> */}
        <div className="schedule_lower">
          <div className="schedule_item1">
          <div className="schedule_event1">Events</div>
          <div className="schedule_time1">Time</div>
        </div>

          {eventsSchedule.map((item, index) => (
        <div key={index} className="schedule_item">
          <div className="schedule_event">{item.event}</div>
          <div className="schedule_time">{item.time}</div>
        </div>
      ))}
          <div style={{ height: "5vh" }}></div>
        </div>
      </div>
    </>
  );
}

export default Schedule;