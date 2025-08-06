import React, { useState } from 'react';
import './LobbyPage.css';

const LobbyPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [players, setPlayers] = useState([
    { id: 1, name: 'Игрок 1', team: 'Террористы' },
    { id: 2, name: 'Игрок 2', team: 'Контр-Террористы' },
    { id: 3, name: 'Игрок 3', team: 'Террористы' },
    { id: 4, name: 'Игрок 4', team: 'Контр-Террористы' }
  ]);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleStartGame = () => {
    if (selectedTeam) {
      alert(`Игра начата! Вы в команде: ${selectedTeam}`);
    } else {
      alert('Пожалуйста, выберите команду перед стартом игры.');
    }
  };

  return (
    <div className="lobby-container">
      <h1>Игровое Лобби</h1>
      <div className="lobby-content">
        <div className="lobby-section team-selection">
          <h2>Выбор команды</h2>
          <div className="team-buttons">
            <button 
              className={`lobby-button team-button ${selectedTeam === 'Террористы' ? 'selected' : ''}`} 
              onClick={() => handleTeamSelect('Террористы')}
            >
              Террористы
            </button>
            <button 
              className={`lobby-button team-button ${selectedTeam === 'Контр-Террористы' ? 'selected' : ''}`} 
              onClick={() => handleTeamSelect('Контр-Террористы')}
            >
              Контр-Террористы
            </button>
          </div>
        </div>
        <div className="lobby-section player-list">
          <h2>Список игроков</h2>
          <div className="players-container">
            {players.map(player => (
              <div key={player.id} className={`player-item ${player.team === 'Террористы' ? 'terrorist' : 'counter-terrorist'}`}>
                {player.name} - {player.team}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="lobby-button start-button" onClick={handleStartGame}>
        Начать игру
      </button>
    </div>
  );
};

export default LobbyPage;
