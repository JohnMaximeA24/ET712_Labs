import React, { useState } from 'react';
import Card from '../components/Card';
import ModalWindow from '../components/ModalWindow';
import dubai from '../images/dubai.jpg';
import dubai2 from '../images/dubai2.jpg';
import dubai3 from '../images/dubai3.jpg';
import dubai4 from '../images/dubai4.jpg';
import dubai5 from '../images/dubai5.jpg';
import dubai6 from '../images/dubai6.jpg';
function Dubai() {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  const cards = [
    { title: 'Burj Khalifa', image: dubai, description: 'Burj Khalifa is the tallest building in the world located in Dubai United Arab Emirates. Completed in 2010 it stands at a remarkable height of 828 meters and has become a symbol of architectural and engineering excellence. The design of Burj Khalifa was inspired by the shape of the desert flower Hymenocallis featuring a unique arrangement of stacked hexagonal and triangular structures. The building serves multiple purposes housing luxury residences corporate suites and the renowned Atmosphere restaurant on the 122nd floor which offers breathtaking views of the city. Burj Khalifa’s observation decks on the 148th floor provide an unparalleled panoramic view of Dubai and its surroundings.' },
    { title: 'Features and Attractions of Burj Khalifa ', image: dubai2, description: 'Burj Khalifa is not just a skyscraper but a testament to modern ingenuity. The building boasts state-of-the-art amenities including high-speed elevators and a series of sky gardens that offer green spaces amid the towering structure. One of its most famous features is the nightly light and fountain show at the base which is synchronized with music and attracts thousands of visitors. The building also hosts the corporate headquarters of major companies and has served as a venue for various high-profile events and celebrations. As a major landmark Burj Khalifa continues to captivate visitors from around the world who come to admire its architectural grandeur and sweeping views.' },
    
    { title: 'Burj Al Arab ', image: dubai3, description: 'Burj Al Arab is one of the most luxurious and iconic hotels in the world located in Dubai United Arab Emirates. Completed in 1999 it is designed to resemble a sail and stands on an artificial island connected to the mainland by a bridge. Known for its opulence and distinctive silhouette Burj Al Arab has become a symbol of Dubai’s luxury and innovation. The hotel features 202 suites with the most luxurious amenities including private butlers and world-class dining experiences. It boasts an impressive range of facilities such as an underwater restaurant and a rooftop helipad. Burj Al Arab continues to be a must-visit attraction for travelers seeking unparalleled luxury.' },
    { title: 'Dubai Mall ', image: dubai4, description: 'Dubai Mall is one of the largest shopping and entertainment destinations in the world located in the heart of Dubai. Opened in 2008 it spans over 1.1 million square meters and features more than 1,200 retail stores ranging from luxury brands to popular international retailers. Apart from shopping the mall offers a wide array of attractions such as the Dubai Aquarium and Underwater Zoo an ice rink and the VR Park for virtual reality experiences. The Dubai Fountain located just outside the mall is known for its spectacular water and light shows set to music drawing crowds daily. Dubai Mall also offers diverse dining options making it a vibrant hub for visitors from around the globe.' },
    { title: 'Jumeira Beach Towers ', image: dubai5, description: 'Al Seef is a vibrant waterfront destination located along Dubai Creek that beautifully blends the city rich history with modern development. This district is designed to reflect the traditional architecture of old Dubai with its narrow alleyways and wind-tower structures while incorporating contemporary elements such as shops restaurants and cafes. Al Seef offers visitors a unique cultural experience where they can explore artisan markets learn about Dubai heritage and enjoy views of the creek. The area is a popular spot for both locals and tourists who come to stroll along the promenade take in the sights and enjoy the blend of traditional and modern Emirati culture.' },
    { title: 'Al Seef ', image: dubai6, description: ' JBR is a lively beachfront community in Dubai known for its stunning waterfront views and bustling atmosphere. Located along the coast of the Arabian Gulf JBR is famous for its long stretch of sandy beach lined with high-rise residential buildings offering spectacular views of the sea and city skyline. The area is home to The Walk at JBR a vibrant outdoor shopping and dining promenade that features international brands and a variety of restaurants and cafes. Visitors can enjoy activities such as water sports beach lounging and walking along the beachside path. JBR is also known for its lively events and entertainment options making it a popular destination for both tourists and residents.' },
    
  ];

  return (
    <div>
     
      <h1>You have landed in Dubai ! </h1>
      <h2>Experience the rich and luxury places of Dubai .</h2>
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

export default Dubai;