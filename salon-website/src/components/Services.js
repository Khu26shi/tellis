// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className='services'>
            <h1>SERVICES</h1>
            <h2>Our Services</h2>
            
            <div className="service-list">

                <div className="service">
                    <h3>Haircut</h3>
                    <p>Professional haircuts for men and women.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta debitis est numquam iure qui </p>
                    <button>READ MORE</button>
                </div>
                <div className="service">
                    <h3>Shaving</h3>
                    <p>Rejuvenate your skin with our facial treatments.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta debitis est numquam iure qui </p>
                    <button>READ MORE</button>
                </div>
                <div className="service">
                    <h3>Hair Color</h3>
                    <p>Beautiful nail services at affordable prices.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta debitis est numquam iure qui </p>
                    <button>READ MORE</button>
                </div>
                <div className="service">
                    <h3>Beard Trim</h3>
                    <p>Beautiful nail services at affordable prices.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta debitis est numquam iure qui </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </section>
    );
};

export default Services;
