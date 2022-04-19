import React from 'react';
import {
  NavBar,
  Hero,
  AboutMe,
  MyProjects,
  Technologies,
  Footer,
  Services
} from '../components/index';

const PortfolioApp = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <MyProjects />
        <Technologies />
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioApp;
