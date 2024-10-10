// src/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';

import './Stats.css'; // import your CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic (e.g., send data to server)
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (

    <div className="contact-us">
    
      <div className="start">
        <h1>Contact </h1>
        <h2>Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore veritatis iure incidunt eos expedita corrupti ut consectetur explicabo excepturi molestias, quaerat tempora rem obcaecati fuga deserunt? Nemo, voluptate facilis.</p>

      </div>
      <form onSubmit={handleSubmit} className='form'>
        <h1>Make an Appointment</h1>
        <p>Barber is a person whose occupation is Mainly to </p>
        <p>Cut Dress Groom</p>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange} placeholder='name'
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange} placeholder='Email'
          />

          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.email}
            onChange={handleChange} placeholder='phone'
          />



          <label htmlFor="message"></label>
          <input
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange} placeholder='time'
          ></input>
          </div>
          <div>

          <label htmlFor="services"></label>
          <input
            type="servvices"
            id="services"
            name="services"
            value={formData.email}
            onChange={handleChange} placeholder='services' 
          />
          <label htmlFor="barber"></label>
          <input
            type="barber"
            id="barber"
            name="barber"
            value={formData.email}
            onChange={handleChange} placeholder='Choose barber'
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Make An Appointment</button>
      </form>
     
    </div>
      );
    };
    
   
    
    export default ContactUs;
    
   
    




