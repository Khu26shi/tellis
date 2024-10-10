import React from 'react';
import './Stats.css'; // import your CSS file for styling

const Stats = () => {
  const statsData = [
    { number: '2000+', label: 'HAPPY CLIENTS' },
    { number: '500', label: 'HAIR CUTS' },
    { number: '150', label: 'STYLERS' },
    { number: '35', label: 'BRANCHES' },
  ];

  return (
    <div className="stats-container">
      {statsData.map((item, index) => (
        <div key={index} className="stat-item">
          <h2>{item.number}</h2>
          
         
          <p>{item.label}</p>
          <i className="ri-scissors-2-fill"></i>
        </div>
        
      ))}
    </div>
  );
};

export default Stats;
