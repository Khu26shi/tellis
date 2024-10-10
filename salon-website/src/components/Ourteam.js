import React from 'react';
import './Ourteam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'David',
      designation:'Hair cut specialist',
      imgUrl: 'https://media.istockphoto.com/id/1973192099/photo/portrait-of-a-confident-young-male-hairstylist-in-salon.jpg?s=612x612&w=0&k=20&c=jXWecZ15C0D4CxiH4816pDvcqy-htJU1AYBcyBxJ7PY=',
    },
    {
      id: 2,
      name: 'Paul',
      designation:'Beard & Trimming',

      imgUrl: 'https://media.istockphoto.com/id/640143800/photo/handsome-young-man-standing-at-barber-shop.jpg?s=612x612&w=is&k=20&c=CHm9Hh3PTZ06liRx7GJMQiYcUfQXmC_6jRlSO7jb5mk=',
    },
    {
      id: 3,
      name: 'Charlie',
      designation:'Hair Color Specialist',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwFCKgwQquU7IN1DnX9CNmxdcebELTFJ8VDEnm2OlmZaNWH_cmvA6_4N3RyKkkVkJHQE&usqp=CAU',
    },
    {
        id:4,
        name:'John',
        designation:'Massage specialist',
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO7K5GmE3KWoq0AvGW9QQ4b1i21XSXuqnSDQWPgfJmbQ3mtq_73gGA2-RI0STuZzkJVM&usqp=CAU',
    },
    
  ];

  return (
    <section className="our-team-section">
        <h1>SPEACIALIST</h1>
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
            <img src={member.imgUrl} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <h4>{member.designation}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
