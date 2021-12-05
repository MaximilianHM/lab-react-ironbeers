import React from 'react';
import Header from './../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/random`);
      const randomBeerData = response.data;

      setRandomBeer(randomBeerData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2>Random Beer</h2>
      <div>
        <img style={{ width: '100px' }} src={randomBeer.image_url} alt="Beer" />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default RandomBeer;
