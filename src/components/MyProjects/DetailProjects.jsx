import React from 'react';

// Images
import E_commerce from '../../assets/images/victory-jewel.png';
import Pokeapi from '../../assets/images/pokeapi.png';
import Api from '../../assets/images/api.png';

const DetailProjects = () => {
  return (
    <section id="my-projects">
      <h2>My Projects</h2>
      <article>
        <h3>E-Commerce</h3>
        <img src={E_commerce} alt="ECommerce-project" />
        <p>
          In this project I developed the <b>fontend</b> of the{' '}
          <b>E-commerce</b> in this case of a jewelry store, with the{' '}
          <b>functionality</b> of a login, add products, simulate buying them
          and have a history of those orders.
        </p>
        <a
          className="section-a"
          href="https://victory-jewels.netlify.app/"
          target="_blank"
        >
          <span>Go to the website</span>
        </a>
      </article>
      <article>
        <h3>Pokeapi</h3>
        <img src={Pokeapi} alt="pokeapi-project" />
        <p>
          In this project with the help of the <b>Pokeapi</b>, I rendered each
          pokemon and listed them by their type and you can also see any of
          these pokemons in more detail.
        </p>
        <a
          className="section-a"
          href="https://pokedex-proyect.netlify.app/#/"
          target="_blank"
        >
          <span>Go to the website</span>
        </a>
      </article>
      <article>
        <h3>Movie Api</h3>
        <img src={Api} alt="api" />
        <p>
          In this project I developed an API which can store images, actors,
          users and movie data, create, read, update and delete data, implement
          authentication by <b>JWT</b> (JSON Web Token).
        </p>
        <a
          className="section-a"
          href="https://documenter.getpostman.com/view/18826843/UVyrUbxs"
          target="_blank"
        >
          <span>View documentation</span>
        </a>
      </article>
      <article>
        <h3>E-Commerce Backend</h3>
        <img src={Api} alt="api" />
        <p>
          In this project I made a database that would be used for an{' '}
          <b>E-Commerce</b> has all the features of a <b>CRUD</b> and in
          addition to that I used authorization by <b>JWT</b>(JSON Web Token).
        </p>
        <a
          className="section-a"
          href="https://documenter.getpostman.com/view/18826843/UVysvuzK"
          target="_blank"
        >
          <span>View documentation</span>
        </a>
      </article>
    </section>
  );
};

export default DetailProjects;
