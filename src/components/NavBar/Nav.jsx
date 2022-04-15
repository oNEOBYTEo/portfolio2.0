import React, { useState } from 'react';

// Icons
import Logo from '../../icons/Logo';

// Components
import Menu from './HamburgerMenu/Menu';

// Hooks
import { useScroll } from '../../hooks/useScroll';

import './Nav.css';

const Nav = () => {
  const [hamButton, setHamButton] = useState(false);

  const { scrollY, scrollDirection } = useScroll();

  return (
    <>
      <nav
        className={`${scrollY < 400 && !hamButton ? 'transparent' : 'color'} ${
          scrollDirection !== 'up' ? 'visible' : 'hidden'
        }`}
      >
        <div
          className={hamButton ? 'active toggle' : 'toggle'}
          onClick={() => setHamButton(!hamButton)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Logo fill="#f8f9fa" width={32} height={32} />
      </nav>
      <Menu hamButton={hamButton} scrollDirection={scrollDirection} />
    </>
  );
};

export default Nav;
