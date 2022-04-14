import React, { useState } from "react";
import { NavBar } from "../components/index";

import "./Portfolio.css";
const PortfolioApp = () => {
  return (
    <>
      <NavBar />
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
      <div>
        <img src="https://picsum.photos/300" alt="img" />
      </div>
    </>
  );
};

export default PortfolioApp;
