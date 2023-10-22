import React, { useState } from 'react';
import './schedule.css'; // Import your CSS file
import CursorAnimation from "./CursorAnimation"
function Schedule() {
    const [currentPage, setCurrentPage] = useState('day1'); // Track the current schedule page

    const day1Schedule = [
        { time: '10:00 AM', event: 'Workshops' },
        { time: '4:00 PM', event: 'Alumni Arena' },
        { time: '5:00 PM', event: 'Coming Full Circle' },
        { time: '6:00 PM', event: 'Trailblazers' },
        { time: '7:30 PM', event: 'Beyond The Horizon | Vipul Goyal' },
        // Add more schedule items for day 1
    ];

    const day2Schedule = [
        { time: '10:00 AM', event: 'Workshops' },
        { time: '4:00 PM', event: 'Alumni Arena' },
        { time: '4:00 PM', event: 'Start it Up' },
        { time: '6:00 PM', event: 'Spotlight' },
        { time: '7:30 PM', event: 'Un-Engineering | Sameer Saxena & Jodi Anoorabh' },
        
       
        // Add more schedule items for day 2
    ];

    const handlePageChange = () => {
        setCurrentPage(currentPage === 'day1' ? 'day2' : 'day1');
    };

    return (
        <><div className='wdniofu'><CursorAnimation /><div className="schedule-container">
            
            <div className={`schedule-page ${currentPage}`}>
                <div className="schedule-header">
                    <h2>{currentPage === 'day1' ? 'Day 1 Schedule' : 'Day 2 Schedule'}</h2>
                    <button className="swipe-button" onClick={handlePageChange}>
                        {currentPage === 'day1' ? 'Day 2 Schedule' : 'Day 1 Schedule'}
                    </button>
                </div>

                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPage === 'day1'
                            ? day1Schedule.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.time}</td>
                                    <td>{item.event}</td>
                                </tr>
                            ))
                            : day2Schedule.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.time}</td>
                                    <td>{item.event}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div></>
    );
}

export default Schedule;
