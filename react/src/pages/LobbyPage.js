import React from 'react';
import './LobbyPage.css';

const LobbyPage = () => {
  return (
    <div className="lobby-container">
      <h1>Игровое Лобби</h1>
      <div className="lobby-content">
        <div className="lobby-card">
          <h3>Создать игру</h3>
          <button className="lobby-button">Создать</button>
        </div>
        <div className="lobby-card">
          <h3>Присоединиться</h3>
          <button className="lobby-button">Найти игру</button>
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;
