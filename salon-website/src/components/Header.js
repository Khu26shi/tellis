// src/components/Header.js
import React from 'react';
import './Header.css'; // Add some styling here if needed

const Header = () => {
  return (
    <header className='header'>
      
      <nav>
        <a href="#Home">Home</a>
        <a href="#services">Services</a>
        <a href="#testimonials">About Us</a>
        <a href="#team">Team</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;