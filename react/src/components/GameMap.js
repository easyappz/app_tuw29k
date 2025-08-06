import React from 'react';
import './GameMap.css';

function GameMap({ children }) {
  return (
    <div className="game-map">
      {children}
    </div>
  );
}

export default GameMap;
