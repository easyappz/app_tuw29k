import React, { useState, useEffect, useRef } from 'react';
import './MapPage.css';
import GameMap from '../components/GameMap';
import Player from '../components/Player';
import Obstacle from '../components/Obstacle';
import Bullet from '../components/Bullet';
import GameControls from '../components/GameControls';

function MapPage() {
  const [playerPosition, setPlayerPosition] = useState({ x: 400, y: 300 });
  const [playerDirection, setPlayerDirection] = useState(0);
  const [isShooting, setIsShooting] = useState(false);
  const [bullets, setBullets] = useState([]);
  const keysPressed = useRef({});
  const mapRef = useRef(null);

  const obstacles = [
    { position: { x: 200, y: 150 }, size: { width: 50, height: 200 } },
    { position: { x: 550, y: 400 }, size: { width: 60, height: 180 } },
    { position: { x: 300, y: 500 }, size: { width: 200, height: 50 } },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysPressed.current[e.key.toLowerCase()] = true;
      if (e.key === ' ') {
        setIsShooting(true);
      }
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key.toLowerCase()] = false;
      if (e.key === ' ') {
        setIsShooting(false);
      }
    };

    const handleMouseMove = (e) => {
      if (mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const angle = Math.atan2(mouseY - playerPosition.y, mouseX - playerPosition.x);
        setPlayerDirection(angle * (180 / Math.PI));
      }
    };

    const handleMouseDown = () => {
      setIsShooting(true);
      const newBullet = {
        id: Date.now(),
        position: { x: playerPosition.x + 20, y: playerPosition.y + 18 },
        direction: playerDirection,
        distance: 0,
      };
      setBullets((prevBullets) => [...prevBullets, newBullet]);
    };

    const handleMouseUp = () => {
      setIsShooting(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [playerPosition, playerDirection]);

  useEffect(() => {
    const movePlayer = () => {
      setPlayerPosition((prevPosition) => {
        let newX = prevPosition.x;
        let newY = prevPosition.y;
        const speed = 5;

        if (keysPressed.current['w'] || keysPressed.current['arrowup']) newY -= speed;
        if (keysPressed.current['s'] || keysPressed.current['arrowdown']) newY += speed;
        if (keysPressed.current['a'] || keysPressed.current['arrowleft']) newX -= speed;
        if (keysPressed.current['d'] || keysPressed.current['arrowright']) newX += speed;

        newX = Math.max(0, Math.min(760, newX));
        newY = Math.max(0, Math.min(560, newY));

        for (const obstacle of obstacles) {
          if (
            newX < obstacle.position.x + obstacle.size.width &&
            newX + 40 > obstacle.position.x &&
            newY < obstacle.position.y + obstacle.size.height &&
            newY + 40 > obstacle.position.y
          ) {
            return prevPosition;
          }
        }

        return { x: newX, y: newY };
      });

      setBullets((prevBullets) => {
        const speed = 10;
        const updatedBullets = prevBullets.map((bullet) => {
          const newX = bullet.position.x + speed * Math.cos(bullet.direction * Math.PI / 180);
          const newY = bullet.position.y + speed * Math.sin(bullet.direction * Math.PI / 180);
          const newDistance = bullet.distance + speed;

          return {
            ...bullet,
            position: { x: newX, y: newY },
            distance: newDistance,
          };
        }).filter((bullet) => {
          const isOutOfBounds = bullet.position.x < 0 || bullet.position.x > 800 || bullet.position.y < 0 || bullet.position.y > 600;
          const hasHitObstacle = obstacles.some(obstacle => 
            bullet.position.x > obstacle.position.x &&
            bullet.position.x < obstacle.position.x + obstacle.size.width &&
            bullet.position.y > obstacle.position.y &&
            bullet.position.y < obstacle.position.y + obstacle.size.height
          );
          return !isOutOfBounds && !hasHitObstacle && bullet.distance < 500;
        });

        return updatedBullets;
      });
    };

    const interval = setInterval(movePlayer, 1000 / 60);
    return () => clearInterval(interval);
  }, [obstacles]);

  return (
    <div className="map-page">
      <h1>Карта игры</h1>
      <GameMap ref={mapRef}>
        <Player position={playerPosition} direction={playerDirection} isShooting={isShooting} />
        {obstacles.map((obstacle, index) => (
          <Obstacle key={index} position={obstacle.position} size={obstacle.size} />
        ))}
        {bullets.map((bullet) => (
          <Bullet key={bullet.id} position={bullet.position} direction={bullet.direction} />
        ))}
      </GameMap>
      <GameControls />
    </div>
  );
}

export default MapPage;
