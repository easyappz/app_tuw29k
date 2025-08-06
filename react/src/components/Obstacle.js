import React from 'react';
import './Obstacle.css';

function Obstacle({ position, size }) {
  return (
    <div 
      className="obstacle"
      style={{ 
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height
      }}
    ></div>
  );
}

export default Obstacle;
