import React, { useEffect, useState } from 'react';
import './CursorAnimation.css'; // Import the CSS file

const CursorAnimation = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    useEffect(() => {
        const moveHandler = (e) => {
            setCursorX(e.pageX);
            setCursorY(e.pageY);
        };

        document.addEventListener('mousemove', moveHandler);

        return () => {
            // Clean up event listener when component unmounts
            document.removeEventListener('mousemove', moveHandler);
        };
    }, []);

    return (
        <>
            <div
                className="custom-cursor-dot"
                style={{ left: cursorX, top: cursorY }}
            ></div>
            <div
                className="custom-cursor-circle"
                style={{ left: cursorX, top: cursorY }}
            ></div>
        </>
    );
};

export default CursorAnimation;