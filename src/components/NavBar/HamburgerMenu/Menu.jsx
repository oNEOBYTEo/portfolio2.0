import React from 'react';

function Menu({ hamButton, scrollDirection }) {
  return (
    <ul
      className={`hamburger-menu ${
        hamButton && scrollDirection !== 'up' ? 'right' : 'left'
      }`}
    >
      <li className="ham-item">About Me</li>
      <li className="ham-item">Projects</li>
      <li className="ham-item">Technologies</li>
      <li className="ham-item">My services</li>
    </ul>
  );
}

export default Menu;
