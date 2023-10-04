import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

function CustomCursor() {
  useEffect(() => {
    const $glow = $('.stefan-glow');

    function drawGlow(e) {
      const $t = $(this);
      const x = e.pageX - $t.offset().left;
      const y = e.pageY - $t.offset().top;
      $t.find('.glow').css('transform', `translate(${x}px, ${y}px)`);
    }

    function removeGlow() {
      $('.glow').remove();
    }

    function addGlow() {
      $glow.append('<span class="glow"/>');
    }

    $glow.on({
      mouseenter: addGlow,
      mousemove: drawGlow,
      mouseleave: removeGlow,
    });

    // Cleanup when the component unmounts
    return () => {
      $glow.off({
        mouseenter: addGlow,
        mousemove: drawGlow,
        mouseleave: removeGlow,
      });
    };
  }, []); // Empty dependency array ensures useEffect runs once

  return null; // This component doesn't render any visible elements
}

export default CustomCursor;
