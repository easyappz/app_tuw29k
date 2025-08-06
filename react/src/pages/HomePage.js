import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Добро пожаловать в игру!</h1>
      <p>Готовы сразиться в эпичных битвах в стиле Counter-Strike? Присоединяйтесь к нам!</p>
      <button className="start-button">Начать игру</button>
    </div>
  );
};

export default HomePage;
