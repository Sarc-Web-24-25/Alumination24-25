import React, { useState } from 'react';
import './schedule.css'; // Import your CSS file
import CursorAnimation from "./CursorAnimation"
function Schedule() {
    const [currentPage, setCurrentPage] = useState('day1'); // Track the current schedule page

    const day1Schedule = [
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '10:00 AM', event: 'Workshops' },
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '10:00 AM', event: 'Workshops' },
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '10:00 AM', event: 'Workshops' },
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '10:00 AM', event: 'Workshops' },
        // Add more schedule items for day 1
    ];

    const day2Schedule = [
        { time: '9:00 AM', event: 'Workshops' },
        { time: '11:00 AM', event: 'Panel Discussion' },
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '10:00 AM', event: 'Workshops' },
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '11:00 AM', event: 'Panel Discussion' },
        { time: '9:00 AM', event: 'Shadow Program' },
        { time: '11:00 AM', event: 'Panel Discussion' },
        // Add more schedule items for day 2
    ];

    const handlePageChange = () => {
        setCurrentPage(currentPage === 'day1' ? 'day2' : 'day1');
    };

    return (
        <div className="schedule-container">
            <CursorAnimation />
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
    );
}

export default Schedule;
