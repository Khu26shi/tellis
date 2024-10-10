import React from 'react';
import './BarberPricing.css';

const BarberPricing = () => {
  const pricingData = [
    { haircut: "Hair Cut", price: "$10", description: "A timeless, clean cut for men." },
    { haircut: "Hair styling", price: "$25", description: "Simple and neat, short all around." },
    { haircut: "Hair Trimming", price: "$30", description: "Short on the sides, slightly longer on top." },
    { haircut: "Kids Hair Cut", price: "$15", description: "Shaved sides with long hair on top." },
    { haircut: "Shaving", price: "$40", description: "Seamless blend from short to long." },
    { haircut: "Beard Triming", price: "$25", description: "Clean and shape your beard." },
    { haircut: "Face Cleaning", price: "$60", description:"Realxing experience adding glow to your face"},
    {haircut:"Mustache Trim", price:"$12", description:"Perfect shape according to your desired look"}
  ];

  return (
    <div className="pricing-section">
      <h2>Barber Pricing Chart</h2>
      <div className="pricing-table">
        {pricingData.map((item, index) => (
          <div className="pricing-card" key={index}>
            <h3>{item.haircut}</h3>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarberPricing;
