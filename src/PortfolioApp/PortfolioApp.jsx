import React, { useState } from 'react';
import { NavBar } from '../components/index';

import './Portfolio.css';
const PortfolioApp = () => {
  return (
    <>
      <NavBar />
      <div className="hero">
        <h1 className="text">I'm Developer</h1>
        <a href="#about-me" className="scroll-about-me"></a>
      </div>
      <div id="about-me">
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div id="imagen">
        <img src="https://picsum.photos/300" alt="img" />
      </div>
    </>
  );
};

export default PortfolioApp;
