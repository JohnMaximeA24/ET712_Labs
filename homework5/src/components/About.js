// src/components/About.js
import React from 'react';
import pugImage from '../images/pug.jpg';
import './About.css'; // Component-specific styles

function About() {
  return (
    <section className="about-page">
      <h1>About Pugs</h1>
      <img className="about-image" src={pugImage} alt="A close-up of a pug dog" />
      <p>
        Pugs originated in China and were bred to be companions for royalty. 
        They are known for their affectionate nature and make great family pets.
      </p>
    </section>
  );
}

export default About; 
