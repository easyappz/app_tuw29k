import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1>Добро пожаловать в 2D Counter-Strike</h1>
        <p>Готовьтесь к битве! Соберите команду, выберите стратегию и сразитесь с противниками в этом динамичном 2D-шутере.</p>
        <button className="play-button">Войти в игру</button>
      </div>
    </div>
  );
}

export default HomePage;
