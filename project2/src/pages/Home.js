import React from 'react';
import japanFlag from '../images/japanflag.jpg';
import usaFlag from '../images/usaflag.jpg';
import uaeFlag from '../images/uaeflag.jpg';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Explore Countries</h1>
        <h2>
          Discover fascinating cities and countries from around the globe. Click on any section in
          the navigation menu to begin your journey.
        </h2>
      </header>

      <section className="home-intro">
        <div className="home-feature">
          <h1>Why Explore?</h1>
          <h2>
            Traveling and learning about different places enhances your understanding of the world and its diverse cultures.
          </h2>
        </div>

        <div className="home-feature">
          <h1>Featured Destinations</h1>
          <div className="card-container">
            
            <div className="card">
              <img src={japanFlag} alt="Japan Flag" className="card-image" />
              <h3>Japan</h3>
              <p>Discover the Land of the Rising Sun, known for its culture, technology, and breathtaking landscapes.</p>
            </div>

           
            <div className="card">
              <img src={usaFlag} alt="USA Flag" className="card-image" />
              <h3>United States</h3>
              <p>Explore the diversity and innovation of the USA, from bustling cities to serene natural parks.</p>
            </div>

            
            <div className="card">
              <img src={uaeFlag} alt="UAE Flag" className="card-image" />
              <h3>United Arab Emirates</h3>
              <p>Experience luxury and tradition in the UAE, home to iconic skyscrapers and rich heritage.</p>
            </div>
          </div>
        </div>

        <div className="home-feature">
          <h1>Get Started</h1>
          <h2>
            Use the navigation menu to choose a destination and start exploring right away.
          </h2>
          <h2> To start, kindly click the button below and write your name to begin your journey kind friend! </h2>
          <p> Made by @John Maxime Aritmetica</p>
        </div>
      </section>

      <footer className="home-footer">
        {}
      </footer>
    </div>
  );
}

export default Home;