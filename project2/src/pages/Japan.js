import React, { useState } from 'react';
import Card from '../components/Card';
import ModalWindow from '../components/ModalWindow';
import japan from '../images/japan.jpg';
import japan2 from '../images/japan2.jpg';
import japan3 from '../images/japan3.jpg';
import japan4 from '../images/japan4.jpg';
import japan5 from '../images/japan5.jpg';
import japan6 from '../images/japan6.jpg';


function Japan() {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  const cards = [
    { title: 'Shibuya', image: japan, description: 'Possibly the most well-known pedestrian crossing in the world is the Shibuya Crossing, sometimes referred to as the Shibuya Scramble. Thousands of people cross from all directions as the traffic lights turn red, forming an amazing wave of motion that captures the spirit of the city. An incredible viewpoint of this famous picture may be had from the nearby buildings, such as the Starbucks at Shibuya Tsutaya or the Shibuya Sky observation deck.' },
    { title: 'Kyoto', image: japan2, description: 'Kyoto, the former capital of Japan, is a city steeped in history and culture, known for its well-preserved temples, shrines, and traditional wooden houses. Renowned for its beautiful gardens, Zen temples like Kinkaku-ji (the Golden Pavilion), and vibrant geisha districts such as Gion, Kyoto embodies the essence of traditional Japanese aesthetics. It’s also famous for its seasonal beauty, with cherry blossoms in the spring and vibrant autumn foliage. As a cultural heart of Japan, Kyoto offers an unforgettable experience, blending ancient traditions with modern life.' },
    { title: 'Torii Gates', image: japan3, description: 'Torii gates are iconic structures in Japan that mark the entrance to sacred spaces like Shinto shrines. With their simple yet elegant design of two vertical posts and a horizontal beam they signify the transition from the ordinary to the divine. The most famous torii gates are found at Fushimi Inari Shrine in Kyoto where thousands of red gates create a breathtaking path that draws visitors from around the world. Painted in vibrant red or orange these gates symbolize protection and good fortune.' },
    { title: 'Mount Fuji', image: japan4, description: 'Mount Fuji is Japan highest and most iconic mountain standing at 3776 meters. A symbol of beauty and strength it has inspired artists poets and pilgrims for centuries. With its symmetrical cone shape often capped with snow in winter Mount Fuji is a breathtaking sight that draws visitors from around the world. It is a popular destination for climbers and nature lovers offering stunning views from its summit and serene landscapes around its base. Recognized a UNESCO World Heritage site Mount Fuji embodies the spirit of Japan and continues to captivate all who see it.' },
    { title: 'Japanese Bamboo', image: japan5, description: 'Bamboo is an integral part of Japanese culture and natural landscapes. It symbolizes strength resilience and versatility. In Japan bamboo is used in various ways from building materials to decorative items and traditional crafts such as baskets and utensils. Bamboo forests like those in Arashiyama near Kyoto create a serene and enchanting atmosphere that attracts visitors from around the world. The sound of the wind rustling through bamboo stalks is considered calming and has inspired poetry and art for centuries. Bamboo also plays an important role in Japanese gardens providing a sense of tranquility and natural beauty.' },
    { title: 'Japan Cherry Blossoms', image: japan6, description: 'Cherry blossoms known as sakura in Japanese are one of Japan most beloved symbols of beauty and the changing seasons. Every spring the country is transformed as cherry trees burst into a stunning display of pink and white flowers. The fleeting nature of the blossoms is celebrated for its reminder of the transient beauty of life. Hanami or flower viewing is a traditional custom where friends and families gather in parks under the blooming trees to appreciate their beauty and share food and drinks. The sight of cherry blossoms has inspired countless poems paintings and festivals making them an iconic part of Japanese culture.' },
  ];
  

  return (
    <div>
      <h1>You have landed in Japan</h1>
      <h2>Discover the charm of the beautiful Japan.</h2>
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

export default Japan;