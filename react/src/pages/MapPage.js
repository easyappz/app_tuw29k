import React, { useState } from 'react';
import './MapPage.css';

const MapPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const points = [
    { id: 1, name: 'База CT', x: 20, y: 20, description: 'Основная база контр-террористов.' },
    { id: 2, name: 'База T', x: 80, y: 80, description: 'Основная база террористов.' },
    { id: 3, name: 'Точка A', x: 30, y: 50, description: 'Первая точка закладки бомбы.' },
    { id: 4, name: 'Точка B', x: 70, y: 30, description: 'Вторая точка закладки бомбы.' },
    { id: 5, name: 'Центр', x: 50, y: 50, description: 'Центральная зона карты.' },
  ];

  const handlePointClick = (point) => {
    setSelectedPoint(point);
  };

  return (
    <div className="map-container">
      <h1>Карта игрового мира</h1>
      <div className="map-area">
        {points.map((point) => (
          <div
            key={point.id}
            className={`map-point ${selectedPoint?.id === point.id ? 'selected' : ''}`}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            onClick={() => handlePointClick(point)}
          >
            <div className="point-marker"></div>
            <div className="point-label">{point.name}</div>
          </div>
        ))}
      </div>
      {selectedPoint && (
        <div className="point-details">
          <h2>{selectedPoint.name}</h2>
          <p>{selectedPoint.description}</p>
        </div>
      )}
    </div>
  );
};

export default MapPage;
