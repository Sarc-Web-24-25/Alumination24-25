import React, { useEffect } from 'react';
import './CursorAnimation.css'; // Import the CSS file

const CursorAnimation = () => {
    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            let bubbles = document.createElement('bubbles'); // Create the bubbles element
            let x = e.pageX;
            let y = e.pageY;
            bubbles.style.left = x + 'px';
            bubbles.style.top = y + 'px';
            let size = Math.random() * 6;
            bubbles.style.width = 1 + size + 'px';
            bubbles.style.height = 1 + size + 'px';
            bubbles.classList.add('bubbles'); // Apply the CSS class to the bubbles element

            document.body.appendChild(bubbles);

            setTimeout(function () {
                bubbles.remove();
            }, 1100);
        });

        return () => {
            // Clean up event listener when component unmounts
            document.removeEventListener('mousemove', () => { });
        };
    }, []);

    return null; // This component doesn't render any visible content
};

export default CursorAnimation;
