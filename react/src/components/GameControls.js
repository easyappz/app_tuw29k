import React from 'react';
import './GameControls.css';

function GameControls() {
  return (
    <div className="game-controls">
      <div className="control-info">
        <h3>Управление</h3>
        <p>WASD - Движение</p>
        <p>Мышь - Прицелиться</p>
        <p>ЛКМ - Стрелять</p>
      </div>
    </div>
  );
}

export default GameControls;
