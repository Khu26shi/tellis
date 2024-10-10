// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
        <div className="overlay"></div>
      <h1>Our Hairstyle enhances your smile !!</h1>
      <p>Our barbershop is territory created purely for males who 
        <br />appreciate premium quality,time and looks </p>
      <button>Make an Appointment</button>
    </section>
  );
};

export default Hero;
