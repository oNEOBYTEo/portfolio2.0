import React, { useState } from 'react';
import Moon from '../../assets/icons/Moon';
import Sun from '../../assets/icons/Sun';

function Menu({ hamButton, scrollDirection, setHamButton }) {
  const [isDark, setIsDark] = useState(false);

  if (!localStorage.getItem('DARK-MODE')) {
    localStorage.setItem('DARK-MODE', false);
  }

  const changeTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem('DARK-MODE', isDark);
  };

  return (
    <ul
      className={`hamburger-menu ${
        hamButton && scrollDirection !== 'up' ? 'right' : 'left'
      }`}
    >
      <li
        className={`switch ${
          localStorage.getItem('DARK-MODE') === 'true'
            ? 'dark-theme'
            : 'light-theme'
        }`}
        onClick={changeTheme}
      >
        <span
          className={
            localStorage.getItem('DARK-MODE') === 'true' ? 'dark' : 'light'
          }
        >
          {localStorage.getItem('DARK-MODE') === 'true' ? (
            <Moon fill="#172542" width={24} height={24} />
          ) : (
            <Sun fill="#f8f9fa" width={24} height={24} />
          )}
        </span>
      </li>
      <li className="ham-item" onClick={() => setHamButton(!hamButton)}>
        <a href="#about-me">About Me</a>
      </li>
      <li className="ham-item" onClick={() => setHamButton(!hamButton)}>
        <a href="#my-projects">Projects</a>
      </li>
      <li className="ham-item" onClick={() => setHamButton(!hamButton)}>
        <a href="#technologies">Technologies</a>
      </li>
      <li className="ham-item" onClick={() => setHamButton(!hamButton)}>
        <a href="#services">Services</a>
      </li>
      <li className="ham-item" onClick={() => setHamButton(!hamButton)}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}

export default Menu;
