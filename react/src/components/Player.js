import React, { useEffect, useRef } from 'react';
import './Player.css';

function Player({ position, direction, isShooting }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.style.transform = `rotate(${direction}deg)`;
    }
  }, [direction]);

  return (
    <div 
      className={`player ${isShooting ? 'shooting' : ''}`} 
      ref={playerRef}
      style={{ 
        left: position.x, 
        top: position.y 
      }}
    >
      <div className="player-body"></div>
      <div className="player-gun"></div>
    </div>
  );
}

export default Player;
