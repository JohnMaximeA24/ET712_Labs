import React from 'react';
import pugImage from '../images/pug.jpg';

const Home = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <img src={pugImage} alt="Pug" className="page-image" />
      <p>Welcome to the Pug Website </p>
    </div>
  );
};

export default Home;