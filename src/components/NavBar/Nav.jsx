import React, { useState } from 'react';

// Icons
import Logo from '../../assets/icons/Logo';

// Components
import Menu from './Menu';

// Hooks
import { useScroll } from '../../hooks/useScroll';

const Nav = () => {
  // Open and close menu
  const [hamButton, setHamButton] = useState(false);

  // Detect scroll
  const { scrollY, scrollDirection } = useScroll();

  return (
    <>
      <nav
        className={`${
          scrollY < screen.height && !hamButton ? 'transparent' : 'color'
        } ${scrollDirection !== 'up' ? 'visible' : 'hidden'}`}
      >
        <a href="#">
          <Logo fill="#f8f9fa" width={32} height={32} />
        </a>
        <div
          className={hamButton ? 'active toggle' : 'toggle'}
          onClick={() => setHamButton(!hamButton)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Menu hamButton={hamButton} scrollDirection={scrollDirection} setHamButton={setHamButton} />
      </nav>
    </>
  );
};

export default Nav;
