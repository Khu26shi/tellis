// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="end">
        <div className="text">
          <p className='para'>There are many variations of passenges<br></br>
            of Lorem Ipsum Available , But The <br></br>
            Majority have suffered alteation in <br></br>
            some form</p>
          <form action="">
            <label htmlFor="email">
              <input type="email" placeholder='email' />
            </label>
            <div className='button'>
              <button>Subscribe</button></div>
          </form>
        </div>
        <div className="link">
          <h1>QUICK LINKS</h1>
          <a href="#home"><i className="ri-scissors-line"></i>HOME</a><br /><br />
          <a href="#about"><i className="ri-scissors-line"></i>ABOUT US</a><br /><br />
          <a href="#gallery"><i className="ri-scissors-line"></i>GALLERY</a><br /><br />
          <a href="#contact"><i className="ri-scissors-line"></i>CONTACT US</a>
        </div>
        <div className="hair">
          <h1>SERVICES</h1>
          <a href="#home"><i className="ri-scissors-line"></i>HAIR</a><br /><br />
          <a href="#about"><i className="ri-scissors-line"></i>BEAUTY</a><br /><br />
          <a href="#gallery"><i className="ri-scissors-line"></i>SPA</a><br /><br />
          <a href="#contact"><i className="ri-scissors-line"></i>MASSAGE</a>
        </div>
        <div className="contact">
          <h1>CONTACT</h1>
          <a href="#home"><i className="ri-phone-line"></i>+4125987645</a><br /><br />
          <a href="#about"><i className="ri-mail-line"></i>barberz.123@info.com</a><br /><br />
          <a href="#gallery"><i className="ri-map-pin-line"></i>GOLDEN STREET, CHINATOWN</a><br /><br />
          <div className="icon">
          <i className="ri-facebook-box-fill"></i>
          <i className="ri-twitter-line"></i>
          <i className="ri-youtube-fill"></i>
          <i class="ri-instagram-line"></i>
          </div>
          
        </div>


      </div>

      <p className='copyright'>© 2024 Salon Name. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
