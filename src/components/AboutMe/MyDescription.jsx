import React from 'react';
import my_photo from '../../assets/images/my_photo.jpg';
import CV from '../../assets/pdfs/CV.pdf';

const MyDescription = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={my_photo} alt="i'm" />
      <p>
        Hello, my name is <b>Anderson Cifuentes</b>, I am a Colombian{' '}
        <b>web developer</b>, I specialize more in the <b>Frontend</b> area
        although I also know about <b>Backend</b>, enthusiastic about
        self-taught learning and always willing to participate in new projects.
      </p>
      <a className="section-a" href={CV} download="Anderson-Cifuentes-Cv">
        <span>Download CV</span>
      </a>
    </section>
  );
};

export default MyDescription;
