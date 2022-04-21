import React from 'react';
import {
  Css,
  Git,
  Html,
  Js,
  Nodejs,
  Postgresql,
  Python,
  React_icon
} from '../../assets/icons/index';

const MyTechnologies = () => {
  return (
    <section id="technologies">
      <h2>What technologies do I use?</h2>
      <article>
        <Js width={64} height={64} />
        <h4>JavaScript</h4>
      </article>
      <article>
        <Css width={64} height={64} />
        <h4>CSS</h4>
      </article>
      <article>
        <Html width={64} height={64} />
        <h4>HTML</h4>
      </article>
      <article>
        <React_icon width={64} height={64} />
        <h4>React</h4>
      </article>
      <article>
        <Nodejs width={64} height={64} />
        <h4>NodeJS</h4>
      </article>
      <article>
        <Python width={64} height={64} />
        <h4>Python</h4>
      </article>
      <article>
        <Postgresql width={64} height={64} />
        <h4>PostgreSQL</h4>
      </article>
      <article>
        <Git width={64} height={64} />
        <h4>Git</h4>
      </article>
    </section>
  );
};

export default MyTechnologies;
