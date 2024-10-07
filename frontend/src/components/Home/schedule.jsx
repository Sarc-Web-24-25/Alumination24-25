import React, { useState } from "react";
import "./schedule.css"; // Import your CSS file
import CursorAnimation from "./CursorAnimation";
function Schedule() {
  return (

    <>
    <div className="schedule_container">
      <div className="schedule_upper">SCHEDULE</div>
      <div className="schedule_middle">DAY 0</div>
      <div className="schedule_lower">
        <div className="schedule_item1">
          <div className="schedule_event1">Events</div>
          <div className="schedule_time1">Time</div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event">Group Mentoring</div>
          <div className="schedule_time">8:00 AM - 9:00 AM</div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
      </div>
    </div>


    <div className="schedule_container">
      {/* <div className="schedule_upper">SCHEDULE</div> */}
      <div className="schedule_middle">DAY 1</div>
      <div className="schedule_lower">
        <div className="schedule_item1">
          <div className="schedule_event1">Events</div>
          <div className="schedule_time1">Time</div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
        <div className="schedule_item">
          <div className="schedule_event"></div>
          <div className="schedule_time"></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Schedule;
