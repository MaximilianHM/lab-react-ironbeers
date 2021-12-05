import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './../components/Header';

const apiURL = `https://ih-beers-api2.herokuapp.com`;

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/beers`);
      const beersData = response.data;

      setBeers(beersData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2>All Beers Page</h2>
      {beers &&
        beers.map((oneBeer) => {
          return (
            <Link to={'/beer/details/' + oneBeer._id} key={oneBeer._id}>
              <div>
                <img
                  src={oneBeer.image_url}
                  style={{ height: '100px' }}
                  alt="Beer"
                />

                <p>{oneBeer.name}</p>
                <p>{oneBeer.tagline}</p>
                <p>
                  <b>Created by: {oneBeer.contributed_by} </b>
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
