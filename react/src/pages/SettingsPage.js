import React from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h1>Настройки</h1>
      <div className="settings-section">
        <h3>Графика</h3>
        <div className="setting-item">
          <label>Качество текстур</label>
          <select>
            <option>Низкое</option>
            <option>Среднее</option>
            <option>Высокое</option>
          </select>
        </div>
        <h3>Звук</h3>
        <div className="setting-item">
          <label>Громкость</label>
          <input type="range" min="0" max="100" defaultValue="80" />
        </div>
        <button className="save-button">Сохранить</button>
      </div>
    </div>
  );
};

export default SettingsPage;
