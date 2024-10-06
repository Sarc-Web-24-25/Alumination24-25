// Petal.js
import React from 'react';
import './Petal.css'; // Ensure you create this CSS file

const Petal = () => {
    const style = {
        left: `${Math.random() * 100}vw`, // Random position
        animationDuration: `${Math.random() * 3 + 2}s`, // Random duration between 2s and 5s
        opacity: Math.random(),
    };

    return <div className="petal" style={style}></div>;
};

export default Petal;
