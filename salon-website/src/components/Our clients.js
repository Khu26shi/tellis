import React from 'react';
import './OurClients.css';

const OurClients = () => {
  const clientLogos = [
    {
      id: 1,
      logoUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hair-salon-logo-design-template-cec2f4ebd3c26a13f805033c6b1e9776_screen.jpg?ts=1646827912', // Replace with actual logo URL
      altText: 'Partner 1',
    },
    {
      id: 2,
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcYy77Cqzkw0u5N_15NO6Kh-6ig00VfGLcg&s', // Replace with actual logo URL
      altText: 'Partner 2',
    },
    {
      id: 3,
      logoUrl: 'https://media.istockphoto.com/id/1080322982/vector/hair-salon-vector-design-template.jpg?s=612x612&w=0&k=20&c=RnDgjgHMtY6kA3iX_JwBvq1HC-NQ_XJtrX-pBaWMgy8=', // Replace with actual logo URL
      altText: 'Partner 3',
    },
    {
      id: 4,
      logoUrl: 'https://cdn5.vectorstock.com/i/1000x1000/69/99/logo-design-hair-salon-with-scissors-vector-33956999.jpg', // Replace with actual logo URL
      altText: 'Partner 4',
    },
  ];

  return (
    <section className="our-clients-section">
      <h2>Our Clients</h2>
      <div className="clients-grid">
        {clientLogos.map(client => (
          <div key={client.id} className="client-logo">
            <img src={client.logoUrl} alt={client.altText} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
