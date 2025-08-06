import React from 'react';
import './Bullet.css';

function Bullet({ position, direction }) {
  return (
    <div 
      className="bullet"
      style={{ 
        left: position.x,
        top: position.y,
        transform: `rotate(${direction}deg)`
      }}
    ></div>
  );
}

export default Bullet;
