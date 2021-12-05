import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './../components/Header';

import axios from 'axios';
const apiURL = `https://ih-beers-api2.herokuapp.com`;

function BeerDetailsPage() {
  const [beer, setBeer] = useState([]);

  const { beerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/beers/${beerId}`);
      const oneBeerData = response.data;

      setBeer(oneBeerData);
    };
    fetchData();
  }, [beerId]);

  return (
    <div>
      <Header />
      <div>
        <h2>Beer Details</h2>
        <img style={{ width: '100px' }} src={beer.image_url} alt="Beer" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>

        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
