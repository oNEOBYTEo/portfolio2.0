import React, { useState } from "react";
import Logo from "../../icons/Logo";

// Hooks
import { useScroll } from "../../hooks/useScroll";

import "./Nav.css";

const Nav = () => {
  const [hamButton, setHamButton] = useState(false);

  const { scrollY, scrollDirection } = useScroll();

  console.log(scrollY, scrollDirection);

  return (
    <nav
      className={`${scrollY < 400 && !hamButton ? "transparent" : "color"} ${
        scrollDirection !== "up" ? "hidden" : "visible"
      }`}
    >
      <div
        className={hamButton ? "active toggle" : "toggle"}
        onClick={() => setHamButton(!hamButton)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Logo fill="#fff" width={32} height={32} />
    </nav>
  );
};

export default Nav;
