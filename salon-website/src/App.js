// src/App.js
import React from 'react';
import ContactUs from './components/ContactUs';
import Stats from './components/Stats';
import Ourteam from './components/Ourteam';
import OurClients from './components/Our clients';
import Work from './components/Work' ;
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Intro from './components/Intro';
import BarberPricing from './components/BarberPricing';
import Appointment from './components/Appointment';
import BlogSection from './components/BlogSection';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro/>
      <Services />
      <ContactUs/>
      <Stats/>
      <Ourteam/>
      <Testimonials/>
      <BarberPricing/>
      <Appointment/>
      <BlogSection/>
      <OurClients/>
      <Work/>
    
      <Footer />
      

    </div>
  );
}

export default App;
