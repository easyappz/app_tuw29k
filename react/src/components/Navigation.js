import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Главная
      </NavLink>
      <NavLink to="/lobby" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Лобби
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Настройки
      </NavLink>
      <NavLink to="/map" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Карта
      </NavLink>
    </nav>
  );
};

export default Navigation;
