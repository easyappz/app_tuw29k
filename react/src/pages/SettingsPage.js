import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const [graphics, setGraphics] = useState({
    resolution: '1920x1080',
    quality: 'high',
    shadows: true,
    antiAliasing: true,
  });

  const [sound, setSound] = useState({
    masterVolume: 80,
    effectsVolume: 60,
    musicVolume: 40,
  });

  const [controls, setControls] = useState({
    sensitivity: 5,
    invertMouse: false,
    keyBindings: {
      moveForward: 'W',
      moveBackward: 'S',
      strafeLeft: 'A',
      strafeRight: 'D',
      jump: 'Space',
      shoot: 'Mouse1',
    },
  });

  const handleGraphicsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGraphics((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSoundChange = (e) => {
    const { name, value } = e.target;
    setSound((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handleControlsChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in controls.keyBindings) {
      setControls((prev) => ({
        ...prev,
        keyBindings: {
          ...prev.keyBindings,
          [name]: value.toUpperCase(),
        },
      }));
    } else {
      setControls((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : parseInt(value),
      }));
    }
  };

  const saveSettings = () => {
    alert('Настройки сохранены!');
  };

  return (
    <div className="settings-container">
      <h1>Настройки</h1>

      <div className="settings-section">
        <h2>Графика</h2>
        <div className="setting-item">
          <label>Разрешение экрана</label>
          <select
            name="resolution"
            value={graphics.resolution}
            onChange={handleGraphicsChange}
          >
            <option value="1280x720">1280x720</option>
            <option value="1920x1080">1920x1080</option>
            <option value="2560x1440">2560x1440</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Качество графики</label>
          <select
            name="quality"
            value={graphics.quality}
            onChange={handleGraphicsChange}
          >
            <option value="low">Низкое</option>
            <option value="medium">Среднее</option>
            <option value="high">Высокое</option>
          </select>
        </div>
        <div className="setting-item checkbox">
          <label>
            <input
              type="checkbox"
              name="shadows"
              checked={graphics.shadows}
              onChange={handleGraphicsChange}
            />
            Тени
          </label>
        </div>
        <div className="setting-item checkbox">
          <label>
            <input
              type="checkbox"
              name="antiAliasing"
              checked={graphics.antiAliasing}
              onChange={handleGraphicsChange}
            />
            Сглаживание
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Звук</h2>
        <div className="setting-item range">
          <label>Общая громкость: {sound.masterVolume}%</label>
          <input
            type="range"
            name="masterVolume"
            min="0"
            max="100"
            value={sound.masterVolume}
            onChange={handleSoundChange}
          />
        </div>
        <div className="setting-item range">
          <label>Громкость эффектов: {sound.effectsVolume}%</label>
          <input
            type="range"
            name="effectsVolume"
            min="0"
            max="100"
            value={sound.effectsVolume}
            onChange={handleSoundChange}
          />
        </div>
        <div className="setting-item range">
          <label>Громкость музыки: {sound.musicVolume}%</label>
          <input
            type="range"
            name="musicVolume"
            min="0"
            max="100"
            value={sound.musicVolume}
            onChange={handleSoundChange}
          />
        </div>
      </div>

      <div className="settings-section">
        <h2>Управление</h2>
        <div className="setting-item range">
          <label>Чувствительность мыши: {controls.sensitivity}</label>
          <input
            type="range"
            name="sensitivity"
            min="1"
            max="10"
            value={controls.sensitivity}
            onChange={handleControlsChange}
          />
        </div>
        <div className="setting-item checkbox">
          <label>
            <input
              type="checkbox"
              name="invertMouse"
              checked={controls.invertMouse}
              onChange={handleControlsChange}
            />
            Инвертировать мышь
          </label>
        </div>
        <div className="key-bindings">
          <h3>Назначение клавиш</h3>
          <div className="setting-item">
            <label>Движение вперед</label>
            <input
              type="text"
              name="moveForward"
              value={controls.keyBindings.moveForward}
              onChange={handleControlsChange}
              maxLength="1"
            />
          </div>
          <div className="setting-item">
            <label>Движение назад</label>
            <input
              type="text"
              name="moveBackward"
              value={controls.keyBindings.moveBackward}
              onChange={handleControlsChange}
              maxLength="1"
            />
          </div>
          <div className="setting-item">
            <label>Шаг влево</label>
            <input
              type="text"
              name="strafeLeft"
              value={controls.keyBindings.strafeLeft}
              onChange={handleControlsChange}
              maxLength="1"
            />
          </div>
          <div className="setting-item">
            <label>Шаг вправо</label>
            <input
              type="text"
              name="strafeRight"
              value={controls.keyBindings.strafeRight}
              onChange={handleControlsChange}
              maxLength="1"
            />
          </div>
          <div className="setting-item">
            <label>Прыжок</label>
            <input
              type="text"
              name="jump"
              value={controls.keyBindings.jump}
              onChange={handleControlsChange}
              maxLength="5"
            />
          </div>
          <div className="setting-item">
            <label>Стрельба</label>
            <input
              type="text"
              name="shoot"
              value={controls.keyBindings.shoot}
              onChange={handleControlsChange}
              maxLength="6"
            />
          </div>
        </div>
      </div>

      <button className="save-button" onClick={saveSettings}>
        Сохранить настройки
      </button>
    </div>
  );
};

export default SettingsPage;
