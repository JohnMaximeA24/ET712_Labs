import React, { useState } from 'react';
import Card from '../components/Card';
import ModalWindow from '../components/ModalWindow';
import nyc from '../images/nyc.jpg';
import nyc2 from '../images/nyc2.jpg';
import nyc3 from '../images/nyc3.jpg';
import nyc4 from '../images/nyc4.jpg';
import nyc5 from '../images/nyc5.jpg';
import nyc6 from '../images/nyc6.jpg';

function NYC() {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  const cards = [
    { title: 'Times Square', image: nyc, description: 'Times Square is a bustling intersection in New York City known for its bright lights and vibrant energy. It is one of the most famous and busiest places in the world attracting millions of visitors each year. Times Square is surrounded by towering skyscrapers adorned with massive electronic billboards and screens that create a dazzling display of colors and advertisements. It is a hub for entertainment with Broadway theaters restaurants and shops lining the streets. The area is also known for the New Year Eve ball drop which has become an iconic tradition watched by people around the globe. Times Square embodies the spirit of the city and offers an unforgettable experience.' },
    { title: 'Central Park ', image: nyc2, description: 'Central Park is an expansive urban park located in the heart of New York City. Covering 843 acres it offers a peaceful escape from the bustling city with its scenic landscapes and diverse recreational spaces. Central Park features walking trails open fields lakes and wooded areas making it a popular spot for picnics jogging and birdwatching. Iconic landmarks within the park include Bethesda Terrace Bow Bridge and the Central Park Zoo. Visitors can enjoy activities such as boating ice skating and concerts at the park various venues. Central Park is not just a natural retreat but a cultural landmark that enhances the vibrant character of New York City.' },
    { title: 'City Streets of Manhattan', image: nyc3, description: 'The streets of Manhattan are a dynamic mix of energy history and modernity. Known for their grid-like layout the streets are filled with a constant flow of people traffic and iconic yellow cabs. Manhattan is home to famous avenues like Broadway known for its theaters and Times Square which never sleeps. Wall Street represents the financial heart of the city while Fifth Avenue is renowned for high-end shopping and landmarks such as the Empire State Building. The streets are lined with historic buildings modern skyscrapers and diverse restaurants offering cuisines from around the world. Walking through Manhattan is an experience that showcases the city’s unique blend of cultures and fast-paced lifestyle.' },
    { title: 'Empire State Building', image: nyc4, description: 'The Empire State Building is an iconic skyscraper located in Midtown Manhattan New York City. Completed in 1931 it was once the tallest building in the world standing at 381 meters. Known for its Art Deco design and its distinctive spire the Empire State Building is a symbol of American innovation and resilience. It offers breathtaking views of the city from its observation decks on the 86th and 102nd floors attracting millions of visitors each year. The building is also famous for its light displays which change colors to celebrate holidays and special events. As a historic landmark the Empire State Building remains a must-visit attraction and a defining feature of the New York City skyline.' },
    { title: 'Grand Central Terminal', image: nyc5, description: 'Grand Central Terminal is a historic transportation hub located in Midtown Manhattan New York City. Opened in 1913 it is known for its stunning Beaux-Arts architecture and is one of the most visited railway stations in the world. The terminal features the iconic celestial dome adorned with intricate constellations and the grand staircase leading to various platforms and shops. It serves as a symbol of New York Cit bustling energy and a testament to architectural and engineering excellence.' },
    { title: 'Statue of Liberty', image: nyc6, description: 'The Statue of Liberty is a world-famous symbol of freedom and democracy located on Liberty Island in New York Harbor. Gifted by France in 1886 it stands at 93 meters tall from base to torch and was designed by French sculptor Frédéric Auguste Bartholdi. The statue holds a torch in one hand and a tablet inscribed with July 4 1776 in the other symbolizing enlightenment and independence. It has welcomed millions of immigrants and continues to be a powerful symbol of hope and opportunity for people around the world.' },
  ];

  return (
    <div>
      <h1>You have landed in New York City! </h1>
      <h2>Experience the energy and the vibe of NYC.</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            onCardClick={() => openModal(card)}
          />
        ))}
      </div>
      {modalData && (
        <ModalWindow
          title={modalData.title}
          image={modalData.image}
          description={modalData.description}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default NYC;
