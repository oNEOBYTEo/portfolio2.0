import React from 'react';

// Icons
import { Bulb, Cloud, Laptop } from '../../assets/icons/index';

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <article>
        <h3>Web Design</h3>
        <Laptop width={68} height={68} />
        <p>
          Web design Web pages prepared with responsive design, adapted to
          mobiles and tablets.
        </p>
      </article>
      <article>
        <h3>Backend Development </h3>
        <Cloud width={68} height={68} />
        <p>
          Creation of APIs or Databases for applications, using best practices.
        </p>
      </article>
      <article>
        <h3>Consultancy</h3>
        <Bulb width={68} height={68} />
        <p>
          Give ideas, and a vision of how long it would take to execute a
          project.
        </p>
      </article>
    </section>
  );
};

export default Services;
