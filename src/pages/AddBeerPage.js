import React from 'react';
import Header from './../components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ih-beers-api2.herokuapp.com';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const newBeer = {
        name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      };

      await axios.post(`${apiURL}/beers/new`, newBeer);

      setName('');
      setTagline('');
      setDescription('');
      setFirstBrewed('');
      setBrewersTips('');
      setAttenuationLevel(1);
      setContributedBy('');

      navigate('/beers');
    } catch (error) {
      setErrorMessage('Something went wrong. Try again');
      setTimeout(() => setErrorMessage(undefined), 2000);
    }
  };

  return (
    <div>
      <Header />
      <h2>Add Beer Page</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p>{errorMessage}</p>}

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        ></input>

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        ></input>

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        ></input>

        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        ></input>

        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTips}
        ></input>

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        ></input>

        <label>Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        ></input>

        <button type="submit">Add your beer</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
