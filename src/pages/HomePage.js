import React from 'react';
import { Link } from 'react-router-dom';
import allBeersImg from './../assets/beers.png';
import randomBeerImg from './../assets/random-beer.png';
import newBeerImg from './../assets/new-beer.png';

function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>

      <Link to="/beers">
        <div>
          <img src={allBeersImg} alt="" />
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
            voluptas harum consectetur quaerat, enim quo odio minus placeat
            accusantium, ratione a tempore odit sed eos non eaque earum nihil
            labore!
          </p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src={randomBeerImg} alt="" />
          <h2>Random Beer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            autem obcaecati explicabo minus ut dignissimos repudiandae animi
            rem! Omnis id ut accusamus at ipsam libero. Ipsam laudantium
            excepturi et eveniet.
          </p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <img src={newBeerImg} alt="" />
          <h2>New Beers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla
            ipsa sit a beatae quidem et sapiente illo sequi? Et autem nihil
            sapiente quod quaerat eligendi, recusandae fugit amet sit!
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
